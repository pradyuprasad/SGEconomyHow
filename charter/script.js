const margin = {top: 20, right: 20, bottom: 30, left: 70};

chart("data.json","data2.json","data3.json");


function chart(...datasets) {

    const width = 960 - margin.left - margin.right ;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const promises = datasets.map(d => d3.json(d)); // Load all datasets asynchronously

    Promise.all(promises).then(data => {
        // Combine data processing for all datasets
        const parseTime = d3.timeParse("%Y-%m-%d");
        data.forEach(dataset => dataset.forEach(d => d.date = parseTime(d.date)));

        // Determine combined domain for x and y scales
        const xDomain = d3.extent(data.flat(), d => d.date);
        const yDomain = [0, d3.max(data.flat(), d => d.value)];

        // Define xScale and yScale here for accessibility
        const xScale = d3.scaleTime().domain(xDomain).range([0, width]);
        const yScale = d3.scaleLinear().domain(yDomain).range([height, 0]);

        // Create tooltip element
        const tooltip = d3.select(".tooltip");

        // Create and append paths for each dataset with distinct colors
        data.forEach((dataset, index) => {
            const line = d3.line().x(d => xScale(d.date)).y(d => yScale(d.value));

            svg.append("path")
                .datum(dataset)
                .attr("fill", "none")
                .attr("stroke", d3.schemeCategory10[index]) // Use color from a palette
                .attr("stroke-width", 1.5)
                .attr("d", line)
                .on("mouseover", function(event,d) { // Add mouseover event handler
                    const mouseX = event.pageX;
                    const mouseY = event.pageY;

                    // Find the closest data point to the mouse position
                    const closestDataPoint = dataset.find(point => {
                        const distance = Math.abs(xScale(point.date) - mouseX + 70);
                        return distance < 10; // Adjust threshold as needed
                    });


                    if (closestDataPoint) {
                        const svgRect = svg.node().getBoundingClientRect();
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", 1)
                            .style("color", d3.schemeCategory10[index])
                        tooltip.html(`Date: ${closestDataPoint.date.toLocaleDateString()}<br>Value: ${closestDataPoint.value}`)
                            .style("left", (mouseX + 15) +'px')
                            .style("top", (mouseY +  15) +'px');
                    }
                })
                .on("mouseout", function() {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });

            const LabelPos = dataset[dataset.length-1];
            const X = xScale(LabelPos.date) + 30;
            const Y = yScale(LabelPos.value);

// Append a single text element for the label
            svg.append("text")
                .attr("x", X )
                .attr("y", Y)
                .attr("text-anchor", "middle")
                .attr("dominant-baseline", "middle")
                .style("fill", d3.schemeCategory10[index])
                .text("Label" + index);

        });




        // Add axes
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .call(d3.axisLeft(yScale));


    });



}