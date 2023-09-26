const server = require("./server.js");

// Leave the port to 3000 - fly.io default standard
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
