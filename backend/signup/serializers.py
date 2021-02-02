from rest_framework import serializers 
from signup.models import UserSignup
from signup.models import TherapistSignup
 
 
class SignupSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = UserSignup
        fields = ('emailid',
                  'password',
                  'name',
                  'phone',
                  'age',
                  'gender')

class SignupTherapistSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = TherapistSignup
        fields = ('emailid',
                  'password',
                  'name',
                  'phone',
                  'age',
                  'gender',
                  'prooffile')