import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

engine = create_engine('sqlite:///db/country.db', echo=False)

Base = automap_base()
Base.prepare(engine, reflect=True)

Usa = Base.classes.usa
singapore = Base.classes.singapore

session = Session(engine)


app = Flask(__name__)



@app.route("/")
def home():
   """Home Page """
   return render_template("index.html")


@app.route("/api/usa")
def usa():
    # query_statement = session.query(usa)
    results = session.query(Usa.Year, Usa.UR , Usa.Growth).\
        order_by(Usa.Year).all()
       
    all_years = []
    for Year , UR, Growth in results:
        report_dict = {}
        report_dict["Year"]= Year
        report_dict["UR"] = UR
        report_dict["Growth"] = Growth
        
        all_years.append(report_dict)

    return jsonify(all_years)

@app.route("/api/singapore")
def sing():
    report = session.query(singapore.Year, singapore.UR , singapore.Growth ).\
        order_by(singapore.Year).all()
        
    
    sing_report = []
    for Year , UR, Growth in report:
        report_dict = {}
        report_dict["Year"]= Year
        report_dict["UR"] = UR
        report_dict["Growth"] = Growth
        
        sing_report.append(report_dict)

    return jsonify(sing_report)

if __name__ == '__main__':
    app.run(debug=True)