// Import the express module
import express, { Request, Response } from 'express';

// Create an instance of the express application
const app = express();

// Define a route for the root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

// Set the server to listen on a specific port (e.g., 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});