from flask import Flask

from .views import routes


def create_app():
    app = Flask(__name__)
    app.register_blueprint(routes)

    return app
