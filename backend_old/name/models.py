from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.
class Name(models.Model):
    title = models.CharField(max_length=200)
    meaning = models.TextField(default=None)
    extended_meaning = models.TextField(default=None, blank=True, null=True)
    morphology = models.TextField(default=None, blank=True, null=True)
    poster = models.EmailField()
    slug = models.SlugField(default="", blank=True, null=True)
    search_hits = models.IntegerField(default=0, blank=True, null=True)

    date_created = models.DateTimeField(default=timezone.now, blank=True, null=True)
    date_updated = models.DateTimeField(default=timezone.now, blank=True, null=True)
    last_seen = models.DateTimeField(default=timezone.now, blank=True, null=True)

    def __str__(self) -> str:
        return self.title
    
    def get_absolute_url(self):
        return reverse('name-detail', kwargs={'slug': self.slug})

class Town(models.Model):
    name = models.CharField(max_length=255)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return self.name