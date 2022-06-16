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


