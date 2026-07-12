import { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function App() {

  const [cityData, setCityData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [summary, setSummary] = useState({});

  const [city, setCity] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/city-count")
      .then((response) => {
        setCityData(response.data);
      });

    axios
      .get("http://127.0.0.1:8000/category-count")
      .then((response) => {
        setCategoryData(response.data);
      });

    axios
      .get("http://127.0.0.1:8000/source-count")
      .then((response) => {
        setSourceData(response.data);
      });

    axios
      .get("http://127.0.0.1:8000/dashboard-summary")
      .then((response) => {
        setSummary(response.data);
      });

  }, []);

  const searchCity = () => {

    axios
      .get(`http://127.0.0.1:8000/search?city = ${city}`)
      .then((response) => {

        setSearchResult(response.data);

        if (response.data.length === 0) {
          alert("No Business Found");
        }

      });

  };

return (
  <div
    style = {{
      padding: "20px",
      maxWidth: "1100px",
      margin: "auto",
    }}
  >

      <h1 style = {{ textAlign: "center" }}>
        Business Listings Dashboard
      </h1>

      {}

      <div
        style = {{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >        {}

        <div
          style = {{
            background: "#3b82f6",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h3>Total Businesses</h3>
          <h2>{summary.total_businesses}</h2>
        </div>

        {}

        <div
          style = {{
            background: "#22c55e",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h3>Total Cities</h3>
          <h2>{summary.total_cities}</h2>
        </div>

        {}

        <div
          style = {{
            background: "#f97316",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h3>Total Categories</h3>
          <h2>{summary.total_categories}</h2>
        </div>

        {}

        <div
          style = {{
            background: "#8b5cf6",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h3>Total Sources</h3>
          <h2>{summary.total_sources}</h2>
        </div>

      </div>

      {}

      <h2>Search Business by City</h2>

      <input
        type = "text"
        placeholder = "Enter City Name"
        value = {city}
        onChange = {(e) => setCity(e.target.value)}
        onKeyDown = {(e) => {
          if (e.key === "Enter") {
            searchCity();
          }
        }}
        style = {{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      />

      <button
        onClick = {searchCity}
        style = {{
          padding: "10px 20px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      <br />
      <br />

      {searchResult.length > 0 && (
        <>
          <h2>Search Results</h2>

          <table
            border = "1"
            cellPadding = "10"
            style = {{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "30px",
            }}
          >
            <thead>
              <tr>
                <th>Business Name</th>
                <th>City</th>
                <th>Category</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {searchResult.map((item) => (
                <tr key = {item.id}>
                  <td>{item.business_name}</td>
                  <td>{item.city}</td>
                  <td>{item.category}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </>
      )}
            {}

      <h2>City Wise Count</h2>

      <table
        border = "1"
        cellPadding = "10"
        style = {{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "30px",
        }}
      >
        <thead>
          <tr>
            <th>City</th>
            <th>Total Businesses</th>
          </tr>
        </thead>

        <tbody>
          {cityData.map((item, index) => (
            <tr key = {index}>
              <td>{item.city}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {}

      <h2>City Wise Business Chart</h2>

      <BarChart width = {900} height = {400} data = {cityData}>
        <CartesianGrid strokeDasharray = "3 3" />
        <XAxis dataKey = "city" />
        <YAxis />
        <Tooltip />
        <Bar dataKey = "total" fill = "#3b82f6" />
      </BarChart>

      <br />
      <br />

      {}

      <h2>Source Wise Business Chart</h2>

      <BarChart width = {900} height = {350} data = {sourceData}>
        <CartesianGrid strokeDasharray = "3 3" />
        <XAxis dataKey = "source" />
        <YAxis />
        <Tooltip />
        <Bar dataKey = "total" fill = "#22c55e" />
      </BarChart>

      <br />
      <br />

      {}

      <h2>Top 10 Category Wise Business Chart</h2>

      <BarChart
        width = {900}
        height = {400}
        data = {categoryData.slice(0, 10)}
      >
        <CartesianGrid strokeDasharray = "3 3" />
        <XAxis dataKey = "category" hide />
        <YAxis />
        <Tooltip />
        <Bar dataKey = "total" fill = "#f97316" />
      </BarChart>

    </div>
  );
}

export default App;
