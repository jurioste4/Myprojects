import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
from dash_html_components.P import P


from app import app, server

from layouts import nav_bar, layout1, layout2, CONTENT_STYLE
import callbacks


app.layout = html.Div([
    dcc.Location(id='url', refresh=False),
    nav_bar(),
    html.Div(id='page-content', style=CONTENT_STYLE)
])


@app.callback(Output('page-content', 'children')
              [Input('url', 'pathname')])
def display_page(pathname):
    if pathname == '/':
        return layout1
    elif pathname == '/page1':
        return layout1
    elif pathname == '/page2':
        return layout2
    else:
        return '404'


if __name__ == '__main__':
    app.run_server(port=5000, host='127.0.01', debug=True)
