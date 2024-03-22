const https = require('https');
const fs = require('fs');

const keyword = '*'


const options = {
    hostname : 'tablebuilder.singstat.gov.sg',
    path: '/api/table/resourceid/?keyword=' + keyword + '&searchOption=all',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    },
}


async function search() {
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
    GDPJson = await search()
    datasets = GDPJson.Data.records 
    console.log(datasets)
    /*for (i = 0; i < datasets.length; i++) {
        print(i)
    }*/
}





getCleanData()
 
