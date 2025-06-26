from flask import Blueprint

routes = Blueprint('routes', __name__)

from . import produtos, usuarios  # Importar os módulos de rotas específicos
