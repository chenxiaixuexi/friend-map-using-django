# Generated by Django 3.0.5 on 2020-05-25 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='frnd',
            name='cncity',
            field=models.CharField(default='北京', max_length=50, verbose_name='cncity'),
        ),
        migrations.AlterField(
            model_name='frnd',
            name='city',
            field=models.CharField(default='Beijing', max_length=50, verbose_name='city'),
        ),
    ]
