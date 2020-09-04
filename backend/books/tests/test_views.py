from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse

class AuthorViewTest(TestCase):

    def setUp(self):
        self.client = APIClient() 
        self.author_data = {'first_name':'joseph', 'last_name':'senabulya'}
        self.book_data = {'name':'Alice In Wonderland', 'isbn':'67-67-67-67', 'author':1}
        self.author = self.client.post(reverse('authors'), self.author_data, format='json')
        self.book = self.client.post(reverse('books'), self.book_data, format='json')

    def test_create_book(self):
        
        self.assertEqual(self.book.data['name'], 'Alice In Wonderland')

    def test_get_books(self):
        response = self.client.get(reverse('books'))
        self.assertEqual(response.data['books'][0]['pk'], 1)
    
    def test_get_single_book(self):
        response = self.client.get(reverse('single_book', kwargs={'book_id':1}), format='json')
        self.assertEqual(response.data['name'], 'Alice In Wonderland')

    def test_update_book(self):
        data = {'name':'Hardy Boys', 'isbn':'67-67-67-67', 'author':1}
        response = self.client.put(reverse('update_book', kwargs={'book_id':1}), data, format='json')
        self.assertEqual(response.data['name'], 'Hardy Boys')
