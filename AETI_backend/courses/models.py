from django.db import models

class Course(models.Model):
    COURSE_TYPES = [
        ('Full-Time', 'Full-Time'),
        ('Part-Time', 'Part-Time'),
    ]

    title = models.CharField(max_length=200)
    type = models.CharField(max_length=50, choices=COURSE_TYPES)
    duration = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='courses/', default='default.jpg')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
