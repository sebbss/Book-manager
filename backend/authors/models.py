from django.db import models

# Create your models here.
class Author(models.Model):
    
    first_name  = models.CharField(max_length=50)
    last_name   = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name
    
    def create_author(self, first_name, last_name):

        if first_name is None:
            raise TypeError('Must enter first name')

        if last_name is None:
            raise TypeError('Must enter last name')

        author = self.model(first_name=first_name, last_name=last_name)
        author.save()
        return author