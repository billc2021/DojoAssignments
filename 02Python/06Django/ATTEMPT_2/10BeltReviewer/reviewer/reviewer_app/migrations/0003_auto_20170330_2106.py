# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-30 21:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviewer_app', '0002_auto_20170330_2052'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='ratings',
        ),
        migrations.AddField(
            model_name='review',
            name='ratings',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
