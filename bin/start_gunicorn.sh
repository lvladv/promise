#!/bin/bash
# 1
source /home/ubpc/promise/env/bin/activate
exec gunicorn -c "/home/ubpc/promise/config/gunicorn_config.py" config.wsgi
