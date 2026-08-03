from flask import Flask, render_template, jsonify
import pandas as pd, os
app=Flask(__name__)
DATA_DIR=os.path.join(os.path.dirname(__file__),'data')
def load_data():
    for f in os.listdir(DATA_DIR):
        if f.endswith('.csv'):
            return pd.read_csv(os.path.join(DATA_DIR,f))
        if f.endswith('.xlsx'):
            return pd.read_excel(os.path.join(DATA_DIR,f))
    return pd.DataFrame()
DATA=load_data()
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/api/sales_trend')
def sales_trend():
    df=DATA.copy()
    df['date']=pd.to_datetime(df['date'])
    daily=df.groupby(df['date'].dt.date)['price'].sum().reset_index()
    return jsonify({'labels':[str(d) for d in daily['date']],'values':daily['price'].tolist()})
@app.route('/api/top_dishes')
def top_dishes():
    df=DATA.copy()
    top=df.groupby('item')['price'].sum().nlargest(5).reset_index()
    return jsonify({'labels':top['item'].tolist(),'values':top['price'].tolist()})
@app.route('/api/revenue_category')
def revenue_category():
    df=DATA.copy()
    cat=df.groupby('category')['price'].sum().reset_index()
    return jsonify({'labels':cat['category'].tolist(),'values':cat['price'].tolist()})
if __name__=='__main__':
    app.run(debug=True)
