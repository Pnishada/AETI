from django.contrib import admin
from .models import Staff

@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'department', 'email')
    search_fields = ('name', 'role', 'email')
    list_filter = ('department',)
