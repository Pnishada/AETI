from django.db import models

class Gallery(models.Model):
    GALLERY_TYPES = [
        ('Image', 'Image'),
        ('Video', 'Video'),
    ]

    type = models.CharField(max_length=10, choices=GALLERY_TYPES)
    image = models.ImageField(upload_to='gallery/', max_length=255)  # increased length
    caption = models.CharField(max_length=200, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.caption if self.caption else f"Gallery {self.id}"
