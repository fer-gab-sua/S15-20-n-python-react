from django.auth import get_user_model
from users.serializers import UserSerializer
from rest_framework import generics


# Instance of User model
User = get_user_model()

# Create your views here.


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
