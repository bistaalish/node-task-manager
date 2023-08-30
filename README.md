# Task Manager Node.js Project

This is a Node.js project that implements a task manager, allowing users to perform CRUD (Create, Read, Update, Delete) operations on tasks' names and completion status.

## Hosted
Check this program
[Timestamp](https://task-manager-node-bag4.onrender.com)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
## Prerequisites

Before you begin, ensure you have the following:

- Node.js installed
- MongoDB instance with a connection URI (MONGO_URI)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

2. Install the dependencies:

```bash
npm install
```

3. Set up your environment variables:

Create a .env file in the project root and add your MongoDB connection URI:

```env
MONGO_URI=mongodb://username:password@your-mongodb-url
PORT=3000
```

## Usage
1. Start the server:

```bash
npm start
```
2. Open your web browser or use API tools like POSTman and navigate to
[http://localhost:3000](http://127.0.0.1:3000)

3. Perform CRUD operations using the available endpoints:
   - **Create a Task:**
   
     - Method: POST
     - Endpoint: `/tasks`
     - Payload: `{ "name": "Task Name", "completed": false }`

   - **Read All Tasks:**
   
     - Method: GET
     - Endpoint: `/tasks`

   - **Read a Specific Task:**
   
     - Method: GET
     - Endpoint: `/tasks/:id`

   - **Update a Task:**
   
     - Method: PATCH
     - Endpoint: `/tasks/:id`
     - Payload: `{ "name": "Updated Task Name", "completed": true }`

   - **Delete a Task:**
   
     - Method: DELETE
     - Endpoint: `/tasks/:id`

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request with a clear explain of your changes

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to contact me at 
bistace321@gmail.com.

## Acknowledgments

I'd like to acknowledge the following libraries and resources that were used in building this project:

- Express.js
- MongoDB
- dotenv
- etc.