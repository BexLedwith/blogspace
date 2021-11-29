fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);

    let blogPosts = "";
    for (let post of postsArr) {
      blogPosts += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>
        `;
    }
    document.getElementById("posts").innerHTML = blogPosts;
  });

/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/
document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;

  const data = {
    title: postTitle,
    body: postBody,
  };
  console.log(data);
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

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "Buy Milk",
    completed: false,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
