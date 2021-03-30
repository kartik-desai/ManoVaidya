from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
import pickle
import chatterbot
from chatterbot.trainers import ListTrainer
# Create your views here.
bot=ChatBot('Test',  
	database_uri='sqlite:///database.db',
    read_only=True,
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    preprocessors=[
        'chatterbot.preprocessors.clean_whitespace',
    ],
    logic_adapters=[
        {
            'import_path': 'chatterbot.logic.BestMatch',
            'default_response': 'I am sorry, but I do not understand.'
        },
        'chatterbot.logic.MathematicalEvaluation'
    ],
)
@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def chatmsg(request):
    if request.method == 'GET':
        message = JSONParser().parse(request)
        #print(message)
        print(message["message"])
        response=bot.get_response(message["message"])
        print(response.text)
        return JsonResponse({"response":response.text},status=status.HTTP_200_OK, safe=False)
