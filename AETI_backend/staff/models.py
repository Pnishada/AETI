from django.db import models
from departments.models import Department

class Staff(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True)
    image = models.ImageField(upload_to='staff/', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    social_links = models.JSONField(blank=True, null=True)  # {"linkedin": "...", "facebook": "..."}

    def __str__(self):
        return self.name
