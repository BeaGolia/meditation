# Meditation Timer App

![image](https://github.com/user-attachments/assets/4f1efd26-907c-42d0-a574-d2e41009bace)

## Overview
The Meditation Timer App is a simple and user-friendly application designed to help users meditate by setting a programmable timer. 
It allows the user to start, pause, and reset a countdown timer, modify the time using a counter or manual input, and includes references to meditation with text and images. 
The design is responsive and intuitive, making it easy to use across devices.

## Features
- Custom Timer: Users can set the timer in minutes using + and - buttons or by typing the value manually.
- Start/Pause/Reset Timer: Start, pause, and reset the timer at any moment.
- Default Timer: Automatically sets the timer to 30 minutes on reset.
- Error Handling: Displays an error if the user tries to start the timer without entering at least one minute.
- Responsive Design: Works well across desktops, tablets, and mobile devices.
-  Hooks and Context API: The app uses modern React features such as hooks and context for state management.

## Technologies
- React: Core library for building the UI.
- React Router: For page navigation.
- Axios: For making API requests.
- React Hooks: For managing the state and side effects.
- Context API: To handle global state across components.
- CSS: For responsive styling.

## Installation
Follow these steps to set up and run the project on your local machine.

### Prerequisites
Ensure you have the following software installed:

- Node.js: Install Node.js
- npm or yarn: npm is installed with Node.js by default. Yarn is an alternative package manager.

### Steps
Clone the Repository:

```git clone https://github.com/yourusername/meditation-timer-app.git```

Navigate to the Project Directory:

```cd meditation-timer-app```

Install Dependencies:

- Using npm: ```npm install```

- Or using yarn: ```yarn install```

Start the Application:

- Using npm: ```npm start```

- Or using yarn: ```yarn start```

The application should now be running on ```http://localhost:3000```.

## Main Files:
- App.js: The root component of the application.
- TimerContext.js: Handles the global timer state using Context API.
- Timer.jsx: The main timer component where the timer UI and controls are located.
- index.js: The entry point of the app, where React renders the root component.

## Usage:
- Setting the Timer:

You can modify the timer by typing the desired number of minutes in the input field or using the + and - buttons to increment/decrement the time.

- Starting the Timer:

Click the "Start" button to begin the countdown.

- Pausing the Timer:

You can pause the timer at any time by clicking the "Pause" button.

- Resetting the Timer:

Click the "Reset" button to set the timer back to 30 minutes.

- Error Handling:

If you try to start the timer without setting at least one minute, an error message will appear prompting you to enter a valid time.

## Acknowledgments
Credits and thanks to [mindful](https://www.mindful.org/) for the inspiration.

Project Link: https://beagolia.github.io/meditation/

