from django.contrib.auth import get_user_model
from users.serializers import UserSerializer
from rest_framework import generics, filters


# Instance of User model
User = get_user_model()

# Create your views here.


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['mail', ]


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
