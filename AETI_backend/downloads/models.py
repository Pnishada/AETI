from django.db import models

class Download(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='downloads/', max_length=500)  
    description = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
