const userDiv = document.querySelector(".users");
const notFound = document.querySelector(".not-found");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     // console.log(users);
//     users.forEach(user => {
//       console.log(user);
//       userDiv.innerHTML += `
//        <div
//        href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
//         <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
//         </span>

//         <div class="sm:flex sm:justify-between sm:gap-4">
//          <div>
//           <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
//            ${user.name}
//           </h3>
//           <p class="mt-1 text-xs font-medium text-gray-600">By${user.username}</p>
//          </div>
//         </div>

//         <div class="mt-4">
//          <p class="text-sm text-pretty text-gray-500">
//          ${user.email}
//          </p>
//         </div>
//        </div>
//      `;
//     });
//   });

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => displayUsers(users));
}

function displayUsers(users = []) {
  if (users.length > 0) {
    notFound.innerHTML = "";
    users.forEach(user => {
      console.log(user);
      userDiv.innerHTML += `
    <div
    href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
     <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
     </span>

     <div class="sm:flex sm:justify-between sm:gap-4">
      <div>
       <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
        ${user.name}
       </h3>
       <p class="mt-1 text-xs font-medium text-gray-600">By${user.username}</p>
      </div>
     </div>

     <div class="mt-4">
      <p class="text-sm text-pretty text-gray-500">
      ${user.email}
      </p>
     </div>
    </div>
     `;
    });
  } else {
    notFound.innerHTML = "<h2 class='text-center'>No Users Found</h2>";
  }
}

// displayUsers();
// fetchUsers();

function fetchAlbums() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(photos => showImages(photos));
}

function showImages(photos) {
  if (photos.length > 0) {
    photos.slice(0, 10).forEach(photo => {
      blogs.innerHTML += `
          <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <img
          alt=""
          src=${photo.url}
          class="h-56 w-full object-cover"
        />

        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>

          <a href="#">
            <h3 class="mt-0.5 text-lg text-gray-900">${photo.title}</h3>
          </a>
        </div>
      </article>
    `;
    });
  } else {
    notFound.innerHTML = "<h2 class='text-center'>No Images Found</h2>";
  }
}
fetchAlbums();

// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 4));

// const addition = (a, b) => {
//  const value = 20;
//  return a + b + value;
// };
console.log(addition(1, 3));
