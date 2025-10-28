from django.contrib import admin
from .models import Download

@admin.register(Download)
class DownloadAdmin(admin.ModelAdmin):
    list_display = ('title', 'file', 'uploaded_at')
    search_fields = ('title',)
