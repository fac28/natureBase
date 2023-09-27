const getPosts = require("./model/getPosts.js");

function home() {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>natureBase</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
  <header>
  <h1>natureBase</h1>
  <h2>london's picture book</h2>
    <nav>
      <form action="/add" method="GET">
          <button class="add" type="submit">
            <img src="images/plus.svg" alt="Add Icon">
          </button>
      </form>
      
      <form action="/" method="POST">
          <button class="search" type="submit">
            <img src="images/search.svg" alt="Search Icon">
          </button>
      </form>
  </nav>
</header>
<main>
${displayPosts()}
</main>
  </body>
  </html>
  `;
}

function displayPosts() {
  return getPosts()
    .map(
      (post) =>
        `<img src="${post.picture}"> 
      <p>${post.content}</p>
      <p>${post.username} </p>
      <p>${post.created_at}</p>
      <p>Location: ${post.location}</p>
      <p>Likes: ${post.likes}</p>
      `
    )
    .reverse()
    .join("");
}

function submissionForm() {
  return /*html*/ `
  <form action="/add" method="POST">
      <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

      <br>
      <label for="picture">Picture URL:</label>
        <input type="text" id="picture" name="picture" required>
      <br>

      <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
      <br>
        <button type="submit">Submit</button>
    </form>
  `;
}
module.exports = { home , submissionForm};
