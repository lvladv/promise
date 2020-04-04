import os
from secret_properties import (
    DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT
)

REST_URL = 'http://77.244.65.15:3527'

DEBUG = False
ALLOWED_HOSTS = ['77.244.65.15', '0.0.0.0', '127.0.0.1']
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'OPTIONS': {
            'options': '-c search_path=promise_rest'
        },
        'NAME': DB_NAME,
        'USER': DB_USER,
        'PASSWORD': DB_PASSWORD,
        'HOST': DB_HOST,
        'PORT': DB_PORT,
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            # 'filename': '/home/arty/python/promise/debug.log',
            'filename': '/home/ubpc/promise/debug.log',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}
