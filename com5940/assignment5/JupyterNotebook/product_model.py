from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/assignment'
app.config['SECRET_KEY'] = "mysecret"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class assign5(db.Model):
    __tablename__ = 'facilities'
    FacilityId = db.Column(db.Integer, primary_key=True)
    FacilityName = db.Column(db.String(30))
    Address = db.Column(db.String(100))
    District = db.Column(db.String(30))
    FacilityType = db.Column(db.String(100))
    Lat = db.Column(db.Float)
    Lng = db.Column(db.Float)
