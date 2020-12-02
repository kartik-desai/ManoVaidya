from django.conf.urls import url 
from django.urls import path
from signup import views 
from django.views.generic import TemplateView
 
urlpatterns = [ 
    path('register', views.signuprequest)
]