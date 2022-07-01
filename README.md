# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Adding A Frontend

## Guidelines

### Part 1, Getting it all set up

This React project is the starter code for a frontend for the API you've been building. It depends on your API to be running.

It works via creating a proxy server to connect with your API. It expects all backend endpoints to be prefixed with the `/api` prefix. That's how React-Dev-Server can tell the difference between React routes on the frontend, and your API endpoints.

If your API doesn't have an `/api` prefix yet, you can add this by amending the following line in your `server.js` file:

`app.use('/api', router)`

Note that you'll need to update your requests in insomnia, now that you've added this prefix! You will also need to update your tests, to expect this prefix.

Try running both projects at the same time and see if you can get your frontend talking to your backend!

`npm start` or `npm run start` to run your frontend.


### Part 2, Adding more components

Once you've got your Frontend talking to your Backend, time to add some features to your frontend to make it a nicer experience!

1. Add a `Navbar` so that you can navigate, and hook up both the `/` and `/pokemon` (equivalent) routes so that you can move between a home page and an index page. Your index page should show a list of nice cards.
2. Create a `ShowPokemon` (equivalent) component, so that when you click on a card it takes you to the ShowPokemon page that just shows a single pokemon. 


* **A `readme.md` file** with:
    * An embedded screenshot of the app
    ![](images/ReadMe.jpeg)
    * Explanations of the **technologies** used
          - carousel (home), confetti (checkout), react survey.js(questionnaire)
          - Miro and Jira for planning
          - Excalidraw for whiteboarding
          - Visual Studio Code to create product
          - Terminal to install dependencies
          - npm I to install dependencies
          - MongoDB
          - Node for database seeding
          - API for frontend and backend development
          - Insomnia to test our API
          - React-Modal-Video to embed a YouTube video
          - React for frontend and backend development
          - JavaScript and JSX for frontend and backend development
          - HTML for frontend development
          - CSS for styling in frontend development
          - Bulma to import CSS
          - Google Fonts to import fonts for styling
          - Pexel & Unsplash to search for .jpg images
          - Cloudinary to upload images into URLs
          - Netlify for deployment
          - Github
    * A couple paragraphs about the **general approach you took**
    * **Installation instructions** for any dependencies
      1. Terminal: run mongod --dbpath ~/data/db
      2. Backend: run node db/seed.js
      3. Backend: run npm start
      4. Frontend: run npm i
      5. Frontend: run npm start
    * Link to your **user stories/wireframes** – sketches of major views / interfaces in your application
    * Link to your **pitch deck/presentation** – documentation of your wireframes, user stories, and proposed architecture
      - Pitch Deck with Miro Planning:
      https://res.cloudinary.com/dgicm5dgb/image/upload/v1656712649/Project%203%20ReadMe/Miro_nyafao.jpg 
      - Pitch Deck with Excalidraw whiteboard:
      https://res.cloudinary.com/dgicm5dgb/image/upload/v1656712639/Project%203%20ReadMe/Excalidraw_vturke.png  
      - Jira Sprint 1:
      https://res.cloudinary.com/dgicm5dgb/image/upload/v1656712946/Project%203%20ReadMe/Jira1_k1aks1.jpg
      - Jira Sprint 2 and Stretch Goals:
      https://res.cloudinary.com/dgicm5dgb/image/upload/v1656712945/Project%203%20ReadMe/Jira_2_uwuuuj.jpg 
      - User stories:
      https://docs.google.com/document/d/1CrNyAtkU2yVdQW3Xsw_byXqZwaLLTu99/edit 
    * Descriptions of any
    **unsolved problems** or **major hurdles** you had to overcome

