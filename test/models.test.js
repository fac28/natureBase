const test = require("node:test");
const assert = require("node:assert");
const db = require("../src/database/db");

const getPosts = require("../src/model/getPosts");
const addPost = require("../src/model/addPost");
const searchPosts = require("../src/model/searchPosts");

//Delete all tasks and reset ID counter

function reset() {
  db.exec(/*sql*/ `
      DELETE FROM posts;
      DELETE FROM sqlite_sequence WHERE name='posts'
      `);
}

test("can get all posts from the database", () => {
  const post = getPosts();
  assert.equal(post.length > 0, true);

  assert.equal(post[0].id, 1);
  assert.equal(post[0].username, "Nich");
  assert.equal(
    post[0].content,
    "Saw this and thought it was pretty. \r\nLondon at it’s best!"
  );
  assert.equal(post[0].location, "Finsbury Park");
  assert.equal(post[0].likes, 5);
});

test("can add a new post", () => {
  const dummyPost = {
    username: "Bob",
    content: "lala",
    location: "hackney",
    likes: 0,
  };
  addPost(dummyPost);
  const posts = getPosts();
  const newPost = posts.pop();
  assert.equal(newPost.username, "Bob");
  assert.equal(newPost.content, "lala");
  assert.equal(newPost.location, "hackney");
  assert.equal(newPost.likes, 0);
});

// test("can search the database for posts", () => {
//   const search = [1, 1, 1]; // Pass the search term three times
//   const result = searchPosts(search);
//   console.log(result);
// });
