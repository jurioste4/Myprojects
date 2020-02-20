var url = "http://127.0.0.1:5000/data";

function Plot() {
    
    d3.json(url).then(function(response){

        console.log(response);
        var trace = {
            type: "scatter",
            mode: "lines",
            name: "test",
            x: response.map(data => data.Year),
            y: response.map(data => data.UR),
            
        };
        
        var data = [trace];

        var layout = {
            title: "This is a test",
            xaxis: {
                type: " Year "
            },
            yaxis: {
                autorange: true,
                type: "linear"
            }
        };

        Plotly.newPlot("plot", data, layout);
    });
}




