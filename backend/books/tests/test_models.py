from django.test import TestCase
from ..models import Book
from authors.models import Author

class BookTest(TestCase):
    
    def setUp(self):
        author = Author.objects.create(first_name="joseph", last_name="senabulya")
        Book.objects.create(name='alice in wonderland', isbn='575-6784-7843', author=author)
        self.book = Book.objects.get(name='alice in wonderland')
        

    def test_book_model(self):
        self.assertEqual(
            self.book.isbn, "575-6784-7843")
    
    def test_string_method(self):
        self.assertEqual(
            self.book.__str__(), "alice in wonderland")