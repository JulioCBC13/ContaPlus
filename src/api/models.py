from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash,check_password_hash


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'usuarios'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    lastName = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True,nullable=False)
    password = db.Column(db.String(250), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    cedula = db.Column(db.String(100), unique=True, nullable=False)

    def __init__(self,name,lastname,email,password,cedula):
        self.name = name
        self.lastName = lastname
        self.email  = email
        self.password = password
        self.is_admin = False
        self.cedula = cedula

    def serialize(self):
        return {
            "name" : self.name,
            "lastname" : self.lastName,
            "email" : self.email,
            "cedula" : self.cedula,
        }   

    def __repr__(self):
        return '<User %r>' % self.username

    def set_password(self,password):
        self.password = generate_password_hash(password)

    def check_password(self,password):
        return check_password_hash(self.password, password)


class Contador(db.Model):
    __tablename__ = 'contadores'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    lastName = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True,nullable=False)
    password = db.Column(db.String(250), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    cedula = db.Column(db.String(100), unique=True, nullable=False)
    cpc = db.Column(db.String(8), unique=True, nullable=False)
    
    def __init__(self,name,lastname,email,password,cedula,cpc):
        self.name = name
        self.lastName = lastname
        self.email  = email
        self.password = password
        self.is_admin = False
        self.cedula = cedula
        self.cpc = cpc

    def serialize(self):
        return {
            "name" : self.name,
            "lastname" : self.lastName,
            "email" : self.email,
            "cedula" : self.cedula,
            "cpc" : self.cpc
        }   
    
    def __repr__(self):
        return '<Contador %r>' % self.Contador

    def set_password(self,password):
        self.password = generate_password_hash(password)

    def check_password(self,password):
        return check_password_hash(self.password, password)


class BalanceP(db.Model):
    __tablename__ = 'balance'

    id = db.Column(db.Integer, primary_key=True)
    completeName = db.Column(db.String(80), nullable=False)
    cedula = db.Column(db.String(100), unique=True, nullable=False)
    bancoInfo = db.Column(db.String(100), unique=True, nullable=False)
    vehiculosAmount = db.Column(db.String(100), unique=True, nullable=False)
    propiedadesAmount = db.Column(db.String(100), unique=True, nullable=False)
    solicitud = db.Column(db.String(100), unique=True, nullable=True)

    def __init__(self,completeName,cedula,bancoInfo,vehiculosAmount,propiedadesAmount,solicitud):
        self.completeName = completeName
        self.cedula  = cedula
        self.bancoInfo = bancoInfo
        self.vehiculosAmount = vehiculosAmount
        self.propiedadesAmount = propiedadesAmount
        self.solicitud = solicitud
        
        

    def serialize(self):
        return {
            "completeName" : self.completeName,
            "cedula" : self.cedula,
            "bancoInfo" : self.bancoInfo,
            "vehiculosAmount" : self.vehiculosAmount,
            "propiedadesAmount" : self.propiedadesAmount,
            "solicitud" : self.solicitud
        } 

class CertificacionI(db.Model):
    __tablename__ = 'ingresos'

    id = db.Column(db.Integer, primary_key=True)
    completeName = db.Column(db.String(80), nullable=False)
    cedula = db.Column(db.String(100), unique=True, nullable=False)
    promedioMensual = db.Column(db.String(100), unique=True, nullable=False)
    ocupacion = db.Column(db.String(100), unique=True, nullable=False)
    solicitud = db.Column(db.String(100), unique=True, nullable=True)

    def __init__(self,completeName,cedula,promedioMensual,ocupacion,solicitud):
        self.completeName = completeName
        self.cedula  = cedula
        self. promedioMensual = promedioMensual
        self. ocupacion = ocupacion
        self.solicitud = solicitud
        
        

    def serialize(self):
        return {
            "completeName" : self.completeName,
            "cedula" : self.cedula,
            "promedioMensual" : self.promedioMensual,
            "ocupacion" : self.ocupacion,
            "solicitud" : self.solicitud
        } 
    
class DeclaracionImp(db.Model):
    __tablename__ = 'impuestos'

    id = db.Column(db.Integer, primary_key=True)
    completeName = db.Column(db.String(80), nullable=False)
    cedula = db.Column(db.String(100), unique=True, nullable=False)
    ingresos = db.Column(db.String(100), unique=True, nullable=False)
    costos = db.Column(db.String(100), unique=True, nullable=False)
    gastos = db.Column(db.String(100), unique=True, nullable=False)
    solicitud = db.Column(db.String(100), unique=True, nullable=True)

    def __init__(self,completeName,cedula,ingresos,costos,gastos,solicitud):
        self.completeName = completeName
        self.cedula  = cedula
        self.ingresos = ingresos
        self.costos = costos
        self.gastos = gastos
        self.solicitud = solicitud
        

    def serialize(self):
        return {
            "completeName" : self.completeName,
            "cedula" : self.cedula,
            "ingresos" : self.ingresos,
            "costos" : self.costos,
            "gastos" : self.gastos,
            "solicitud" : self.solicitud
        } 
    
class Asesoria(db.Model):
    __tablename__ = 'asesoria'

    id = db.Column(db.Integer, primary_key=True)
    motivo = db.Column(db.String(80), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time =  db.Column(db.Time, nullable=False)
    
   

    def __init__(self,motivo,date,time):
        self.motivo = motivo
        self.date = date
        self.time = time
        

    def serialize(self):
        return {
            "motivo" : self.motivo,
            "date" : self.date,
            "time" : str(self.time)
        } 
    