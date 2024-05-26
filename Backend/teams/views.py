from rest_framework import generics, permissions
from teams.serializers import TeamSerializer, RoleTypeSerializer, CollaboratorSerializer
from core.models import Team, RoleType, Collaborator


# Create your views here.
class TeamList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class RoleTypeList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = RoleType.objects.all()
    serializer_class = RoleTypeSerializer


class RoleTypeDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = RoleType.objects.all()
    serializer_class = RoleTypeSerializer


class CollaboratorList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Collaborator.objects.all()
    serializer_class = CollaboratorSerializer


class CollaboratorDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Collaborator.objects.all()
    serializer_class = CollaboratorSerializer
