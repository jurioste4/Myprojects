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


@app.route('/')
def index():
    results = db.engine.execute(
        'SELECT Year,country,UR,Growth,inflation,ER,Population FROM country')
    df = pd.DataFrame(results, columns=[
                      'Year', 'country', 'UR', 'Growth', 'inflation', 'ER', 'Population'])

    usa = df[(df['country'] == 'usa')]
    china = df[(df.country == 'china')]
    graph = dict(
        data=[go.Bar(
            x=usa["Year"],
            y=usa["UR"]
        ),
            go.Bar(name='China',
                   x=china.Year,
                   y=china['UR'])],
        layout=dict(barmode='group',
                    title='test',
                    yaxis=dict(
                        title="UR"
                    ),
                    xaxis=dict(
                        title="Year"
                    )
                    )
    )

    graphJSON = json.dumps(graph, cls=plotly.utils.PlotlyJSONEncoder)

    return render_template('layouts/index.html', graphJSON=graphJSON)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3134)
