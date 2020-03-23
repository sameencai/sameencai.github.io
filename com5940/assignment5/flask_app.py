############# Flask Modules Setup ##############

from flask import Flask, render_template, url_for, redirect, request, make_response, Response, jsonify
from flask_login import LoginManager, login_user, current_user, logout_user, login_required, UserMixin
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
#from datetime import datetime
import requests
#import jwt

############ Initialize Flask App ##############

app = Flask(__name__)

#### MySQL SQLAlchemy Object Relations Mapping #####

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://sameenA5:caiwenwen@sameenA5.mysql.pythonanywhere-services.com/sameenA5$fitogether'
app.config['SECRET_KEY'] = "mysecret"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Facilities(db.Model):
    __tablename__ = 'facilities'
    FacilityId = db.Column(db.Integer, primary_key=True)
    FacilityName = db.Column(db.String(30))
    Address = db.Column(db.String(100))
    District = db.Column(db.String(30))
    FacilityType = db.Column(db.String(100))
    Lat = db.Column(db.Float)
    Lng = db.Column(db.Float)

############## Login Manager Setup ###############

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
app.config['SECRET_KEY'] = "lkkajdghdadkglajkgah"


@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

class User(UserMixin):
  def __init__(self,id):
    self.id = id

############ Web Page Routes Setup ###############

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/login")
def login():
    if current_user.is_authenticated:
        return redirect(url_for("list_album"))
    message = 'Please login in first.'
    return render_template('login.html', message=message)

@app.route("/form_auth",methods=['POST'])
def form_auth():
    username = request.form['email']
    password = request.form['pwd']
    if username == "demo@demo.com" and password == "password":
        login_user(User(1))
        # message = "Dear " + username + ", welcome to Bernard's pages. Your login has been granted."
        return redirect(url_for("list_album"))
    else:
        message = 'Wrong password!'
        return render_template('login.html',message=message)

@app.route("/list_album")
@login_required
def list_album():
    dataset = []
    facility_list = Facilities.query.all()
    for facility in facility_list:
        dataset.append({'FacilityId': facility.FacilityId, 'FacilityName': facility.FacilityName, 'Address': facility.Address,
                       'District': facility.District, 'FacilityType': facility.FacilityType,'Lat': facility.Lat,'Lng': facility.Lng})
    return render_template('list_album2.html', entries=dataset)

@app.route('/album')
def album():
    page_num = 1
    facilities = Facilities.query.paginate(per_page=9, page=page_num, error_out=True)
    return render_template('product_paging.html', facilities=facilities)

@app.route('/album/<int:page_num>')
def album_paging(page_num):
    facilities = Facilities.query.paginate(per_page=6, page=page_num, error_out=True)
    return render_template('product_paging.html', facilities=facilities)

@app.route("/add_product",methods=['POST'])
@login_required
def add_facility():
    FacilityId = request.form['FacilityId']
    FacilityName = request.form['FacilityName']
    Address = request.form['Address']
    District = request.form['District']
    FacilityType = request.form['FacilityType']
    Lat = float(request.form['Lat'])
    Lng = float(request.form['Lng'])
    facility = Facilities(FacilityId=FacilityId,FacilityName=FacilityName,Address=Address,District=District,FacilityType=FacilityType,Lat=Lat,Lng=Lng)
    db.session.add(facility)
    db.session.commit()
    dataset = []
    facility_list = Facilities.query.all()
    for facility in facility_list:
        dataset.append({'FacilityId': facility.FacilityId, 'FacilityName': facility.FacilityName, 'Address': facility.Address,
                       'District': facility.District, 'FacilityType': facility.FacilityType,'Lat': facility.Lat,'Lng': facility.Lng})
    return render_template('list_album2.html', entries=dataset)

@app.route("/update_product",methods=['POST','PUT'])
@login_required
def update_facility():
    record_id = request.form['record_id']
    FacilityId = request.form['FacilityId']
    FacilityName = request.form['FacilityName']
    Address = request.form['Address']
    District = request.form['District']
    FacilityType = request.form['FacilityType']
    Lat = float(request.form['Lat'])
    Lng = float(request.form['Lng'])
    db.session.commit()
    dataset = []
    facility_list = Facilities.query.all()
    for facility in facility_list:
        dataset.append({'FacilityId': facility.FacilityId, 'FacilityName': facility.FacilityName, 'Address': facility.Address,
                       'District': facility.District, 'FacilityType': facility.FacilityType,'Lat': facility.Lat,'Lng': facility.Lng})
    return render_template('list_album2.html', entries=dataset)

@app.route("/delete_product",methods=['POST','DELETE'])
@login_required
def delete_facility():
    record_id = request.form['record_id']
    facility = Facilities.query.filter_by(FacilityId=record_id).first()
    db.session.delete(facility)
    db.session.commit()
    dataset = []
    facility_list = Facilities.query.all()
    for facility in facility_list:
        dataset.append({'FacilityId': facility.FacilityId, 'FacilityName': facility.FacilityName, 'Address': facility.Address,
                       'District': facility.District, 'FacilityType': facility.FacilityType,'Lat': facility.Lat,'Lng': facility.Lng})
    return render_template('list_album2.html', entries=dataset)

@app.route('/api')
def api():
    result = db.engine.execute('select * from facilities')
    final_result = [list(i) for i in result]
    dataset=[]
    dict={}
    for i in final_result:
        dict['FacilityId'] = i[0]
        dict['FacilityName'] = i[1]
        dict['Address'] = i[2]
        dict['District'] = i[3]
        dict['FacilityType	'] = i[4]
        dict['Lat'] = i[5]
        dict['Lng'] = i[6]
        print(i)
        print(dict)
        dataset.append(dict.copy()) #markers.append(fld.copy())
    return jsonify({'Album': dataset})

@app.route('/logout/')
@login_required
def logout():
    logout_user()
    message = 'Thanks for logging out.'
    return render_template('login.html',message=message)

@app.errorhandler(500)
def internal_error(error):
    message = 'Wrong password!'
    return render_template('login.html',message=message),500

######### API Endpoints ##########


######### Run Flask Web App at Port 9030 ##########

if __name__ == '__main__':
    app.run(debug = True)