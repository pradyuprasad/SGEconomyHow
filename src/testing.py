import chromadb
import os
from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()
from createcollection import dataset_name
os.environ["TOKENIZERS_PARALLELISM"] = "false"

client = OpenAI(
    organization = 'org-5bToNYvzibjBWErnMNiGVAfv',
    api_key=os.environ.get("OPENAI_API_KEY")
)




def get_vectorsearch_prompt(query: str):
   prompt = """
    You are a helpful assistant whose task is to inform the user about the number of datasets they need for a given query, and to provide specific search prompts for a vector database. Datasets are single purpose only, similar to those found on government statistics sites. 

    - If a user asks about a single topic (e.g., 'construction' or 'GDP'), you should return 1, and also provide a search prompt for the vector database enclosed in brackets, like ['construction data'].
    - If a user inquires about the effect of one topic on another, or any correlation between topics (e.g., the effect of 'topic X' on 'topic Y'), you should return 2, and also list the relevant search prompts for each topic separately in brackets, like ['topic X', 'topic Y'].
    - Provide your answer as a combination of a number and search prompts. For example, for a query about 'annual rainfall in Brazil', return "1, ['Brazil rainfall']". For a query about the 'impact of manufacturing on employment', return "2, ['manufacturing', 'employment']".
    - If you are unable to determine the appropriate response, return "-1, []".
    """
   completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
       {"role": "system", "content": prompt},
       {"role": "user", "content": query}
       ]
    ) 
   print(completion.choices[0].message.content)
   return completion.choices[0].message.content

def process_string(input_str):
    # Split input_str at the first comma to separate the number from the searches
    first_split = input_str.split(", ", 1)
    num = int(first_split[0])  # Convert the first part to an integer

    # Extract the search prompts string, assuming it starts with '[' and ends with ']'
    searches_str = first_split[1].strip("[]")
    # Use a more reliable method to split the search prompts, considering possible spaces after commas
    searches = [search.strip().strip("'") for search in searches_str.split("', '")]

    # Construct the result dictionary
    result = {"num": num, "searches": searches}
    return result


arb_threshold = 1.5
err_message = "I'm sorry I don't have any answers for that"

def get_datasets(query):
   temp = get_vectorsearch_prompt(query)
   prompt = process_string(temp)
   if (prompt["num"] != -1):
      print(prompt)
      for i in prompt["searches"]:
         current_database = dataset_name(i, 1)
         if (current_database['distances'][0][0] > arb_threshold):
            print(err_message)
            break
         else:
            print(current_database)
   else:
      print(err_message)


query = input("What's your question? ")

get_datasets(query)


