from django.db import models
from authors.models import Author

# Create your models here.
class Book(models.Model):
    
    name  = models.CharField(max_length=50)
    isbn   = models.CharField(max_length=50)
    author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    def create_book(self, name, isbn, author):

        if name is None:
            raise TypeError('Must enter name')

        if isbn is None:
            raise TypeError('Must enter isbn')

        if author is None:
            raise TypeError('Must enter author')

        book = self.model(name=name, isbn=isbn, book=book, author=author)
        book.save()
        return book

        