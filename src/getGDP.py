import requests
import json

def get_gdp():
    url = 'https://tablebuilder.singstat.gov.sg/api/table/tabledata/M015661'
    headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    response = requests.get(url, headers=headers)
    return response.json()

def clean_keys(row):
    quarters = {
        "1Q": "03-31",
        "2Q": "06-30",  
        "3Q": "09-30",
        "4Q": "12-31",  # Fixed the date for the 4th quarter
    }
    key = row['key']
    year, quarter = key.split(" ")
    
    if quarter not in quarters:
        return None

    date_string = f"{year}-{quarters[quarter]}"
    value = float(row['value'])
    return {'date': date_string, 'value': value}

def get_clean_data():
    gdp_json = get_gdp()
    rows = gdp_json['Data']['row']
    for row in rows:
        if len(row['columns']) != 0:
            cleaned_data = [clean_keys(column) for column in row['columns']]
            print(row['rowText'])
            for data in cleaned_data:
                if data:  # Ensure data is not None
                    print(data)
        else:
            print(f"Row {row['rowText']} has no columns")

def main():
    get_clean_data()
    # Here, you would typically write the cleaned data to a file or process it further.
    # This step is skipped as the original code does not actually write to a file due to the commented out part.

if __name__ == "__main__":
    main()
