from rest_framework import serializers 
from signup.models import Signup
 
 
class SignupSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Signup
        fields = ('emailid',
                  'name',
                  'phone',
                  'age',
                  'gender')