from django.conf.urls import url 
from django.urls import path
from signup import views 
from django.views.generic import TemplateView
 
urlpatterns = [ 
    path('registeruser', views.signuprequest),
    path('registertherapist', views.signuptherapistrequest),
    path('login', views.login)
]