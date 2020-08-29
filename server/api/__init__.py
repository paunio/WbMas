from flask import Flask

def create_app():
    app = Flask(__name__)

    from .view import routes

    app.register_blueprint(routes)

    return app
