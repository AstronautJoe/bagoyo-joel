# To setup this project run the following:#
//to set up the package.json
npm init -y
or
npm create 

// Setup parts
npm install express mongoose dotenv nodemon

// Start with app.js

// To start the server run
npm run dev

// if you forget the password using mongodbcompass goto clusters and copy connection string

// Actual Endpoints for managing the Todo items in the API
1) Create a new todo item:
    Endpoint: POST /todos

2) Retrieve all todo items:
    Endpoint: GET /todos

3) Retrieve a specific todo item:
    Endpoint: GET /todos/{id}

4) Update a specific todo item:
    Endpoint: PUT /todos/{id}

5) Delete a specific todo item:
    Endpoint: DELETE /todos/{id}

===========================================

cd demo
mkdir routes
mkdir controllers
mkdir models

Model =>