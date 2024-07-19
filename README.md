# netflix gpt

- create react app
- configured tailwindcss
- configured routing
-header
-login form ( sign in and sign up)
-form validation
-useref
-firebase setup and authentication as well
-firebase deploy to prod
-create sign up user account
-create sign in user account
- configure redux store
-implemented sign out api feature
-implemented update profile api and redirection 

- BUG FIX: * sign up user display name and photo url was not being updated at one go only after refresh ( fixed it by dispatching action again after update profile api)
* moved onauthstate logic from body to header as it was causing issue like any user could access browse page without being a account user and vice versa
- - - - - - - - - 
- fetch from tmdb api movies 