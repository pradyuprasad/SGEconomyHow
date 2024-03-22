const margin = {top: 20, right: 20, bottom: 30, left: 40};
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


chart("data.json","data2.json","data3.json");
function chart(dataset) {
    d3.json(dataset).then(data => {
        const parseTime = d3.timeParse("%Y-%m-%d");

        data.forEach(d => {
            d.date = parseTime(d.date);
        });

        const xScale = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([height, 0]);

        const line = d3.line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.value));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);

        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .call(d3.axisLeft(yScale));
    });
}



    function chart(...datasets) {
        const promises = datasets.map(d => d3.json(d)); // Load all datasets asynchronously

        Promise.all(promises).then(data => {
            // Combine data processing for all datasets
            const parseTime = d3.timeParse("%Y-%m-%d");
            data.forEach(dataset => dataset.forEach(d => d.date = parseTime(d.date)));

            // Determine combined domain for x and y scales
            const xDomain = d3.extent(data.flat(), d => d.date);
            const yDomain = [0, d3.max(data.flat(), d => d.value)];

            const xScale = d3.scaleTime().domain(xDomain).range([0, width]);
            const yScale = d3.scaleLinear().domain(yDomain).range([height, 0]);

            // Create and append paths for each dataset with distinct colors
            data.forEach((dataset, index) => {
                const line = d3.line().x(d => xScale(d.date)).y(d => yScale(d.value));

                svg.append("path")
                    .datum(dataset)
                    .attr("fill", "none")
                    .attr("stroke", d3.schemeCategory10[index]) // Use color from a palette
                    .attr("stroke-width", 1.5)
                    .attr("d", line);
            });

            // Add axes (same as before)
            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(xScale));

            svg.append("g")
                .call(d3.axisLeft(yScale));
        });
    }
