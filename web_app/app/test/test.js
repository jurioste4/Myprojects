function makeplot() {
    Plotly.d3.csv("country.csv", 
    function(data){ processData(data) } );
    
    
    console.log(processData);
};
