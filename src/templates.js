const getPosts = require("./model/getPosts.js");
const sanitizeHtml = require('sanitize-html')

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

function submissionForm(errors = {}, values = {}) {
  // Sanitize user input
  const sanitizedUsername = sanitizeServerSide(values.username);
  const sanitizedPicture = sanitizeServerSide(values.picture);
  const sanitizedContent = sanitizeServerSide(values.content);
  const sanitizedLocation = sanitizeServerSide(values.location);

  return /*html*/ `
  <form action="/add" method="POST">
      <label for="username">Username:</label>
      <input 
        id="username"
        name="username"
        value="${sanitizedUsername ? sanitizedUsername : ''}">
      <br>
      <label for="picture">Picture URL:</label>
      <input 
        type="text" 
        id="picture" 
        name="picture"
        value="${sanitizedPicture ? sanitizedPicture : ''}">
      ${validation(errors.picture)}
      <br>
      <label for="content">Description:</label>
      <textarea
        id="content"
        name="content">${sanitizedContent ? sanitizedContent : ''}</textarea>
      ${validation(errors.content)}
      <br>
      <label for="location">Location:</label>
      <textarea
        id="location"
        name="location">${sanitizedLocation ? sanitizedLocation : ''}</textarea>
      ${validation(errors.location)}
      <button type="submit">Submit</button>
    </form>
  `;
}


function sanitizeServerSide(unsafe) {
  const clean = sanitizeHtml(unsafe, {
    allowedTags: [], // Allow no HTML tags
    allowedAttributes: {} // Allow no attributes
  });
  return clean;
}

function validation(message) {
  if (message) {
      return /*html*/ `<span style="color: red">${message}</span>`;
  } else {
      return "";
  }
}
module.exports = { home , submissionForm};
