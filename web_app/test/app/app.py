import json
import plotly
import plotly.graph_objs as go
# import plotly.express as px
import numpy as np
from sqlalchemy import func
from sqlalchemy.ext.automap import automap_base
import pandas as pd
from flask import (
    Flask,
    render_template,
    jsonify)
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/country.db"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)

country = Base.classes.country
results = db.engine.execute(
    'SELECT Year,country,UR,Growth,inflation,ER,Population FROM country')
df = pd.DataFrame(results, columns=[
    'Year', 'country', 'UR', 'Growth', 'inflation', 'ER', 'Population'])

usa = df[(df['country'] == 'usa')]
china = df[(df.country == 'china')]
uk= df[(df.country == 'uk')]
sing= df[(df.country == 'singapore')]
france= df[(df.country == 'france')]

@app.route('/')
def index():
   
    graph = dict(
        data=[go.Bar(name='france',x=france["Year"],y=france["UR"]),
            go.Bar(name='singapore',x=sing["Year"],y=sing["UR"]),
            go.Bar(name='UK',x=uk["Year"],y=uk["UR"]),
            go.Bar(name='USA',x=usa["Year"], y=usa["UR"]),
            go.Bar(name='China', x=china.Year, y=china['UR']
              )],
        layout=dict(barmode='group', title='US unemployment rate vs Four Top Countries',
                    yaxis=dict(title="Unemployment Rate" ),
                    xaxis=dict(title="Year" )
                    )
    )

    graphJSON = json.dumps(graph, cls=plotly.utils.PlotlyJSONEncoder)

    return render_template('layouts/index.html', graphJSON=graphJSON)

@app.route("/data")
def data():
    graph = dict(
        data=[go.Scatter(name='france',x=france["Year"],y=france["UR"],mode='lines'),
            go.Scatter(name='singapore',x=sing["Year"],y=sing["UR"],mode='lines'),
            go.Scatter(name='UK',x=uk["Year"],y=uk["UR"],mode='lines'),
            go.Scatter(name='USA',x=usa["Year"], y=usa["UR"],mode='lines'),
            go.Scatter(name='China', x=china.Year, y=china['UR'],mode='lines')],
        layout=dict(title='US unemployment rate vs Four Top Countries',
                    yaxis=dict(
                        title="Unemployment Rate"
                    ),
                    xaxis=dict(
                        title="Year"
                    )
                    )
    )

    graphJSON_two= json.dumps(graph, cls=plotly.utils.PlotlyJSONEncoder)

    return  (graphJSON_two)
if __name__ == '__main__':
    app.run()
