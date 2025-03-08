const usersDiv = document.querySelector(".users");

function randomUser() {
  fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(user => {
      console.log(user.results[0]);
      const person = user.results[0];
      usersDiv.innerHTML = `<article class="overflow-hidden rounded-lg     shadow-sm transition hover:shadow-lg">
            <img
              alt=""
              src=${person.picture.large}
              class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-gray-900">${person.name.title} ${person.name.first}</h3>
                <h3 class="mt-0.5 text-lg text-gray-900">${person.gender}</h3>
                <h3 class="mt-0.5 text-lg text-gray-900">${person.phone}</h3>
                <h3 class="mt-0.5 text-lg text-gray-900">${person.nat}</h3>
                <h3 class="mt-0.5 text-lg text-gray-900">${person.email}</h3>
              </a>
            </div>
          </article>`;
    });
}
const btn = document.getElementById("generate");
btn.addEventListener("click", randomUser);
