from django.shortcuts import render
from rest_framework import (status, generics)
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from .models import Author
from .serializers import AuthorSerializer

# Create your views here.

class AuthorListView(generics.ListCreateAPIView):
    serializer_class = (AuthorSerializer)


    def list(self, request):
        authors = Author.objects.all()
        serializer = self.serializer_class(authors, many=True)
        return Response({'authors':serializer.data})

    def post(self, request):
        data = request.data
        print(data,  "------------------------------------")
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class AuthorDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = AuthorSerializer

    def get(self, request, author_id):
        queryset = get_object_or_404(Author, pk=author_id)
        serializer = self.serializer_class(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, author_id):
        author = get_object_or_404(Author, pk=author_id)
        serializer = self.serializer_class(author, request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
        
