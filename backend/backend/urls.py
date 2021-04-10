"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from authors.views import (AuthorListView, AuthorDetailView)
from books.views import (BookListView, BookDetailView, BookUpdateView)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('authors/', AuthorListView.as_view(), name="authors"),
    path('books/', BookListView.as_view(), name="books"),
    path('authors/<author_id>/', AuthorDetailView.as_view(), name="single_author"),
    path('books/<book_id>/update', BookUpdateView.as_view(), name="update_book"),
    path('books/<book_id>/', BookDetailView.as_view(), name="single_book"),
    

]
