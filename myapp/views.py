from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def index(request):
    return render(request, 'indexMyApp.html')

def loadContent(request):
    data = {
        'value': render(request, 'content.html').getvalue().decode("utf-8")
    }
    return JsonResponse(data)

