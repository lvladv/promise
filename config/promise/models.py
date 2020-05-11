from uuid import uuid4

from django.db import models
# from config.userdetail.models import User
from userdetail.models import User, UserCategory


class Promise(models.Model):
    # TODO choise field on important forms.ModelChoiceField(queryset=Modelx.objects.all())

    IMPORTANCE_CHOICES = [
        ('1', 'not very important'),
        ('2', 'medium'),
        ('3', 'very important'), ]

    STATUS_CHOICES = [('Y', 'done'), ('N', 'not ready')]

    CATEGORY_CHOICES = UserCategory.objects.all()

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=False)
    slug = models.SlugField(unique=True, blank=True, default=None)
    description = models.CharField(max_length=2024, blank=False, default='')
    # deadline_row = models.CharField(max_length=255, blank=True)
    deadline = models.DateTimeField(blank=True, default=None)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='N')
    importance = models.CharField(max_length=1, choices=IMPORTANCE_CHOICES, default='1')
    # category = models.CharField(max_length=255, queryset=CATEGORY_CHOICES)
    # category = models.ManyToManyField(UserCategory)
    category = models.ForeignKey(UserCategory, related_name='usercategory', on_delete=models.CASCADE, null=True)
    is_approved = models.BooleanField(default=False)
    modify_time = models.DateTimeField(auto_now=True)
    create_time = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name='promise', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if self.slug is None:
            prefix = self.owner.__str__()
            self.slug = prefix + '-' + str(uuid4())[:8]
            # self.deadline = make_aware(create_deadline(self.deadline_row))
        super(Promise, self).save(*args, **kwargs)

    REQUIRED_FIELDS = ['name', 'description', 'deadline', 'status']

    class Meta:
        db_table = 'dt_promise'
        # verbose_name = 'DT_PROMISE'

# class UserInfo(models.Model):
#     # name = models.ForeignKey('auth.User', related_name='user', on_delete=models.CASCADE)
#     user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
#     nickname = models.CharField(max_length=255, unique=True, blank=True)
#     first_name = models.CharField(max_length=255, blank=True)
#     last_name = models.CharField(max_length=255, blank=True)
#     age = models.CharField(max_length=50, blank=True)
#     sex = models.CharField(max_length=6, blank=True)
#     statistic = models.CharField(max_length=2024, blank=True)
#     about = models.CharField(max_length=2024, blank=True)
#     points = models.CharField(max_length=100, blank=True)
#     # friends = models.ManyToManyField('auth.User', blank=True)
#
#     class Meta:
#         db_table = 'DT_USER'
#         verbose_name = 'DT_USER'
