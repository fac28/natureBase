const sanitizeHtml = require('sanitize-html')

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
          <button class="form__button-icon add" type="submit">
           <img src="images/plus.svg" alt="Add Icon">
          </button>
      </form>
      

      <form action="/search" method="GET">
        <button class="form__button-icon search" type="submit">
          <img src="images/search.svg" alt="Search Icon">
        </button>
      </form>
  </nav>
  </div>
</header>
<main>
${content}
</main>
  </body>
  </html>
  `
}

function form(posts) {
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
          <button class="form__button-icon add" type="submit">
           <img src="images/plus.svg" alt="Add Icon">
          </button>
      </form>
      

      <form action="/" method="GET">
          <button class="form__button-icon search" type="submit">

            <img src="images/search.svg" alt="Search Icon">
          </button>
      </form>
  </nav>
  </div>
</header>
${submissionForm()}

<main>
${displayPosts(posts)}
</main>
  </body>
  </html>
  `
}

function searchPage() {
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
          <button class="form__button-icon add" type="submit">
           <img src="images/plus.svg" alt="Add Icon">
          </button>
      </form>
      
      <form action="/search" method="GET">
          <button class="form__button-icon search" type="submit">
            <img src="images/search.svg" alt="Search Icon">
          </button>
      </form>
  </nav>
  </div>
</header>
${searchForm()}
<main>
</main>
  </body>
  </html>
  `
}

function displayPosts(posts) {
    return posts
        .map(
            (post) => /*html*/ `
      
      <div class="posts">
        <img class="photo" src="${post.picture}"> 
        <div class="details">
          <div class="flex">
            <p class="content">${post.content}</p>
            <p class="info">
            <span class="location">${post.location}</span>
            <span class="right">- ${
                post.username
            } <span class="date">${formatDate(post.created_at)}</span></span>
            </p>
        </div>
        <div class="flex">
          <form action="/like" method="POST">
            <input type="hidden" name="item_id" value="${post.id}">
            <button class="form__button-icon" type="submit">
            ${post.likes}
              <img src="images/leaf.svg" alt="Like Icon">
            </button>
          </form>
          <form action="/delete" method="POST">
            <input type="hidden" name="item_id" value="${post.id}">
            <button class="form__button-icon delete" type="submit">Delete</button>
          </form>
        </div>
      </div>
      `
        )
        .reverse()
        .join('')
}

function submissionForm(errors = {}, values = {}) {
    // Sanitize user input
    const sanitizedUsername = sanitizeServerSide(values.username)
    const sanitizedPicture = sanitizeServerSide(values.picture)
    const sanitizedContent = sanitizeServerSide(values.content)
    const sanitizedLocation = sanitizeServerSide(values.location)

    return /*html*/ `
  
  <form class="centre add-form" action="/add" method="POST">
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
    
  `
}

function searchForm(errors = {}, values = {}) {
    return /*html*/ `
  <form action="/search" method="POST">
  <label for="query">Search:</label>
  <input 
    id="query"
    name="query"
    value="${values.query ? sanitizeServerSide(values.query) : ''}">
    ${validation(errors.query)}
    <button type="submit">Submit</button>
  </form>
  `
}

function sanitizeServerSide(unsafe) {
    const clean = sanitizeHtml(unsafe, {
        allowedTags: [], // Allow no HTML tags
        allowedAttributes: {}, // Allow no attributes
    })
    return clean
}

function validation(message) {
    if (message) {
        return /*html*/ `<span style="color: red">${message}</span>`
    } else {
        return ''
    }
}

function formatDate(dateString) {
    // Check if the input string is already in the desired format
    const regex = /^[A-Za-z]{3} \d{1,2}(st|nd|rd|th), \d{4}$/
    if (regex.test(dateString)) {
        return dateString // Return the input string as is
    }

    const date = new Date(dateString)
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    const year = date.getFullYear()

    // Function to add ordinal suffix to day (e.g., 1st, 2nd, 3rd, 4th, etc.)
    const addOrdinalSuffix = (day) => {
        if (day >= 11 && day <= 13) {
            return day + 'th'
        } else {
            switch (day % 10) {
                case 1:
                    return day + 'st'
                case 2:
                    return day + 'nd'
                case 3:
                    return day + 'rd'
                default:
                    return day + 'th'
            }
        }
    }

    const formattedDate = `${month} ${addOrdinalSuffix(day)}, ${year}`
    return formattedDate
}

module.exports = { home, submissionForm, form, displayPosts, searchPage }
