from django.test import TestCase
from ..models import Author

class AuthorModelTest(TestCase):

    def setUp(self):
        Author.objects.create(first_name='joseph', last_name='senabulya')
        self.author = Author.objects.get(first_name='joseph')
        

    def test_author_model(self):
        self.assertEqual(
            self.author.last_name, "senabulya")
    
    def test_string_method(self):
        self.assertEqual(
            self.author.__str__(), "joseph")
