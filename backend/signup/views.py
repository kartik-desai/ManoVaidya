from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.core.exceptions import ObjectDoesNotExist
from signup.serializers import SignupSerializer
from signup.serializers import SignupTherapistSerializer
from rest_framework.decorators import api_view
from signup.forms import TherapistForm

from signup.models import UserSignup
from signup.models import TherapistSignup
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

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def signuptherapistrequest(request):
    if request.method == 'POST':
        user_data = TherapistForm(request.POST, request.FILES)
        if user_data.is_valid():
            user_data.save()
            return JsonResponse(user_data.data ,status=status.HTTP_201_CREATED) 
        return JsonResponse(user_data.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def login(request):
    if request.method == 'PUT':
        user_data = JSONParser().parse(request)
        try:
            user = UserSignup.objects.get(emailid = user_data['emailid'])
            if user.password == user_data['password']:
                return JsonResponse(user_data['emailid'] ,status=status.HTTP_200_OK, safe=False)
            else:
                return JsonResponse("Incorrect Credentials" ,status=status.HTTP_206_PARTIAL_CONTENT, safe=False)
        except ObjectDoesNotExist:
            try:
                user = TherapistSignup.objects.get(emailid = user_data['emailid'])
                if user.password == user_data['password']:
                    return JsonResponse(user_data['emailid'] ,status=status.HTTP_200_OK, safe=False)
                else:
                    return JsonResponse("Incorrect Credentials" ,status=status.HTTP_206_PARTIAL_CONTENT, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse("Invalid Login credentials", status=status.HTTP_400_BAD_REQUEST, safe=False)


#@api_view(['GET', 'PUT', 'DELETE'])
#def loginrequest(request):
#    if request.method == 'PUT':
#        user_data = JSONParser.parse(request)
#        user = Signup.objects.get(pass) 

