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
      <form action="/add" method="POST">
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

function displayPosts() {
  return getPosts()
    .map(
      (post) => /*html*/ `<img class="photo" src="${post.picture}"> 
      <div class="details">
      <p class="content">${post.content}</p>
    
        <p class="info">
          <span class="location">${post.location}</span>
          <span class="right">- ${post.username} <span class="date">${post.created_at}</span></span>
        </p>
        <p>Likes: ${post.likes}</p>
        
      </div>

      
      `
    )
    .reverse()
    .join("");
}
module.exports = { home };
