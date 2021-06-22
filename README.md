# RESTy System

## Index

- [Lab 26 , v1.1](./public/assets/labVersions/lab26.md)
- [Lab 27 , v1.2](./public/assets/labVersions/lab27.md)
- [Lab 28 , v1.3](./public/assets/labVersions/lab28.md)
- [Lab 29 , v1.4](./public/assets/labVersions/lab29.md)
- [RESTy System Overview](#RESTy)

---

# RESTy

 A browser based API testing tool

## Business Requirements

Our application will be an API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.

![RESTy](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/resty/resty.png)

### The core requirements and functionality are as follows

- Simple, intuitive user interface
  - A form where a user:
    - Enters a REST API Endpoint (URI)
    - Selects the REST Method to use (get, post, put, delete)
    - For put and post, allow the user to enter JSON to be used as the body for the request
    - A button to initiate the request
  - An output section which:
    - Displays a spinner to indicate a request is in process
    - Once a request is complete:
    - Hide the spinner
    - Display a well formatted view of the API response in 2 sections
      - Headers
      - Body
  - A history section which:
    - Shows a list of all unique, successful requests
    - Allows a user to click or select one to re-populate the form so they can repeat the request

### Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
1. ES6 Classes
1. Shared Component State
1. Local Storage for storing request history
1. Superagent or Axios for performing API Requests
1. SASS for styling
    - Global Theme
    - Component specific CSS where possible
1. Test Driven Development, using Jest
    - Tests will be runnable locally
1. Deployment to GitHub Pages using an Action

### Application Structure (proposed)

```
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── form.test.js
│   ├── history.test.js
│   ├── results.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── components
│   │   ├── if
│   │   │   └── if.js
│   │   ├── form
│   │   │   └── form.js
│   │   │   └── form.scss
│   │   ├── history
│   │   │   └── history.js
│   │   │   └── history.scss
│   │   ├── results
│   │   │   └── results.js
│   │   │   └── results.scss
│   │   ├── header
│   │   │   └── header.js
│   │   │   └── header.scss
│   ├── design
│   │   └── variables.scss
│   │   └── design.scss
└── package.json
```

### Development Process, Milestones

1. Phase 1: Application Setup
    - Basic React Application
    - Scaffolding
    - Basic State
    - Rendering

1. Phase 2: Testing and Deployment
    - Testing of React components and applications
    - Uses best practices for testing Behaviors and Acceptance Criteria
    - Integrates with an online CI framework
    - Deploy to GitHub Pages, Netlify, and/or AWS

1. Phase 3: State and Props
    - Create multiple components to handle each aspect of the Application
    - Sharing state and behaviors between components
    - Basic layout and styling

1. Phase 4: Fit and Finish
    - Incorporate the spinner, using conditional rendering
    - App is Fully Tested
    - App is Fully Documented
    - RESTy is Deployed and publicly available

<br>

---
<br>

## Author Links

- ### Shady Khaled github ✅

  - [Shady Khaled](https://github.com/shadykh)

- ### Shady Khaled reading notes 📚

  - [Shady Khaled reading notes](https://shadykh.github.io/reading-notes/)

- ### Shady Khaled portfolio 💬

  - [Shady Khaled portfolio](https://portfolio-shady.herokuapp.com/)
