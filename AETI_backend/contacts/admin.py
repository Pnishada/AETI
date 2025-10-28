from django.contrib import admin
from .models import ContactDetails  

@admin.register(ContactDetails)
class ContactDetailsAdmin(admin.ModelAdmin):
    list_display = ('email', 'phone', 'address')
    search_fields = ('email', 'phone', 'address')
