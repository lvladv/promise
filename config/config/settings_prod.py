import os

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
        'NAME': 'parsing_db',
        'USER': 'semenov',
        'PASSWORD': '12345',
        'HOST': 'localhost',
        'PORT': '5432',
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
