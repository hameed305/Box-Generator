let box_container = document.querySelector("#box_container");
let box_generate = document.querySelector("#box_generate");

const options = {
  method: 'POST',
  headers: { 'Content-Type': '<content-type>', 'x-freepik-api-key': '<FPSX748fe83d8d0945f4a38f631e9e651876>' },
  body: '{"prompt":"<string>","resolution":"2k","aspect_ratio":"square_1_1","realism":true,"creative_detailing":33,"engine":"automatic","fixed_generation":false,"webhook_url":"https://httpbin.org/post","filter_nsfw":true,"styling":{"styles":[{"name":"<string>","strength":100}],"characters":[{"id":"<string>","strength":100}]}}'
};

fetch('https://api.freepik.com/v1/ai/mystic', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


let img_arr = [
  "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869165.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869159.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869123.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611777.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869145.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303050.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869161.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869139.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/premium-psd/3d-illustration-with-online-avatar_23-2151303107.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303063.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid",
  "https://img.freepik.com/premium-psd/3d-illustration-with-online-avatar_23-2151303078.jpg?ga=GA1.1.885243126.1732395768&semt=ais_hybrid"
]

let user_names = [];
let cities = []
let comment = []

//fetching user data  

async function users() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await response.json()
    user_names = json.map((user) => {
      return user.name
    })
    cities = await json.map((obj) => {
      return obj.address.city
    })

  } catch (err) {
    console.log(err);
  }
}
users();


// fetching the comment/description 
async function comments() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const json = await response.json()
    comment = json.map((obj) => {
      return obj.body
    })
    return comment
  } catch (err) {
    console.log(err);
  }
}

comments()

box_generate.addEventListener("click", function () {

  let Number_box = document.querySelector(".number_box")
  Number_box.innerHTML = Array.from(box_container.children).length

  let random_name = user_names[Math.floor(Math.random() * user_names.length)];

  let random_img = img_arr[Math.floor(Math.random() * img_arr.length - 1)];

  let random_city = cities[Math.floor(Math.random() * cities.length - 1)];

  let random_comment = comment[Math.floor(Math.random() * comment.length - 1)];


  box_container.insertAdjacentHTML("afterbegin", `
    <div
        class="flex flex-col items-center justify-start gap-2 p-2 bg-white bg-opacity-40 border border-white backdrop-blur-lg rounded-lg w-80 min-h-80 hover:bg-opacity-80"
      >
        <img
          src="${random_img}"
          alt="check your internet connection"
          class="rounded-full size-[150px]"
        />
        <h1 class="text-slate-400 text-center text-2xl font-bold">
          ${random_name}
        </h1>
        <div class="flex items-start justify-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            class="bi bi-geo-alt-fill mt-1"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
            />
          </svg>
          <span class="text-slate-500">${random_city}</span>
        </div>
        <div class="flex items-center justify-center gap-2 w-full mt-4">
          <input
            type="button"
            value="Follow"
            class="bg-slate-200 rounded-full px-3 py-2 text-slate-800"
          />
          <input
            type="button"
            value="Message"
            class="bg-slate-200 rounded-full px-3 py-2 text-slate-800"
          />
        </div>
        <p class="text-slate-900 text-center">
          ${random_comment}
        </p>
      </div>
    `)
});


let generates = document.querySelector("#generates");

generates.addEventListener("click", function () {
  let input = document.querySelector("#input").value
  let card_num = Number.parseInt(input)
  for (let i = 0; i < card_num; i++) {
    box_generate.click()
  }
});

