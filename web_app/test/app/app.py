import os

import pandas as pd
import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go

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

df = pd.read_sql("SELECT * FROM country", con=db.engine)
