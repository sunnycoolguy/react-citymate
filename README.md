This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This a project of mine that I built to practice using fetch() for http requests. Given a valid US city and state, the app will contanct OpenWeatherMap servers using an API key (omitted from source), and display them to the user. The app container component is `<CityMate/>`, where all the state lives in. The state includes the current city, state, and relevant weather information upon successfull completion of a fetch request. `<Search/>` is responsible for updating the `city` and `state` data inside the app's state as well as initiazling an http request for relevant data. `<Result/>` is responsible for formatting the data for the client to view. `<Toggle/>` allows the user to switch units of measurement.

Here's a GIF of the app at work!

![GIF of CityMate functionality](./demo.gif)


N.B: I learned a bit of a tough lesson on this one. I spent most of the development with my api key pasted into CityMate.js. So in order to keep my api key private, I had to reset my git history and refactor the project to use an **ignored** apiKeys.js file.