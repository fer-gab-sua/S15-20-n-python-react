from django.contrib.auth import get_user_model
from users.serializers import UserSerializer
from rest_framework import generics, permissions


# Instance of User model
User = get_user_model()

# Create your views here.


class UserList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = User.objects.all()
    serializer_class = UserSerializer
