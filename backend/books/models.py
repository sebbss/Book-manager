from django.db import models
from authors.models import Author

# Create your models here.
class Book(models.Model):
    
    name  = models.CharField(max_length=50)
    isbn   = models.CharField(max_length=50)
    author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

        