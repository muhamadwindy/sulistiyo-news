import logo from "../../images/logo_sulistiyo.png";

class HeaderApp extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    localStorage.removeItem("openMenu");
  }

  render() {
    let Links = [
      { category: "ekonomi", name: "Ekonomi" },
      { category: "olahraga", name: "Olahraga" },
      { category: "teknologi", name: "Teknologi" },
      { category: "hiburan", name: "Hiburan" },
      { category: "gaya-hidup", name: "Gaya Hidup" },
    ];

    const linkMenu = Links.map(
      (link) =>
        `<li class="md:ml-8 md:my-0 my-7">
            <a
              href="#"
              class="font-bold focus:text-purple-600 text-gray-800 hover:text-gray-400 duration-500" menu-category="${link.category}">
              ${link.name}
            </a>
         </li>`
    ).join("");

    this.innerHTML = ` 
    <div class="shadow-md w-full sticky top-0 left-0 z-50">
    <div class="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
      <div
        class="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
        <span class="text-3xl text-indigo-600 mr-1 pt-2">
          <img src=${logo} alt="Sulistiyo News" width="150px" />  
        </span
        > 
      </div>
      <div id="button-hamburger" class="absolute right-8 top-6 cursor-pointer md:hidden">
      <ion-icon id="icon-responsive" size="large" name="menu"></ion-icon>
      </div>
      <ul id="ul-menu"
        class="md:flex md:items-center md:pb-0 pb-12
         absolute md:static md:z-auto z-[-1] bg-white left-0 
         w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in top-[-490px]
         
         ">
         ${linkMenu}
         <a href="#"
          class="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
          menu-category="nasional"
          >
          Berita Nasional
        </a>
      </ul>
    </div>
  </div>
 
  
    `;
  }
}

customElements.define("header-app", HeaderApp);
