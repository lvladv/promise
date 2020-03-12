#!/bin/bash

source /home/ubpc/backend_promise/env/bin/activate
exec gunicorn -c "/home/ubpc/backend_promise/config/gunicorn_config.py" config.wsgi
