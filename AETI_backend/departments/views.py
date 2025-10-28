from rest_framework import viewsets
from .models import Department  # Make sure this exists
from .serializers import DepartmentSerializer  # Make sure this exists

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
