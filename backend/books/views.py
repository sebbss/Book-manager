from django.shortcuts import render
import json
from rest_framework import (status, generics)
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from .models import Book
from .serializers import BookSerializer, BookDetailSerializer

# Create your views here.

class BookListView(generics.ListCreateAPIView):
    serializer_class = (BookSerializer)


    def list(self, request):
        books = Book.objects.all()
        serializer = self.serializer_class(books, many=True)
        return Response({'books':serializer.data})

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class BookDetailView(generics.RetrieveAPIView):
    
    serializer_class = BookDetailSerializer
    def get(self, request, book_id):
        queryset = get_object_or_404(Book, pk=book_id)
        serializer = self.serializer_class(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BookUpdateView(generics.UpdateAPIView):
    serializer_class = BookSerializer
    http_method_names = ['put']
    def put(self, request, book_id):
        book = get_object_or_404(Book, pk=book_id)
        serializer = self.serializer_class(book, request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
        
