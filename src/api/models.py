from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.String(100), primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(260), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)