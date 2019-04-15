# VergeSense Code Challenge

## Notes

This project was written using JavaScript's React framework, Chart.js, and Ant Design UI.

JSON URL: https://api.jsonbin.io/b/5cafaeb4c0338e327afea672

## Challenges

My thought process: I was confident in creating the database and writing the get request to the API, as these are things I have done several times before. However, I knew that when it came to constructing a graph and populating it with data points that I might have a bit more work to do. I had never really used graphs in any of my projects before, so this was something I would have to learn as I went.

Luckily, Chart.js makes the actual graph quite easy to navigate, the hard part was writing the logic for taking the raw API data and filtering it through the two time-points the user selects,
then assigning the individual sensor reports to Chart.js's data property.

Getting the time and date stamps to work how I needed them to when the user chooses them was also challenging. For instance they needed to be specificly formatted and dispatched to my dates reducer for use in the graph constraints, which as noted had its own challenges.

Overall I am pleased with the app and how it looks and functions. I think it is rather useful and visually appealing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The entire app is a single page. The user selects a start and end date with two day and time pickers, then after clicking the "Show Graph" button the data will render on the graph if there are sensor reports which occured between those two points in time. The user can select and deselect individual sensors to make the focus on particular sensors and scale the graph. The y axis represents the number of people a sensor reports at a time point, and the x axis represents time.

