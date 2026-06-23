from django.db import models
from datetime import datetime

# Create your models here.

class patron(models.Model):
    patron_name = models.CharField(max_length=50, default= "player")
    contact_number = models.BigIntegerField(max_length = 11)
    created_at = models.DateTimeField(default = datetime.now)

class schedDate(models.Model):
    patron_id = models.ForeignKey(patron, on_delete= models.CASCADE, default = "")
    time_start= models.DateTimeField(default = datetime.now)
    time_end = models.DateTimeField(default = datetime.now)

class payment(models.Model):
    patron_id = models.OneToOneField(patron, on_delete= models.CASCADE, default = "")
    total_payment = models.PositiveIntegerField()
    screenshot = models.FileField()











