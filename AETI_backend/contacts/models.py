from django.db import models

class ContactDetails(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    address = models.TextField()
    map_embed = models.TextField(blank=True, null=True)  # optional

    def __str__(self):
        return self.email
