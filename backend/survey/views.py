from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view

# Create your views here.
def surveyView(request):
    return HttpResponse('Hello, World!')
    
@api_view(['GET', 'POST','PUT'])
def surveyrequest(request):
    print(request.data)
    return HttpResponse('Hello, Worldss!')
    