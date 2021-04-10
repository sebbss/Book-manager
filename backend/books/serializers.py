from rest_framework import serializers
from .models import Book
from authors.serializers import AuthorSerializer
from authors.models import Author

class BookDetailSerializer(serializers.ModelSerializer):
    
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Book
        fields = ("pk", "name", "isbn", "author")

  

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("pk", "name", "isbn", "author")

    