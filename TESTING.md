Back to [README](README.md)

---

# Contents

- [Testing User Stories](#user-stories)

- [Manual Testing](#manual-testing)
    - [Front End Testing](#front-end-testing)
    
    - [Back End Testing](#back-end-testing)
- [Chrome Dev Tools - Lighthouse](#chrome-dev-tools-lighthouse)
- [Responsiveness](#responsiveness)
- [Bugs](#bugs)

---


# Testing User Stories

User stories tests goes here

[^ back to contents ^](#contents)

---

# Manual Testing

## Front End Testing

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Ensure website passes HTML validators | Outcome info | PASS or FAIL
Ensure website passes CSS validators | Outcome info | PASS or FAIL
Ensure website passes Jhint validators | Outcome info | PASS or FAIL
Ensure website passes PEP8 validators | Outcome info | PASS or FAIL
Ensure responsiveness of website across all major browsers | Outcome info | Pass or Fail
Ensure the correct navigation items are displayed to the user when they are logged out | Outcome info |Pass or Fail
Ensure the correct navigation items are displayed to the user when they are logged in | Outcome info |Pass or Fail
Ensure all navigation items redirect to their appropiate pages | Outcome info | Pass or Fail
Ensure the footer is displayed on all pages with the correct links and social media links | Outcome info | Pass or Fail
Ensure the job description page works as intended with the appropiate functionality | Outcome info | Pass or Fail
Ensure the register page works as intended with the appropiate functionality | Outcome info | Pass or Fail
Ensure the login page works as intended with the appropiate functionality | Outcome info | Pass or Fail
Ensure the create job page works as intended with the appropiate functionality | Outcome info | Pass or Fail
Ensure the log out button works as intended with the appropiate functionality, ending the users' session | Outcome info | Pass or Fail
Ensure error pages, 404 and 500 works as intended | Outcome info | Pass or Fail


## Back End Testing

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Ensure password is hashed using Werkzeug security features | Password is hashed using Werkzeug security features. Example of a hashed password generated for a new user. [Hashed](wireframes/password_hashing.png) | PASS
Ensure flash message is displayed when a new user registers | Flash message is displayed when a new user registers. [New user](wireframes/reg_success.png) | PASS
Ensure a flash message is displayed if a new user tries to register with an username that's already been registered | a flash message is displayed if a new user tries to register with an username that's already been registered. [Register fail](wireframes/reg_not_success.png) | PASS
Using RegEx defensive programming, ensure form is not submitted unless username and password are between 4-15 characters long | Users have to submit a username and password between 4-15 characters using a-z A-Z or 0-9. [Defensive programming](wireframes/defensive_prog.png) | PASS
Ensure a flash message is displayed to the user if incorrect details are entered | If the user enters an incorrect username or password a flash message is displayed. [Invalid details](wireframes/invalid_details.png) | PASS
Ensure a flash message is displayed to the user with their username when they login | A flash message is displayed to the user with their username when they login. [Username displayed](wireframes/correct_details.png) | PASS
Ensure user's username is displayed when they log in | User's username is displayed when they are logged. [Username displayed](wireframes/username_profile.png) | PASS



[^ back to contents ^](#contents)

---

# Chrome Dev Tools - Lighthouse

Lighthouse info goes here

[^ back to contents ^](#contents)

---

# Responsiveness

Responsiveness testing goes here

[^ back to contents ^](#contents)

---

# Bugs 

## Mobile Side Nav

- Having a bit of an issue trying to get the mobile side navigation to display when the hamburger menu is tapped.

    - It's probably something very small which I'll resolve later.
        - Resloved this issue by ammending the file structure.

## Footer On Safari

- When viewd live on Safari mobile browser, the footer is not sticking to the bottom and it's not displaying its intended colour. Works fine in Safari on the laptop. [Footer issue image](wireframes/footer_issue.png).

    - Issue resolved itself. 


[^ back to contents ^](#contents)

---
