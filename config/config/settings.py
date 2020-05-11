import os
from datetime import timedelta

try:
    from .settings_dev import *
except ImportError:
    from .settings_prod import *




# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# DJANGO_SETTINGS_MODULE = config.settings_dev
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'r#a302+$yt%p%n518xg55n(955k2qalld&^ajz4y!$8x603*=+'

# SECURITY WARNING: don't run with debug turned on in production!

# ALLOWED_HOSTS = []

AUTH_USER_MODEL = 'userdetail.User'
# AUTH_USER_MODEL = 'promise.User'

DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': '#/password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': '#/username/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': '#/activate/{uid}/{token}',
    # 'SEND_ACTIVATION_EMAIL': True,
    'SERIALIZERS': {},
}


SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=55),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=360),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=360),
}
# https://login.vk.com/?act=openapi&oauth=1&aid=7458524&location=127.0.0.1&new=1&response_type=code
# https://oauth.vk.com/authorize?client_id=7458524&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=email&response_type=token
# https://oauth.vk.com/authorize?client_id=7458524&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=email,phone&response_type=token
# https://oauth.vk.com/authorize?client_id=7458524&display=popup&redirect_uri=https://oauth.vk.com/blank.html&scope=email,phone&response_type=token


# https://oauth.vk.com/blank.html#access_token=7141c4cd3ac2f24ebd1f925c69c92543054e8e32992880eaabfff048650b17a5adbf9e01a55e8dd48d6d9&expires_in=86400&user_id=185545256&email=lvlad93@mail.ru
# https://oauth.vk.com/blank.html#access_token=054420c66189b9656bb17e75a59c853b8b97f83bda219f4d8b2a93be2bc5e020f40b3d9113e8a43b6af93&expires_in=86400&user_id=185545256&email=lvlad93@mail.ru
# https://oauth.vk.com/authorize?client_id=7458524&redirect_uri=https://oauth.vk.com/blank.html
# https://oauth.vk.com/authorize?client_id=7458524&redirect_uri=https://oauth.vk.com/blank.html&display=popup&scope=email,status&response_type=code
# https://oauth.vk.com/authorize?client_id=7458524&redirect_uri=https://oauth.vk.com/blank.html&response_type=code
# https://oauth.vk.com/authorize?client_id=7458524&redirect_uri=https://oauth.vk.com/blank.html&response_type=code


# https://oauth.vk.com/authorize?client_id=7458524&redirect_uri=https://oauth.vk.com/blank.html&display=popup&scope=email,status&response_type=token

# ----
# new

# https://oauth.vk.com/authorize?client_id=7458524&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=code&v=5.103
# https://oauth.vk.com/authorize?client_id=7458524&display=page&redirect_uri=127.0.0.1&scope=email,friends&response_type=code&v=5.103
# https://oauth.vk.com/authorize?client_id=7458524&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=email,friends&response_type=code&v=5.103

# 08d8c3844cc52d030d



# https://oauth.vk.com/access_token?client_id=7458524&client_secret=WFvN1mPD4d4iU5mXTTkM&v=5.103&grant_type=client_credentials


# https://oauth.vk.com/access_token?client_id=7458524&client_secret=WFvN1mPD4d4iU5mXTTkM&v=5.103&grant_type=client_credentials
# https://api.vk.com/method/secure.checkToken?v=5.21&token=f16f0051f16f0051f13ff600c6f11ece8dff16ff16f0051afd6578c705281a52e7b181c&ip=<user_ip>&client_secret=<app_secret>&access_token=<access_token>
# https://api.vk.com/method/secure.checkToken?v=5.21&token=6bf169f16bf169f16ba19fa0fb6b80a72d66bf16bf169f1354831ae32da6c7e3507b1c0&ip=<user_ip>&client_secret=<app_secret>&access_token=<access_token>







REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework.authentication.TokenAuthentication',
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework_social_oauth2.authentication.SocialAuthentication',

    ),
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
    'DATETIME_FORMAT': '%d.%m.%Y %H:%M:%S',
}

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'oauth2_provider',
    'social_django',
    'rest_framework_social_oauth2',
    'django.contrib.sites',  # new

    'allauth',  # new
    'allauth.account',  # new
    'allauth.socialaccount',  # new
    'allauth.socialaccount.providers.github',  # new



    'djoser',
    'rest_framework',
    'django_filters',
    'promise',
    'userdetail',
    'corsheaders',
    'drf_yasg',
    # 'schema_graph',
]

# SWAGGER_SETTINGS = {
#     'VALIDATOR_URL': 'http://localhost:8189',
# }

SOCIAL_AUTH_VK_OAUTH_KEY = '7458524'
SOCIAL_AUTH_VK_OAUTH2_SECRET = 'WFvN1mPD4d4iU5mXTTkM'

# new?
SOCIAL_AUTH_VK_OAUTH2_SCOPE = ['friends', 'email']
# SOCIAL_AUTH_VK_OAUTH2_SCOPE = ['email']
SOCIAL_AUTH_VK_OAUTH2_PROFILE_EXTRA_PARAMS = {
    'fields': 'id, name, email'
}



AUTHENTICATION_BACKENDS = (
    'social_core.backends.vk.VKOAuth2',
    'rest_framework_social_oauth2.backends.DjangoOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

SITE_ID = 1


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
   ]

ROOT_URLCONF = 'config.urls'



TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # 'DIRS': ['/home/arty/python/promise/frontend/build/', ],
        # 'DIRS': ['/home/ubpc//promise/frontend/build/', ],
        'DIRS': [os.path.join(BASE_DIR, 'static/'), ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases








# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Europe/Moscow'

USE_I18N = True

USE_L10N = True

USE_TZ = True

CORS_ORIGIN_ALLOW_ALL = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
# STATIC_URL = '/home/arty/python/promise/frontend/build/static/'
# STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static/'),)
# STATIC_ROOT = '/home/arty/python/promise/frontend/build/static/'
# PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))



SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'basic': {
            'type': 'basic'
        }
    },
}

REDOC_SETTINGS = {
   'LAZY_RENDERING': False,
}


APPEND_SLASH = True

