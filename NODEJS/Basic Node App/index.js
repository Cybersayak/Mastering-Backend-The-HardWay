const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set status code
    res.setHeader('Content-Type', 'text/plain'); // Set response header
    res.end('Hello, World!'); // Send response
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    // console.log(`Server running at http://localhost:${PORT}/`);
});

