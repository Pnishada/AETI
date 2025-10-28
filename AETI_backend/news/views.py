from rest_framework import viewsets
from .models import News
from .serializers import NewsSerializer

class NewsViewSet(viewsets.ModelViewSet):
    """
    ViewSet for news items
    """
    queryset = News.objects.all().order_by('-date')  # use 'date' instead of 'published_at'
    serializer_class = NewsSerializer
