# Simple Login Server

This is a simple login server built with Node.js and Express.js. It provides authentication functionality by allowing users to authenticate with their username and password.

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:aashishkarki11/login.git
    ```

2. Navigate into the project directory:

    ```bash
    cd login
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Access the login endpoint:

   Send a POST request to `http://localhost:3001/login` with JSON data containing `username` and `password` fields. For example:

    ```json
    {
        "username": "your-username",
        "password": "your-password"
    }
    ```

   Replace `your-username` and `your-password` with the actual username and password you want to authenticate.

## API Endpoints

- `/login`: POST request to authenticate users. Expects a JSON object with `username` and `password` fields.

