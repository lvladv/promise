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


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose'
        },
        'logfile': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',
            # 'filename': os.path.join(ROOT_PATH, 'django.log'),
            'filename': '/home/ubpc/promise/new-logging.log',

            'maxBytes': 1024 * 1024 * 5,  # 5MB
            'backupCount': 0,
            'formatter': 'verbose',
        },
    },
    'formatters': {
        'verbose': {
            # 'format': '%(levelname)s|%(asctime)s|%(module)s|%(process)d|%(thread)d|%(message)s',
            'format': '%(asctime)s %(levelname)s [%(module)s] %(process)d:%(thread)d %(message)s',
            'datefmt': "%d.%m.%Y %H:%M:%S"
        },
        'simple': {
            'format': '%(levelname)s|%(message)s'
        },
    },
    'loggers': {
        'django': { # Logger for Django framework code
            'handlers': ['logfile'],
            'level': 'INFO',
            'propagate': True,
        },
        'promise': {
            'handlers': ['logfile'],
            'level': 'INFO',
            'propagate': True,
        },
        'userdetail': {
            'handlers': ['logfile'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}
