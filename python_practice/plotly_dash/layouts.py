from app import app
import plotly.express as px


df = px.data.iris()


NAVBAR_STYLE = {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "width": "16rem",
    "padding": "2rem 1rem",
    "background-color": "#f8f9fa",

}

CONTENT_STYLE = {
    "top": 0,
    "margin_top": '2rem',
    "margin-left": '18rem',
    "margin-right": '2rem',

}


def nav_bar():
    """
    Creates Navigation bar
    """
    navbar = html.Div(
        [
            html.H4("System Preformance dashboard",
                    ClassName="display-10", style={'textAlign': 'center'}),
            html.Hr(),
            dbc.Nav(
                [
                    dbc.NavLink("Page 1", href="/page1",
                                active="exact", external_link=True),
                    dbc.NavLink("Page 2", href="/page1",
                                active="exact", external_link=True)

                ],
                pills=True,
                vertical=True
            ),
        ],
        style=NAVBAR_STYLE,

    )
    return nav_bar


# Graph1
example_graph1 = px.scatter(
    df, x="sepal_length", y="sepal_width", color="species")
