const getPosts = require("./model/getPosts.js")

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
      <form action="/add" method="POST">
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
module.exports = { home };
