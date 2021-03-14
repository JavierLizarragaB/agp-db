from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired


class LoginForm(FlaskForm):
    username = StringField("Usuario", validators=[InputRequired()])
    password = PasswordField("Contrasena", validators=[InputRequired()])
    
    submit = SubmitField("Iniciar Sesión")