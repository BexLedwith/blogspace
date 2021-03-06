let postsArray = [];

const form = document.getElementById("new-post");
function renderPosts() {
  let blogPosts = "";
  for (let post of postsArray) {
    blogPosts += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>
        `;
  }
  document.getElementById("posts").innerHTML = blogPosts;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;

  const data = {
    title: postTitle,
    body: postBody,
  };
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts();

      form.reset();
    });
});

/**
Challenge:

- Send a request to add a new todo item
    - BaseURL: https://apis.scrimba.com/jsonplaceholder/
    - Endpoint: /todos
- Body object should contain a "title" property (string) 
  and a "completed" property (boolean)
- Don't add the .then() blocks yet - we have 1 more thing 
  to do before it'll work correctly

  Part 2 - add the .then blocks to check the data coming back

*/

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Buy Milk",
//     completed: false,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
