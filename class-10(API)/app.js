// function fetchApi() {
//  fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
//  // .then(json => console.log(json));
// }

// const data = [
//   {
//     id: 1,
//     username: "Jon",
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa quidem, rem consectetur eaque voluptates aspernatur voluptate eum aliquid eveniet totam iure officia molestiae doloremque quisquam facere asperiores numquam quas.`,
//   },
//   {
//     id: 2,
//     username: "Don",
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa quidem, rem consectetur eaque voluptates aspernatur voluptate eum aliquid eveniet totam iure officia molestiae doloremque quisquam facere asperiores numquam quas.`,
//   },
//   {
//     id: 3,
//     username: "Ron",
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa quidem, rem consectetur eaque voluptates aspernatur voluptate eum aliquid eveniet totam iure officia molestiae doloremque quisquam facere asperiores numquam quas.`,
//   },
// ];

function fetchApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      displayBlog(data);
    });
  // .then(json => console.log(json));
}

const blogsContainer = document.getElementById("blogs");

function displayBlog(posts) {
 posts.forEach(blog => {
    blogsContainer.innerHTML += `
  <div href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
   <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

   <div class="sm:flex sm:justify-between sm:gap-4">
    <div>
     <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
      ${blog.title}
     </h3>
     <p class="mt-1 text-xs font-medium text-gray-600">${blog.id}</p>
    </div>
   </div>

   <div class="mt-4">
    <p class="text-sm text-pretty text-gray-500">
     ${blog.body}
    </p>
   </div>
  </div>
  `;
  });
} // title r blog ta kotha theke aslo ??????????????????????

fetchApi();
// displayBlog(data);


// fetchApi();
