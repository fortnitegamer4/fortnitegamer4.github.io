from flask import *
import subprocess

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    return render_template("pricing.html")

@app.route("/aboutUs")
def aboutUs():
    return render_template("aboutUs.html")

@app.route("/history")
def history():
    return render_template("subpages/history.html")

@app.route("/settings")
def settings():
    return render_template("subpages/settings.html")

@app.route("/startSession")
def startSession():
    return render_template("subpages/startSession.html")



@app.route("/statistics")
def statistics():
    return render_template("subpages/statistics.html")




@app.route("/registrationPage")
def registrationPage():
    return render_template("login/register.html")

@app.route("/create")
def create():
    return redirect("https://www.conradchallenge.org")

@app.route("/docs")
def docs():
    return redirect("https://docs.google.com/document/d/1PNMzERm9d1WbmA4_WpWCIiWDV2MggkZelS2nRsryh8c/edit?tab=t.0g")

@app.route("/github")
def github():
    return redirect("https://github.com/onpk/BeaverWorks-Team-166")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
