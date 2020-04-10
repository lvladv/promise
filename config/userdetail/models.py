from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # name = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password']

    class Meta:
        db_table = 'dt_users'