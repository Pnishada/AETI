from rest_framework import viewsets
from .models import Gallery
from .serializers import GallerySerializer

class GalleryViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing gallery items.
    """
    queryset = Gallery.objects.all().order_by('-uploaded_at')
    serializer_class = GallerySerializer
