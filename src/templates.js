const getPosts = require("./model/getPosts.js");
const sanitizeHtml = require("sanitize-html");

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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;900&display=swap" rel="stylesheet">
  </head>
  <body>
  <header class="header">
  <div class="header-content">
  <div class="centre">
  <div class="title-container">
  <h1 class="title">natureBase</h1>
  <h2 class="slogan">london's picture book</h2>
  </div>
  </div>
    <nav>

      <form action="/add" method="GET">
          <button class="icon add" type="submit">
           <img src="images/plus.svg" alt="Add Icon">
          </button>
      </form>
      
      <form action="/" method="POST">
        <button class="icon search" type="submit">
          <img src="images/search.svg" alt="Search Icon">
        </button>
    </form>
  </nav>
  </div>
</header>
<main>
${displayPosts()}
</main>
  </body>
  </html>
  `;
}

function form() {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>natureBase</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;900&display=swap" rel="stylesheet">
  </head>
  <body>
  <header class="header">
  <div class="header-content">
  <div class="centre">
  <div class="title-container">
  <h1 class="title">natureBase</h1>
  <h2 class="slogan">london's picture book</h2>
  </div>
  </div>
    <nav>

      <form action="/add" method="GET">
          <button class="icon add" type="submit">
           <img src="images/plus.svg" alt="Add Icon">
          </button>
      </form>
      
      <form action="/" method="POST">
          <button class="icon search" type="submit">
            <img src="images/search.svg" alt="Search Icon">
          </button>
      </form>
  </nav>
  </div>
</header>
${submissionForm((errors = {}), (values = {}))}
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
      (post) => /*html*/ `
      
      <div class="posts">
            <img class="photo" src="${post.picture}"> 
            <div class="details">
            <p class="content">${post.content}</p>
          
              <p class="info">
                <span class="location">${post.location}</span>
                <span class="right">- ${post.username} <span class="date">${post.created_at}</span></span>
              </p>
              <form action="/like" method="POST">
          <input type="hidden" name="item_id" value="${post.id}">
          <button class="icon" type="submit">
            ${post.likes}
            <img src="images/leaf.svg" alt="Like Icon">
          </button>
        </form>
              
            </div>
            </div>
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
        value="${sanitizedUsername ? sanitizedUsername : ""}">
      <br>
      <label for="picture">Picture URL:</label>
      <input 
        type="text" 
        id="picture" 
        name="picture"
        value="${sanitizedPicture ? sanitizedPicture : ""}">
      ${validation(errors.picture)}
      <br>
      <label for="content">Description:</label>
      <textarea
        id="content"

        name="content">${sanitizedContent ? sanitizedContent : ""}</textarea>
      ${validation(errors.content)}
      <br>
      <label for="location">Location:</label>
      <textarea
        id="location"
        name="location">${sanitizedLocation ? sanitizedLocation : ""}</textarea>
      ${validation(errors.location)}
      <button type="submit">Submit</button>
    </form>
  `;
}

function sanitizeServerSide(unsafe) {
  const clean = sanitizeHtml(unsafe, {
    allowedTags: [], // Allow no HTML tags
    allowedAttributes: {}, // Allow no attributes
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
module.exports = { home, submissionForm, form };
