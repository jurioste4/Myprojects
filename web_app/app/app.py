import pandas as pd
import json
from sqlalchemy import func
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
# from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/country.db"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)

country = Base.classes.country


@app.route("/")
def index():
   
    return render_template("index.html")



@app.route("/report")
def report():
    results = db.session.query(country).all()

    all_countrys = []
    for countrys in results:
        country_dict = {}
        country_dict["Year"]  = countrys.Year
        country_dict["GDP"] = countrys.GDP
        country_dict["Growth"] = countrys.Growth
        country_dict["Inflation"] = countrys.Inflation
        country_dict["UR"] = countrys.UR
        country_dict["ER"] = countrys.ER
        country_dict["Population"] = countrys.Population
        country_dict["Avg_age_population"] = countrys.Avg_age_population
        country_dict["country"]  = countrys.country        
        all_countrys.append(country_dict)
    
    return jsonify(all_countrys)

@app.route("/data")
def data():
    results = db.engine.execute(
        'SELECT Year,country,UR,Growth,inflation,ER,Population FROM country')
    df = pd.DataFrame(results, columns=[
                      'Year', 'country', 'UR', 'Growth', 'inflation', 'ER', 'Population'])
    chart_data = df.to_dict(orient="records")
    # chart_data = json.dumps(chart_data)
    data = {'chart_data': chart_data}
    print()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
