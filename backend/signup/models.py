from django.db import models


class UserSignup(models.Model):
    emailid = models.EmailField(max_length=200,blank=False, default='')
    password = models.CharField(max_length=30,blank=False, default='')
    name = models.CharField(max_length=70, blank=False, default='')
    phone = models.CharField(max_length=10, blank=False, default='')
    age = models.PositiveSmallIntegerField(blank=False, default=0)
    gender = models.PositiveSmallIntegerField(blank=False, default=0)

class TherapistSignup(models.Model):
    emailid = models.EmailField(max_length=200,blank=False, default='')
    password = models.CharField(max_length=30,blank=False, default='')
    name = models.CharField(max_length=70, blank=False, default='')
    phone = models.CharField(max_length=10, blank=False, default='')
    age = models.PositiveSmallIntegerField(blank=False, default=0)
    gender = models.PositiveSmallIntegerField(blank=False, default=0)
    prooffile = models.FileField(upload_to='uploads/')
