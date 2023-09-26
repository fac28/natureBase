function home({ content }) {
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
            <img src="public/images/plus.svg" alt="Add Icon">
          </button>
      </form>
      
      <form action="/" method="POST">
          <button class="search" type="submit">
            <img src="public/images/search.svg" alt="Search Icon">
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

module.exports = { home };
