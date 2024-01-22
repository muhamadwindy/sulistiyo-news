const axios = require("axios");

const baseUrl = "https://berita-indo-api.vercel.app/v1/cnn-news/";

const listNewsContainerElement = document.querySelector("#list-news-container");
const listNewsElement = document.querySelector("#list-news");
const main = () => {
  handleStyling();
  getAllNews("nasional");
  const buttons = document.querySelectorAll("a");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const menuCategory = button.getAttribute("menu-category");
      const buttonHamburger = document.querySelector("#button-hamburger");
      buttonHamburger.click();
      getAllNews(menuCategory);
    });
  });
};

const getAllNews = async (menuCategory) => {
  try {
    listNewsContainerElement.innerHTML = "<loading-page></loading-page>";
    let url = baseUrl + (menuCategory != "" ? menuCategory : "nasional");

    const response = await axios.get(url);
    const responseJson = response.data;
    listNewsContainerElement.innerHTML = "";
    if (!responseJson.status) {
      showResponseMessage(responseJson.status);
    } else {
      responseJson.results = responseJson.data.filter(
        (item) => item.image.small != null
      );
      renderNews(responseJson.messages, responseJson.results);
    }
  } catch (error) {
    showResponseMessage(error);
  }
};

const renderNews = (messages = messages ?? "", ListNews) => {
  listNewsElement.innerHTML = "";
  localStorage.setItem("landing-data", JSON.stringify(ListNews.slice(0, 6)));
  const otherData = ListNews.slice(6, 15);
  listNewsContainerElement.innerHTML += `<landing-page messages="${messages}"></landing-page>`;

  listNewsContainerElement.innerHTML += `
  <div class="text-center my-2"> 
    <p class="max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
    Berita Terkait
    </p>
  </div>
  `;
  listNewsContainerElement.append(listNewsElement);
  otherData.forEach((news) => {
    listNewsElement.innerHTML += `
    <a href="${news.link}" target="_blank">
      <div class="h-full lg:max-w-sm md:max-w-xs rounded overflow-hidden shadow-xl bg-white text-sm">
        <img
          class="w-full h-48 object-cover"
          src="${news.image.small ?? ""}"
          alt="Card Image" />
        <div class="px-4 py-2">
          <div class="font-bold mb-2 line-clamp-2">
            ${news.title}          
          </div>          
          <p class="italic text-xs leading-normal">${formatDateIndonesia(
            news.isoDate
          )}</p>
          <p class="text-gray-700 line-clamp-5">
            ${news.contentSnippet}
          </p>
        </div>
      </div>
    </a>
            `;
  });
};

const handleStyling = () => {
  const buttonHamburger = document.querySelector("#button-hamburger");
  const iconResponsive = document.querySelector("#icon-responsive");
  const ulMenu = document.querySelector("#ul-menu");
  buttonHamburger.addEventListener("click", () => {
    let openMenu = eval(localStorage.getItem("openMenu") ?? true);
    localStorage.setItem("openMenu", !openMenu);
    iconResponsive.setAttribute("name", openMenu ? "close" : "menu");
    ulMenu.classList.remove("top-20");
    ulMenu.classList.remove("top-[-490px]");
    ulMenu.classList.add(openMenu ? "top-20" : "top-[-490px]");
  });
};

const showResponseMessage = (message) => {
  alert(message);
};

const formatDateIndonesia = (date) => {
  return new Date(date)
    .toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "full",
    })
    .toLocaleString("id-ID", { dateStyle: "full", timeStyle: "full" })
    .replace("pukul", "")
    .replaceAll(".", ":")
    .replace("Waktu Indonesia Barat", "WIB");
};

export default main;
