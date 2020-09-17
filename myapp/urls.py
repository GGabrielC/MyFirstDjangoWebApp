from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='indexMyApp'),
    path('ajax/loadContent/', views.loadContent, name='loadContent'),
]