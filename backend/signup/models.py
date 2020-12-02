from django.db import models


class Signup(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    emailid = models.EmailField(max_length=200,blank=False, default='')
    phone = models.CharField(max_length=10, blank=False, default='')
    age = models.PositiveSmallIntegerField(blank=False, default=0)
    gender = models.PositiveSmallIntegerField(blank=False, default=0)
