from django.urls import path
from .views import (detail, create, all)

urlpatterns = [
    # path('', home, name='name-home'),
    path('names/new', create, name='name-create'),
    path('names/<slug:slug>', detail, name='name-detail'),
    path('names', all, name='name-all')
]