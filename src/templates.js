const getPosts = require("./model/getPosts.js");

function home(content) {
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
      
      <form action="/search" method="GET">
          <button class="search" type="submit">
            <img src="images/search.svg" alt="Search Icon">
          </button>
      </form>
  </nav>
</header>
<main>
${content}
</main>
  </body>
  </html>
  `;
}

function displayPosts(posts) {
  return posts
    .map(
      (post) => `<img src="${post.picture}"> 
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
  return /*html*/ `
  <form action="/add" method="POST">
      <label for="username">Username:</label>
        <input 
          id="username"
          name="username"
          value="${values.username ? sanitize(values.username) : ""}">

      <br>
      <label for="picture">Picture URL:</label>
        <input 
          type="text" 
          id="picture" 
          name="picture"
          value="${values.picture ? sanitize(values.picture) : ""}">
          ${validation(errors.picture)}
      <br>

      <label for="content">Description:</label>
      <textarea
        id="content"
        name="content">${
          values.content ? sanitize(values.content) : ""
        }</textarea>
        ${validation(errors.content)}
      <br>

      <label for="location">Location:</label>
      <textarea
        id="location"
        name="location">${
          values.location ? sanitize(values.location) : ""
        }</textarea>
        ${validation(errors.location)}
        <button type="submit">Submit</button>
    </form>
  `;
}

function searchForm(errors = {}, values = {}) {
  return /*html*/ `
  <form action="/search" method="POST">
  <label for="query">Search:</label>
  <input 
    id="query"
    name="query"
    value="${values.query ? sanitize(values.query) : ""}">
    ${validation(errors.query)}
    <button type="submit">Submit</button>
  </form>
  `;
}

function sanitize(unsafe) {
  return unsafe.replace(/</g, "&lt;");
}

function validation(message) {
  if (message) {
    return /*html*/ `<span style="color: red">${message}</span>`;
  } else {
    return "";
  }
}
module.exports = {
  home,
  submissionForm,
  searchForm,
  displayPosts,
};
