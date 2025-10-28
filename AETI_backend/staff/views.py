from rest_framework import viewsets
from .models import Staff
from .serializers import StaffSerializer  # you need to create this

class StaffViewSet(viewsets.ModelViewSet):
    """
    ViewSet for staff members
    """
    queryset = Staff.objects.all().order_by('name')
    serializer_class = StaffSerializer
