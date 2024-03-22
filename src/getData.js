const https = require('https');
const fs = require('fs');


const options = {
    hostname : 'tablebuilder.singstat.gov.sg',
    path: '/api/table/tabledata/M015661',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    },
}


async function getGDP() {
    return new Promise(resolve => {
        data = ''
        const request = https.request(options, (response) => {
            response.on('data', chunk => {
                data += chunk
            })
    
            response.on('end', () => {
                resolve(JSON.parse(data))
            });
    
            response.on('error', (error) => rejects(error))
        })
    
        request.end() 
    })
}

async function getCleanData() {
    GDPJson = await getGDP()
    data = GDPJson.Data
    console.log(data)
    /*clean_data = data.map(cleankeys) 
    console.log(clean_data)*/
    //return clean_data

}

function cleankeys(row) {
    key = row.key


    const quarters = {
      "1Q": "03-31",
      "2Q": "06-30",  
      "3Q": "09-30",
      "4Q": "12-30"
    };
  
    const [year, quarter] = key.split(" ");
    
    if(!quarters[quarter]) {
      return undefined; 
    }


    
   

    DateString = `${year}-${quarters[quarter]}`

    value = parseFloat(row.value)
  
    return {date : DateString, value: value};
  
  }

/*async function main() {
    data = await getCleanData()
    const jsonData = JSON.stringify(data, null, 2);
    try {
        fs.writeFileSync('GDP.json', jsonData);
        console.log('Data written to file');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
    
}

main()*/

getCleanData()
