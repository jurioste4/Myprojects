

 # Country Report Flask app 
 
 ####  see it deployed [heroku app](https://country-report.herokuapp.com/)



#### For this App I used flask and Plotly with sqlalchemy to create this app 


Below in the flask app I created a connection the my data base 
```
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/country.db"
db = SQLAlchemy(app)
```
Then I reflected the data base class then saved that to a verable to use later 
```
Base = automap_base()
Base.prepare(db.engine, reflect=True)

country = Base.classes.country
```
Next code creates a query to the data base then converting it into a pandas data frame 

```
results = db.engine.execute(
    'SELECT Year,country,UR,Growth,inflation,ER,Population FROM country')
df = pd.DataFrame(results, columns=[
    'Year', 'country', 'UR', 'Growth', 'inflation', 'ER', 'Population'])
 ```
 created groupby for each of the countrys I will need 
 ```
 usa = df[(df['country'] == 'usa')]
china = df[(df.country == 'china')]
uk = df[(df.country == 'uk')]
sing = df[(df.country == 'singapore')]
france = df[(df.country == 'france')]

 ```
 now the route I place it in a dict
 ```
 @app.route('/')
def index():

    graphs = [
        dict(
            data=[go.Bar(name='france', x=france["Year"], y=france["UR"]),
                  go.Bar(name='singapore', x=sing["Year"], y=sing["UR"]),
                  go.Bar(name='UK', x=uk["Year"], y=uk["UR"]),
                  go.Bar(name='USA', x=usa["Year"], y=usa["UR"]),
                  go.Bar(name='China', x=china.Year, y=china['UR']
                         )],
            layout=dict(barmode='group', title='US unemployment rate vs Four Top Countries',
                        yaxis=dict(title="Unemployment Rate"),
                        xaxis=dict(title="Year")
                        ),
        ),
        dict(
            data=[
                go.Bar(name='france', x=france["Year"], y=france["Growth"]),
                go.Bar(name='singapore', x=sing["Year"], y=sing["Growth"]),
                go.Bar(name='UK', x=uk["Year"], y=uk["Growth"]),
                go.Bar(name='USA', x=usa["Year"], y=usa["Growth"]),
                go.Bar(name='China', x=china.Year, y=china['Growth']

                       )],
            layout=dict(barmode='group', title='Growth % Five Top Countries',
                        yaxis=dict(title="Growth Percentage "),
                        xaxis=dict(title="Year")


                        )
        )
    ]
   ```
   there is a small loop I use to label the graphs on the index page then useing json.dumps and plotly JSONEncoder in to a JSON format .. and its rendered along with the index.html page 
  ```
  ids=['graph-{}'.format(i)for i, _ in enumerate(graphs)]

    graphJSON=json.dumps(graphs, cls=plotly.utils.PlotlyJSONEncoder)

    return render_template('layouts/index.html', ids=ids, graphJSON=graphJSON)

  ```
  
  last the index.html page
  in the body of the page I placed this code  
  ``` 
  {% for id in ids %}
    <h3>{{id}}</h3>
    <div id="{{id}}"></div>
    {% endfor %}
   ```
   then at the footer of the html useing javascript 
   (note you have to have plotly.js loaded on the index.html page for this to work. )
   ```
    <script type="text/javascript">
        var graph = {{ graphJSON | safe}};
        var ids = {{ ids | safe}};

        for (var i in graph) {
            Plotly.plot(ids[i],
                graph[i].data,
                graph[i].layout || {});
        }
    </script>
   ```
 see it deployed [heroku app](https://country-report.herokuapp.com/)
