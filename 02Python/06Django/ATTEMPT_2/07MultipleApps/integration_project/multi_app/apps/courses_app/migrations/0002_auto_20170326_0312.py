# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-26 03:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='description',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='courses', to='courses_app.Course'),
        ),
    ]
