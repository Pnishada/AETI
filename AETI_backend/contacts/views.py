from rest_framework import viewsets
from .models import ContactDetails
from .serializers import ContactDetailsSerializer

class ContactDetailsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Read-only endpoint for site contact details
    """
    queryset = ContactDetails.objects.all()
    serializer_class = ContactDetailsSerializer
