# Meditation Timer App

![image](https://github.com/user-attachments/assets/49a2930c-465c-49fa-8b45-56095c42fa8b)


## Overview
Meditation is a simple and user-friendly application designed to help users meditate by setting a programmable timer. 
It allows the user to start, pause, and reset a countdown timer, modify the time using a counter or manual input, and includes references to meditation with text and quotes. 
The design is responsive and intuitive, making it easy to use across devices.

## Features
- **Customizable Timer**: Users can set their meditation timer to a specific number of minutes.
- **Pause/Resume Functionality**: The timer can be paused and resumed at any time.
- **Error Handling**: If the timer is set to 0 minutes, an error message prompts the user to enter at least 1 minute.
- **Responsive Design**: The application is fully responsive and adapts to different screen sizes.
- **Meditation Resources**: The app displays additional resources for meditation (texts, quotes, etc.).
- **Helmet Integration**: Used for dynamic document head management (titles, metadata).

## Technologies
- **React**: Front-end framework for building user interfaces.
- **React Hooks**: Used for state management.
- **React Router**: Enables navigation between pages.
- **SCSS**: For styling components more efficiently.
- **React Context API**: To manage the timer's global state.
- **Axios**: For handling HTTP requests (if needed in the future for resources).
- **react-helmet**: For managing the document head and page titles.

## Installation
Follow these steps to set up and run the project on your local machine.

### Prerequisites
Ensure you have the following software installed:

- Node.js: Install Node.js
- npm or yarn: npm is installed with Node.js by default. Yarn is an alternative package manager.

### Steps
Clone the Repository:

```git clone https://github.com/yourusername/meditation.git```

Navigate to the Project Directory:

```cd meditation```

Install Dependencies:

- Using npm: ```npm install```

- Or using yarn: ```yarn install```

Start the Application:

- Using npm: ```npm start```

- Or using yarn: ```yarn start```

The application should now be running on ```http://localhost:3000```.

## Acknowledgments
Credits and thanks to [mindful](https://www.mindful.org/) for the inspiration.

Project Link: https://beagolia.github.io/meditation/

