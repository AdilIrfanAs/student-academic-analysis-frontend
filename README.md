# Student Academic Analysis App - Frontend 

This application facilitates the technical assessment of student academics. Teachers can input student feedbacks/records, view charts displaying subject averages, and leverage OpenAI's LLM AI model for insightful feedback.

# Features included are:

- A teacher can add a Student record/feedback from the home page (/).
- A teacher can view all Students records/feedbacks from the Student Records Page (/student-records).
- A teacher can see the student performance in percentage for each subject from the Subject Score Analysis Page (/subject-score).
- A teacher can see the AI generated some meaningful feedbacks of students by selecting a student from the Generate Student Analysis Page (/generate-analysis).

# Tech Stack Details

This project was bootstrapped with:
- Typescript
- ReactJS
- TailwindCSS

## Requirements

For development, you will need Node.js >= v16.x (recommended) and a node global package, NPM, installed in your environement.

### Node

Node.js is a JavaScript runtime for server-side programming. It allows developers to create scalable backend functionality using JavaScript, a language many are already familiar with from browser-based web development.

- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

There are multiple ways of installing node in ubuntu

- ##### Installing Node Using the Node Version Manager

It is recommended to install NodeJS using the Node Version Manager (nvm), because it allows to install and manage multiple versions on the same machine.

Installing nvm, the Node Version Manager, and using it to install and manage multiple versions of Node.js

(https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

- ##### Installing Node.js with Apt from the Default Repositories

You can install nodejs and npm easily with apt install, just run the following commands.

sudo apt update
sudo apt install nodejs
sudo apt install npm

- #### Other Operating Systems

You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command:

node --version

npm --version

- #### Check Node Version

Check version with this command, node -v
Node version should be v16 or v16+

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

npm install npm -g

## Install Packages

At the root directory of the application, run the following command to install packages:

npm install

## Configure app

Add .env file at root of the project. Sample values available in .env.example file.

## Running the project

Start running project with following command:

### `npm start`

## PORT

This app would run on port 3000

Runs the app in the development mode.\
Open [http://localhost:3000]

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!