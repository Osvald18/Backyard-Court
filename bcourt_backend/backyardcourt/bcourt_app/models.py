from django.db import models

# Create your models here.

class patron(models.Model):
    payment_id = models.IntegerField()
    contact_number = models.BigIntegerField()
    date = models.DateTimeField()
    created_at = models.DateTimeField()


class payment(models.Model):
    total_payment = models.PositiveIntegerField()
    screenshot = models.ImageField()




