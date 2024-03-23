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
        Retail_Trade_description
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
        "Retail_Trade_description"
    ]
)

def dataset_name(query):
    return collection.query(query_texts=[query], n_results=1)