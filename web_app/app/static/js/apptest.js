d3.csv("../db/country.csv").then(function(data) {
    data.forEach(function(d) {
      d.GDP = +d.GDP;
      d.Growth = +d.Growth;
      d.Inflation = +d.Inflation;
      d.UR = +d.UR;
      d.ER = +d.ER;
      d.Population = +d.Population;
      d.Avg_age_population = +d.Avg_age_population;
      d.Households_number = +d.Households_number;
      d.Consumer_Expenditure = +d.Consumer_Expenditure;
      d.internet_Users = +d.internet_Users;

    })
    console.log(data);
});