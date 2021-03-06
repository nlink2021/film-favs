# film-favs

## Film Favorites

# Overview

The overall goal of my application is to have a place where a user can login and keep a list of
movies pulled from a database using a simple search. They can add them to a list of favorites or
just movies that they've seen before.

# Wireframes

![alt text](./wireframes/apiwire1.JPG)
![alt text](./wireframes/apiwire2.JPG)
![alt text](./wireframes/apiwire3.JPG)

3 images:

https://imgur.com/a/I3hh9Fv

# User Stories

1. The user will see the dashboard first, with a prompt to login to their account or sign up.
2. If they aren't a member, they will have a form they can fill out on a form page to register, they are then brought back to the login screen.
3. After logging in, the search bar will be front and center with a scrolling list of popular movies along the bottom.
4. Their profile can be accessed through an alternate link and will contain their name as well as movie lists they've made. They can remove these at will.
5. After typing the movie into the searchbar, it will pull from a database and bring the movie details up.
6. The user can view all sorts of details about the movie, or add it to one of their lists (favorite, watched, etc.)
7. On their list of movies, they have access to recommending what movies are similar.

# Routes Inventory

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

userRoutes.post('/')
userRoutes.delete('/:id')
userRoutes.post('/login')
userRoutes.get('/:userId/getmovies')
userRoutes.delete('/:userId/delete/:movie')
movieRoutes.post('/search/:movie')
movieRoutes.post('/:userId/save/:movie')
movieRoutes.get('/search/:movie')

# MVP Checklist

- login/logout,sign-up functionality
- screen switching between login, dashboard, and profile using links
- search bar initialization and attached to database
- keeping running list of saved movies on profile screen

# Stretch Goals

Users will be able to compile a virtual library of films that will not only recommend films in the same genre or director that they may also like, but will let them know the medium in which they can watch it (streaming service, website, etc.)

