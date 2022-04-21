from django.db import models

# Create your models here.

class User(models.Model):
  username = models.CharField(max_length=1024, verbose_name='ユーザー名')
  first_name = models.CharField(max_length=50, verbose_name='名')
  last_name = models.CharField(max_length=50, verbose_name='姓')
  email = models.EmailField(max_length=240, verbose_name='メールアドレス')
  
