from rest_framework import serializers
from django.shortcuts import get_object_or_404
from .models import Author

class AuthorSerializer(serializers.ModelSerializer):
    
    
    class Meta:
        model = Author
        fields = ("pk", "first_name", "last_name")

