# Book-manager
Book manager is a simple web application for managing book entries and their authors. Its built using python `Django Rest Framework` for the backend and javascript `React`


## How to run the Project
Run the following commands for the backend

`git clone https://github.com/sebbss/Book-manager.git`
`cd Book-manager`
`cd backend`
`pip install -r requirements.txt`
`python manage.py runserver`

Run the following commands for the frontend

`cd Book-manager`
`cd frontend`
`npm install`
`npm start`

## backend enpoints implemented

| Endpoint | Path | Description |
|-----|-----|------|
| GET | authors/ | get all authors |
| POST | authors/ | create an author |
| GET | authors/<author_id>/ | get single author |
| GET | books/ | get all books |
| POST | books/ | create a book |
| GET | books/<book_id>/ | get single book |
| PUT | books/<book_id>/update | update a book |
| PUT | authors/<author_id>/ | update an author |

