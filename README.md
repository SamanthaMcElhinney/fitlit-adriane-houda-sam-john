# FitLit

## Abstract
A web application designed to allow users to monitor their latest and all-time activity, hydration, and sleep data and to compare their health metrics and goals against the wider user base of the platform. Users can easily track their water consumption by inputting the amount of water they drink, and can view their weekly consumption in the app. Additionally, the app offers a unique feature that allows users to see their running data mapped out on a map.

## Preview of App
![demo](src/images/Sisphyus-Fitness.gif)

## Technologies Used
### Core
- Javascript
- CSS & HTML
- Webpack module bundler
- Fetch API
- Mocha Javascript testing framework and Chai assertion library

### Third Party Libraries
- Charts.js
- Day.js
- Micromodal
- Leaflet

### Other
- Git/GitHub
- GitHub project board
- Figma and Adobe Illustrator for wireframing and vector graphics

## API Installation Guide
1. Navigate to [This API](https://github.com/turingschool-examples/fitlit-api)
2. Copy SSH key on GitHub inside the code dropdown
3. Using the terminal, run git clone [SSH key here]
4. Run npm install 
5. Run npm start

## Installation Guide
### Setting up the Backend Server
1. Follow the setup instructions provided [here](https://github.com/turingschool-examples/fitlit-api) to clone down and start the backend server where the user data APIs are held.


### Setting up the Frontend Site
1. Fork this repository to your GitHub account.
2. Copy SSH key on GitHub inside the code dropdown.
3. Using the terminal, run git clone [SSH key here].
4. cd into the repository.
5. Open it in your text editor.
6. Run npm install 
7. Run npm start
8. Click the hyperlink where the project is running to launch the application in the web browser or enter http://localhost:8080/ into your web browser.


## Project Specification and Background
[Project Spec and Rubric Part One](https://frontend.turing.edu/projects/module-2/fitlit-part-one-agile.html)

[Project Spec and Rubric Part Two](https://frontend.turing.edu/projects/module-2/fitlit-part-two-agile.html)

This application was developed for the [Turing School of Software and Design's](https://frontend.turing.edu/) Module 2 group project. The project, [Fitlit](https://frontend.turing.edu/projects/module-2/fitlit-part-one-agile.html), was broken into two parts: 
- The first challenged teams to store, manipulate, and display users' fitness data, accessed from a series of APIs, using a test-driven development approach; 
- And the second asked teams to enable users to log new data to the relevant API; to improve the sites' accessibility using evaluation tools, the ARIA framework, and design principles; and to implement a unique extension feature. For this group, the feature selected was the ability for users to view the route of their latest run on a map, by using XML-formatted coordinate data hosted on an API.

## Features
The app presents users with a dashboard of their latest daily and all-time fitness metrics across three categories - activity, sleep, and hydration - and allows the user to:
1. Compare their statistics against benchmarks of all users
1. View dynamically-created infographics of their metrics over the past week.
1. View the location and route of their last logged run.
1. Log their water intake for a given date and view their updated all-time water consumption statistics.

## Contributors

- Houda Jawad - [GitHub](https://github.com/hjawad22) | [LinkedIn](https://www.linkedin.com/in/houda-jawad-b0315675/)

- John Featherstone - [GitHub](https://github.com/JWFeatherstone) | [LinkedIn](https://www.linkedin.com/in/john-w-featherstone/)

- Samantha McElhinney - [GitHub](https://github.com/SamanthaMcElhinney) | [LinkedIn](https://www.linkedin.com/in/samantha-mcelhinney-98134b170/)

- Adriane Sutherland - [GitHub](https://github.com/asutherland91) | [LinkedIn](https://www.linkedin.com/in/adrianesutherland/)

## Wins and Challanges

### Wins:
- Successfully implemented the fetch API to fetch data asynchronously.
- Utilized third-party libraries, such as chart.js, Leaflet, and date.js, to enhance the user interface.
- Utilized GitHub project boards to organize tasks, update designs, and receive feedback from team members.
- Achieved 100% accessibility for the application through a Lighthouse audit.
- Utilized test-driven development to ensure high code quality.
- Collaborated effectively with the team.
- Resolved merge conflicts efficiently.

### Challenges:
- Struggled to uniformly decide on a layout and design, but overcame this challenge through frequent communication, extensive planning and research, and ongoing updates to wireframes and project boards.
- Had difficulty understanding and implementing fetch calls.
- Faced a learning curve with both chart.js, and date.js third-party libraries, but successfully implemented methods to display user data.
- Interpreting XML coordinate data for users into readable data with third party library Leaflet.

