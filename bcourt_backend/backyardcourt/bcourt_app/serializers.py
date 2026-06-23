from rest_framework import serializers
from .models import patron, payment, schedDate

class patronserializer(serializers.ModelSerializer):
    class Meta:
        model = patron
        fields = ['id', 'patron_name', 'contact_number']

class paymentserializer(serializers.ModelSerializer):
    class Meta:
        model = payment
        fields = ['id','patron_id', 'total_payment','screenshot']

class dateserializer(serializers.ModelSerializer):
    class Meta:
        model = schedDate
        fields = ['id', 'patron_id', 'time_start', 'time_end']


    
        




