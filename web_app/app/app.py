import os
import pandas as pd 
import json
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///db/country.db"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)

country = Base.classes.country




@app.route("/")
def index():
   results = db.engine.execute("SELECT country,UR,Growth,inflation,ER FROM country where Year in ('2014')")
    # results_two = db.engine.execute("SELECT country,UR,Growth,inflation,ER FROM country where Year in ('2015')")
    df = pd.DataFrame(results, columns=['country','UR','Growth','inflation','ER'])
    # df_two = pd.DataFrame(results_two, columns=['country','UR','Growth','inflation','ER'])  
    chart_data = df.to_dict(orient="records")
    chart_data = json.dump
   return render_template("index.html")

# @app.route("/test")
# def test():
#     results = db.engine.execute("SELECT country,UR,Growth,inflation,ER FROM country where Year in ('2014')")
#     results_two = db.engine.execute("SELECT country,UR,Growth,inflation,ER FROM country where Year in ('2015')")
#     df = pd.DataFrame(results, columns=['country','UR','Growth','inflation','ER'])
#     df_two = pd.DataFrame(results_two, columns=['country','UR','Growth','inflation','ER'])  
#     test = df.to_dict(orient="records")
    
#     return jsonify('year_2014:',test,'year_2015:',df_two.to_dict(orient="records"))


    
    

  
# @app.route("/report")
# def report():
#     results = db.session.query(country).all()

#     all_countrys = []
#     for countrys in results:
#         country_dict = {}
#         country_dict["Year"]  = countrys.Year
#         country_dict["GDP"] = countrys.GDP
#         country_dict["Growth"] = countrys.Growth
#         country_dict["Inflation"] = countrys.Inflation
#         country_dict["UR"] = countrys.UR
#         country_dict["ER"] = countrys.ER
#         country_dict["Population"] = countrys.Population
#         country_dict["Avg_age_population"] = countrys.Avg_age_population
#         country_dict["country"]  = countrys.country        
#         all_countrys.append(country_dict)
    
#     return jsonify(all_countrys)

@app.route("/data")
def data():
    
    results = db.engine.execute('SELECT Year,country,UR,Growth,inflation,ER FROM country')
    df = pd.DataFrame(results, columns=['Year','country','UR','Growth','inflation','ER'])
    
    # four = df.loc[df["Year"]=="2014",:]
    # five = df.loc[df["Year"]=="2015",:]
    # six  = df.loc[df["Year"]=="2016",:]
    # seven  = df.loc[df["Year"]=="2017",:]
    # eight = df.loc[df["Year"]=="2018",:]

    return jsonify(df.to_dict(orient="records"))


if __name__ == "__main__":
    app.run(debug=True)