# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    """Renders the home page."""
    return render_template('index.html')

@app.route('/shop')
def shop():
    """Renders the shop page."""
    # In a real application, you would fetch product data here.
    # For this static site, we'll add product data directly in the HTML or pass it from here if it becomes complex.
    # For now, we'll keep it simple and render the template.
    return render_template('shop.html')

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template('about.html')

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template('contact.html')

if __name__ == '__main__':
    # Run the Flask development server
    # In a production environment, you would use a production-ready server like Gunicorn or uWSGI
    app.run(debug=True)