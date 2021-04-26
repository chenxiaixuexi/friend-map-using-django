from django.db import models

# Create your models here.
class Frnd(models.Model):
    name = models.CharField(verbose_name="name",max_length=30)
    phone = models.CharField(max_length=11,unique=True,verbose_name='phone number')
    addr = models.CharField(verbose_name='address', default='Beijing', max_length=50)
    city = models.CharField(verbose_name='city', default='Beijing', max_length=50)
    mail = models.CharField(verbose_name='mail', default='xxx', max_length=50)
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    cncity = models.CharField(verbose_name='cncity', default='北京', max_length=50)
    class Meta:
        db_table = 'friend'