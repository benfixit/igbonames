from django.shortcuts import render
from django.utils import (timezone, text)
from django.http import JsonResponse
from .models import Name

# Create your views here.
# def home(request):
#     names = Name.objects.all()

#     context = {
#         'title': 'Home',
#         'website_name': 'Igboname.com',
#         'year': timezone.now().year,
#         'alphabets': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
#     }
#     return JsonResponse(context)

def all(request):
    names = Name.objects.all()

    context = {
        'title': 'Names',
        'names': list(names)
    }
    return JsonResponse(context)

def detail(request, slug: str):
    try:
        name = Name.objects.get(slug=slug)

        name.search_hits += 1
        name.last_seen = timezone.now()
        name.save()
    except:
        name = None
    
    return JsonResponse({ 'name': name })

    


def create(request):
    name = None

    if request.method == 'POST':
        title = request.POST.get('title')
        meaning = request.POST.get('meaning')
        extended_meaning = request.POST.get('extended_meaning')
        poster = request.POST.get('poster')
        slug = text.slugify(title)

        name = Name.objects.create(
            title=title, 
            meaning=meaning, 
            extended_meaning=extended_meaning, 
            poster=poster, 
            slug=slug
        )
        
    return JsonResponse({ 'name': name })