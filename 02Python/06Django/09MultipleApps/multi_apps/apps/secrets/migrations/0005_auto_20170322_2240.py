# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-22 22:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('secrets', '0004_like_likes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='like',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]