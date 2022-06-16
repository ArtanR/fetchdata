document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUser);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("submit", addPost);

function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").textContent = data;
    })
    .catch((err) => console.log("error"));
}

function getUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach((user) => {
        output += `
         <div class="testclass">
        <ul >
            <li><a href="http://127.0.0.1:5500/posts.html?userId=${user.id}">${user.name}</a></li>
            <li>${user.username}</li>
            <li>${user.email}</li>
            
        </ul>
        </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach((post) => {
        output += `
        <div class="card m-3 p-3 bg-dark  ">
            <h2 class="text-primary">${post.userId}</h2>
            <h3 class="text-warning">${post.title}</h3>
            <p class="text-warning">${post.body}</p>
            
        </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
