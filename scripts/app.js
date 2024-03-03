// console.log("yahya");

const loadPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  //console.log(data.posts);

  const postContainer = document.getElementById("postContainer");

  data.posts.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("singlePost");
    div.innerHTML = `
    <div class="bg-[#F3F3F5] flex flex-row gap-6 p-10 rounded-2xl">
                <!-- avatar -->
                <div>
                  <div class="avatar online">
                    <div class="w-24 rounded-xl">
                      <img
                        src=${item.image}
                      />
                    </div>
                  </div>
                </div>
                <!-- details -->
                <div>
                  <div
                    class="flex gap-5 font-inter font-medium text-sm text-[#12132Dcc] mb-3"
                  >
                    <p># <span>${item.category}</span></p>
                    <p>Author: <span>${item.author.name}</span></p>
                  </div>
                  <div>
                    <h2 class="font-bold text-xl text-[#12132D] mb-4">
                      ${item.title}
                    </h2>
                    <p class="font-inter text-base text-[#12132D99] w-full">
                      ${item.description}
                    </p>
                  </div>
                  <div class="divider pt-5 pb-5"></div>
                  <div class="flex flex-row justify-between items-center">
                    <div
                      class="flex gap-6 font-inter text-base text-[#12132D99]"
                    >
                      <div class="flex gap-3">
                        <img src="./images/read.png" alt="" />
                        <p>${item.comment_count}</p>
                      </div>
                      <div class="flex gap-3">
                        <img src="./images/view.png" alt="" />
                        <p>${item.view_count}</p>
                      </div>
                      <div class="flex gap-3">
                        <img src="./images/time.png" alt="" />
                        <p><span>${item.posted_time}</span> min</p>
                      </div>
                    </div>
                    <div class="">
                      <button onclick="handleMarkAsReadBtn('${item.title}', ${item.view_count})">
                        <img src="./images/markRead.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    `;
    postContainer.appendChild(div);
  });

  //read count
};

const loadLatestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );

  const data = await response.json();
  //console.log(data);

  const latestPostContainer = document.getElementById("latestPostContainer");
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("singleLatestPost");
    div.innerHTML = `
    <div>
            <div class="card w-96 bg-base-100 border border-gray-300">
              <figure class="px-10 pt-10">
                <img
                  src=${item.cover_image}
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-body">
                <div class="flex gap-2 opacity-[60%] mb-3">
                  <img src="./images/calender.png" alt="" />
                  <p class="">${item.author.posted_date}</p>
                </div>
                <h2 class="card-title font-extrabold text-[#12132D]">
                  ${item.title}
                </h2>
                <p class="opacity-[60%]">
                  ${item.description}
                </p>
                <div class="flex gap-3 mt-4">
                  <div class="avatar placeholder">
                    <div
                      class="bg-neutral text-neutral-content rounded-full w-12"
                    >
                      <span>
                      <img src=${item.profile_image} alt="" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 class="font-bold">${item.author.name}</h5>
                    <p class="opacity-[60%]">${item.author.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
    latestPostContainer.appendChild(div);
  });
};

const handleMarkAsReadBtn = (itemDescription, itemViewCount) => {
  //console.log(des, view);

  //update counter
  const readCount = document.getElementById("read-count");
  const readCountText = readCount.innerText;
  const readCountTextValue = parseInt(readCountText);

  const updateValue = readCountTextValue + 1;
  readCount.innerText = updateValue;

  //set content

  const markReadContainer = document.getElementById("markReadContainer");
  const div = document.createElement("div");
  div.classList.add("singleMarkRead");
  div.innerHTML = `
  <div class="flex justify-between bg-white p-4 rounded-xl">
                <p class="font-inter font-semibold text-base text-[#12132D]">
                  ${itemDescription}
                </p>
                <div class="flex gap-2">
                  <img src="./images/view.png" alt="" />
                  <p
                    class="font-inter font-semibold text-base text-[#12132D99]"
                  >
                    ${itemViewCount}
                  </p>
                </div>
              </div>
  `;

  markReadContainer.appendChild(div);
};

loadPost();

loadLatestPost();
