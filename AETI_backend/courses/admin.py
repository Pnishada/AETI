from django.contrib import admin
from .models import Course

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'duration', 'created_at')
    list_filter = ('type',)
    search_fields = ('title', 'description')
