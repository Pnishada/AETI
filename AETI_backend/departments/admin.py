from django.contrib import admin
from .models import Department

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'head', 'contact_email', 'contact_phone')
    search_fields = ('name', 'head')
