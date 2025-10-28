from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default="No description yet")
    head = models.CharField(max_length=100)
    contact_email = models.EmailField(default="example@example.com")
    contact_phone = models.CharField(max_length=20, blank=True, null=True)
    image = models.ImageField(upload_to='departments/', blank=True, null=True, max_length=500)  # Increased length

    def __str__(self):
        return self.name
