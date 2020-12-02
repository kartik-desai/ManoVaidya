from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from signup.models import Signup
from signup.serializers import SignupSerializer
from rest_framework.decorators import api_view
# Create your views here.
def signupView(request):
    return HttpResponse('Hello, World!')

@api_view(['GET', 'PUT', 'DELETE'])
def signuprequest(request):
    if request.method == 'PUT':
        user_data = JSONParser().parse(request)
        signup_serializer = SignupSerializer(data=user_data)
        if signup_serializer.is_valid():
            signup_serializer.save()
            return JsonResponse(signup_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(signup_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 