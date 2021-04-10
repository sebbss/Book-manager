from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse

class AuthorViewTest(TestCase):

    def setUp(self):
        self.client = APIClient() 
        self.data = {'first_name':'joseph', 'last_name':'senabulya'}
        self.author = self.client.post(reverse('authors'), self.data, format='json')

    def test_create_author(self):
        
        self.assertEqual(self.author.data['first_name'], 'joseph')

    def test_get_authors(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.data['authors'][0]['pk'], 1)
    
    def test_get_single_author(self):
        response = self.client.get(reverse('single_author', kwargs={'author_id':1}), format='json')
        self.assertEqual(response.data['first_name'], 'joseph')

    def test_update_author(self):
        data = self.data = {'first_name':'paul', 'last_name':'lubega'}
        response = self.client.put(reverse('single_author', kwargs={'author_id':1}), data, format='json')
        self.assertEqual(response.data['first_name'], 'paul')
