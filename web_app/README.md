
 # Country Report card Data gathering ... SEE app folder for Flask app Creation 

This was a project I did to take data from https://www.euromonitor.com/countries 

![Alt text](https://github.com/jurioste4/myprojects/blob/master/web_app/pics/euro.png)


I then used Python to read the url and get the data I needed see file scraping.ipynb 
```
  
url = "https://www.euromonitor.com/singapore/country-factfile"
tables = pd.read_html(url)
tables

```

then placed the different sections in to a data frames then combined them in to one useing concat
```
df = tables[4]
df.rename(columns = {'Unnamed: 0':'Economies'}, inplace = True) 
df2 = tables[5]
df2.rename(columns = {'Unnamed: 0':'Economies'}, inplace = True) 
frames= [df,df2]
data = pd.concat(frames)
```
then I inverted the data frame so the years are colum names 
```
data.set_index('Economies', inplace = True)
data.index.name = None
```
then I would use transpose to change it 
```
data_t = data.transpose()
data_t.reset_index(inplace=True)
data_t.rename( columns= {'index': 'Year', 'GDP (USD million)': 'GDP'}, inplace=True)
data_t
```
then I rename colums and save to csv file

so the final part I did was take csv and import it in to a sqlie file see csv_to_sqlite.ipynb

I Created a class 
```
class country(Base):
    __tablename__ = "country"
    index = Column(Integer, primary_key=True)
#     id = Column(Integer, primary_key=True)
    Year = Column(String)
    GDP = Column(Integer)
    Growth = Column(Integer)
    Inflation = Column(Integer)
    UR = Column(Integer)
    ER= Column(Integer)
    Population = Column(Integer)
    Avg_age_population = Column(Integer)
    Households_number  = Column(Integer)
    Consumer_Expenditure  = Column(Integer)
    internet_Users  = Column(Integer)
    country = Column(String)
```
Then useing sqlalchemy created data base connnetion saveing 
```
engine = create_engine('sqlite:///app/db/newcountry.db', echo=False)
```
code above created a new data base the code below saveds the class I created to the new data base createing the colums 
```
Base.metadata.create_all(engine)
session = Session(bind=engine)
```
then check to see if class was saved to data base
```
Base = automap_base()
Base.prepare(engine, reflect=True)
Base.classes.keys()
```
then the code below will import the csv file convert to data frame then useing to_sql save to our new sqlite file 

```
file_name = 'csv/country.csv'
df=pd.read_csv(file_name)
df.to_sql('country',con=engine, if_exists='append')
```
Then conform the colums were saved and the data is there 
```
inspector = inspect(engine)
columns = inspector.get_columns('country')
for c in columns:
    print(c['name'], c["type"])
