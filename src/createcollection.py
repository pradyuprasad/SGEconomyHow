import chromadb
chroma_client = chromadb.Client()



collection = chroma_client.create_collection(name="my_collection")


GDP_description = "Measures economic output adjusted for price changes, using 2015 as the base year. Provides a real growth rate, removing inflation effects for accurate economic performance comparison across years. Vital for economic analysis, policy formulation, and assessing economic health. Covers all sectors, reflecting overall productivity and standard of living."

Goods_Producing_Industries_description = "Encompasses sectors producing tangible products, including Manufacturing, Construction, Utilities, and Other Goods Industries. Key for understanding the economic foundation, reflecting domestic and international demand for products, infrastructure development, and energy consumption."

Manufacturing_description = "Focuses on transforming raw materials into finished products across sectors like electronics, automotive, textiles, and food processing. Tracks output, productivity, and industrial growth, influencing trade policies, industrial strategy, and innovation support."

Construction_description = "Tracks activities related to building infrastructure and properties. Reflects public and private sector investment in physical assets, impacting employment, productivity, and economic growth. Indicates urbanization trends and construction sector health."

Utilities_description = "Covers essential services like electricity, gas, water, and sewage treatment. Measures sector output and productivity, highlighting infrastructure efficiency and sustainability. Critical for economic development and sustainable energy transition."

Other_Goods_Industries_description = "Includes industries like agriculture, mining, and quarrying not classified under main goods-producing categories. Provides insights into economic output and sector contribution to GDP and employment, showcasing raw materials and food security importance."

Services_Producing_Industries_description = "Represents a broad range of activities from retail trade to financial services, measuring service sector output, growth, and productivity. Essential for understanding consumer behavior, service efficiency, and transition to a knowledge-based economy."

Wholesale_Retail_Trade_description = "Captures activities in wholesale and retail distribution, reflecting consumer demand, inventory levels, and supply chain efficiency. Crucial for economic forecasting and policy making in consumer-driven economies."

Wholesale_Trade_description = "Involves sale of goods to retailers, industrial, commercial, institutional users, or other wholesalers, indicating economic trends, supply chain health, and consumer demand forecasting. Key for understanding distribution channel intermediaries."

Retail_Trade_description = "Represents merchandise distribution to consumers, measuring sector performance, sales trends, and consumer spending. Offers insights into economic health and market shifts, reflecting consumer behavior and retail evolution."

Transportation_Storage_description = "Focuses on the movement of goods and people, including logistics, freight, and public transport services. Vital for analyzing the efficiency of supply chains and mobility, impacting economic growth and development."

Accommodation_Food_Services_description = "Encompasses hospitality and culinary services, including hotels, restaurants, and catering. Reflects on tourism, lifestyle trends, and consumer spending, key for gauging the service sector's health and economic vibrancy."

Accommodation_description = "Covers hotel, motel, and other lodging services, providing insights into tourism and travel trends. Essential for understanding the hospitality industry's impact on the economy, employment, and regional development."

Food_Beverage_Services_description = "Includes restaurants, cafes, and bars, offering a view of consumer dining habits and leisure spending. Important for assessing the food service industry's growth, innovation, and contribution to the economy."

Information_Communications_description = "Covers telecommunications, publishing, and IT services, highlighting digital transformation, connectivity, and media trends. Crucial for evaluating the tech sector's role in innovation, communication, and economic growth."

Finance_Insurance_description = "Encompasses banking, investment services, and insurance, reflecting financial markets, risk management, and economic stability. Key for financial sector analysis, policy making, and understanding economic cycles."

Real_Estate_Professional_Services_description = "Combines property transactions, management, legal, and consulting services, important for assessing market dynamics, investment trends, and professional sector development."

Real_Estate_description = "Focuses on housing, commercial properties, and real estate management, offering insights into market trends, urban development, and economic indicators like investment and consumption patterns."

Professional_Services_description = "Includes legal, accounting, engineering, and consulting services, highlighting expertise, innovation, and market demand in the professional sector. Vital for understanding economic diversification and knowledge-driven growth."

for i in [
        GDP_description, 
        Goods_Producing_Industries_description, 
        Manufacturing_description, 
        Construction_description, 
        Utilities_description, 
        Other_Goods_Industries_description, 
        Services_Producing_Industries_description, 
        Wholesale_Retail_Trade_description, 
        Wholesale_Trade_description, 
        Retail_Trade_description,
        Transportation_Storage_description, 
        Accommodation_Food_Services_description, 
        Accommodation_description, 
        Food_Beverage_Services_description, 
        Information_Communications_description, 
        Finance_Insurance_description, 
        Real_Estate_Professional_Services_description, 
        Real_Estate_description, 
        Professional_Services_description
    ]:
    i += "THIS IS DREIVED FROM REAL GDP DATA, BASED YEAR AS 2015"

collection.add(
    documents=[
        GDP_description, 
        Goods_Producing_Industries_description, 
        Manufacturing_description, 
        Construction_description, 
        Utilities_description, 
        Other_Goods_Industries_description, 
        Services_Producing_Industries_description, 
        Wholesale_Retail_Trade_description, 
        Wholesale_Trade_description, 
        Retail_Trade_description,
        Transportation_Storage_description, 
        Accommodation_Food_Services_description, 
        Accommodation_description, 
        Food_Beverage_Services_description, 
        Information_Communications_description, 
        Finance_Insurance_description, 
        Real_Estate_Professional_Services_description, 
        Real_Estate_description, 
        Professional_Services_description
    ],
    metadatas=[
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"}, 
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"},
        {"source": "my_source"}
    ],
    ids=[
        "GDP_description", 
        "Goods_Producing_Industries_description", 
        "Manufacturing_description", 
        "Construction_description", 
        "Utilities_description", 
        "Other_Goods_Industries_description", 
        "Services_Producing_Industries_description", 
        "Wholesale_Retail_Trade_description", 
        "Wholesale_Trade_description", 
        "Retail_Trade_description",
        "Transportation_Storage_description",
        "Accommodation_Food_Services_description",
        "Accommodation_description",
        "Food_Beverage_Services_description",
        "Information_Communications_description",
        "Finance_Insurance_description",
        "Real_Estate_Professional_Services_description",
        "Real_Estate_description",
        "Professional_Services_description"
    ]
)


def dataset_name(query):
    return collection.query(query_texts=[query], n_results=1)