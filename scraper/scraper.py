import pandas as pd

data = pd.read_csv("data/yellowpages_restaurants.csv")

data = data[[
    "Name",
    "Categories",
    "City",
    "Street",
    "Phone"
]]

data["Source"] = "YellowPages"

data = data.dropna()

data = data.drop_duplicates()

data = data.rename(columns={
    "Name": "business_name",
    "Categories": "category",
    "City": "city",
    "Street": "address",
    "Phone": "phone",
    "Source": "source"
})

print("Total Clean Records:", len(data))

print(data.head(10))

data.to_csv("data/business_listings_clean.csv", index=False)

print("CSV Clean Save Successfully!")
