from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    image = models.ImageField(upload_to='news/', blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title
