# Generated by Django 3.0.5 on 2021-03-25 09:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0004_auto_20210201_1435'),
    ]

    operations = [
        migrations.AddField(
            model_name='usersignup',
            name='therapist',
            field=models.CharField(default='', max_length=10),
        ),
    ]