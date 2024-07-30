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
-implement sign in user api
- configure redux store
-implemented sign out api feature
-implemented update profile api and redirection 
- BUG FIX: * sign up user display name and photo url was not being updated at one go only after refresh ( fixed it by dispatching action again after update profile api)
* moved onauthstate logic from body to header as it was causing issue like any user could access browse page without being a account user and vice versa
- - - - - - - - - 
-unsubscribed to onauthstatechange callback
- add hardcoded values to constant
-register tmdb account and create an app for access token
-fetch from tmdb nowplaying api movies 
-custom hook for now playing 
- create movieslice and and update store with it
-planning for main and secondary container
-fetch data for trailer video and updated the store with trailer movie data
-embedded youtube video and make it autoplay and mute
-tailwind css to make it look good
