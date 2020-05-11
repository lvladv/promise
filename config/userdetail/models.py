from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    # TODO add uniq email address field
    email = models.EmailField(blank=True, null=True)
    # name = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password']

    class Meta:
        # ALTER TABLE auth_user ADD UNIQUE (email);
        # unique_together = ('email',)
        db_table = 'dt_users'


class UserCategory(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    owner = models.ForeignKey(User, related_name='usercategory', on_delete=models.CASCADE)

    class Meta:
        # ALTER TABLE auth_user ADD UNIQUE (email);
        unique_together = ('name', 'owner')
        db_table = 'dt_category'
