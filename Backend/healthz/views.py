from django.http import HttpResponse


# Create your views here.
def health_check(request):
    return HttpResponse("Si puede ver este texto, el servicios funciona correctamente")
