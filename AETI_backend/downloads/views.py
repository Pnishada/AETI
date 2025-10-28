from rest_framework import viewsets
from rest_framework import viewsets
from .models import Download
from .serializers import DownloadSerializer

class DownloadViewSet(viewsets.ModelViewSet):
    queryset = Download.objects.all().order_by('-uploaded_at')
    serializer_class = DownloadSerializer