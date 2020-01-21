var url = "/report";

function plot() {
    d3.json(url).then(function(response){

        console.log(response);
        var trace = {
            type: "scatter",
            mode: "lines",
            name: "Usa report and Compiar",
            x: response.map(report => report.Year)
        }
    })
}