from django.shortcuts import render
from django.http import HttpResponse
from .models import patron, payment, schedDate
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import patronserializer, paymentserializer, dateserializer


# Create your views here.
def index(request):
    return HttpResponse("Hello World, You are in the backyardcourt web application:)")

class patronviewset(viewsets.ModelViewSet):
    queryset = patron.objects.all()
    serializer_class = patronserializer
    permission_classes = [AllowAny]


class paymentviewset(viewsets.ModelViewSet):
    queryset = payment.objects.all()
    serializer_class = paymentserializer
    permission_classes = [AllowAny]

class dateviewset(viewsets.ModelViewSet):
    queryset = schedDate.objects.all()
    serializer_class = dateserializer
    permission_classes = [AllowAny]
    


