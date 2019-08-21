from twitterscraper import query_tweets
import codecs
import json
import pandas as pd


if __name__ == '__main__':
    list_of_tweets = query_tweets("Trump OR Biden", 10)

    # print the retrieved tweets to the screen:
    for tweet in query_tweets("Trump OR Biden", 10):
        print(tweet)

    with codecs.open('tweets.json', 'r', 'utf-8') as f:
        tweets = json.load(f, encoding='utf-8')

    list_tweets = [list(elem.values()) for elem in tweets]
    list_columns = list(tweets[0].keys())
    df = pd.DataFrame(list_tweets, columns=list_columns)
