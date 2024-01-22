class LandingPage extends HTMLElement {
  constructor() {
    super();
    this.messages = this.getAttribute("messages");
    this.messages = this.messages.replace("Result of type ", "Berita ");
    this.messages = this.messages.replace("in CNN News", "");
    this.messages = this.messages.replace("news", "");
  }
  connectedCallback() {
    this.render();
  }

  render() {
    const [data_a, data_b, data_c, data_d, data_e, data_f] = JSON.parse(
      localStorage.getItem("landing-data")
    );

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

    this.innerHTML = `
    <div class="container mx-auto">
      <h4 class="text-xl font-bold tracking-tight text-gray-900 capitalize">
        ${this.messages}
      </h4>
      <div class="lg:grid pb-2 xl:grid md:grid lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-3 sm:grid-cols-1 sm:grid-rows-1 gap-2">
        <div class="col-span-2 row-span-2 mb-3 md:mb-0">
          <div class="relative min-h-full rounded-md overflow-hidden shadow-lg">
            <img class="w-full object-cover" src="${
              data_a.image.small
            }" alt="Card Image">    
            <div class="w-full absolute bottom-0 left-0 p-4 bg-gradient-to-b from-transparent to-indigo-900">
            <h4 class="bg-indigo-900 mb-3 text-xl font-semibold tracking-tight text-white line-clamp-1">  
              <a href="${data_a.link}" target="_self">
              ${data_a.title}
              </a>
            </h4>
            <p class="italic text-xs leading-normal text-gray-100">${formatDateIndonesia(
              data_a.isoDate
            )}</p>
            <p class="leading-normal text-gray-100 line-clamp-3">${
              data_a.contentSnippet
            }</p>
            </div>   
          </div>
        </div>
        <div class="col-start-3 mb-3 md:mb-0">
          <div class="relative min-h-full rounded-md overflow-hidden shadow-lg bg-white">
            <img class="w-full h-56 object-cover" src="${
              data_b.image.small
            }" alt="Card Image">
            <div class="absolute bottom-0 left-0 p-4 bg-gradient-to-b from-transparent to-indigo-900">
              <h4 class="bg-indigo-900 mb-3 text-xl font-semibold tracking-tight text-white line-clamp-1">
                <a href="${data_b.link}" target="_self">
                ${data_b.title}
                </a>
              </h4>
              <p class="italic text-xs leading-normal text-gray-100">${formatDateIndonesia(
                data_b.isoDate
              )}</p>
              <p class="leading-normal text-gray-100 line-clamp-3">${
                data_b.contentSnippet
              }</p>
            </div>   
          </div>
        </div>
        <div class="col-start-3 row-start-2 mb-3 md:mb-0">
          <div class="relative min-h-full rounded-md overflow-hidden shadow-lg bg-white">
            <img class="w-full h-56 object-cover" src="${
              data_c.image.small
            }" alt="Card Image">
            <div class="absolute bottom-0 left-0 p-4 bg-gradient-to-b from-transparent to-indigo-900">
              <h4 class="bg-indigo-900 mb-3 text-xl font-semibold tracking-tight text-white line-clamp-1">
                <a href="${data_c.link}" target="_self">
                ${data_c.title}
                </a>
              </h4>
            <p class="italic text-xs leading-normal text-gray-100">${formatDateIndonesia(
              data_c.isoDate
            )}</p>
              <p class="leading-normal text-gray-100 line-clamp-3">${
                data_c.contentSnippet
              }</p>
            </div>   
          </div>
        </div> 
        <div class="row-start-3 mb-3 md:mb-0">
          <div class="relative min-h-full rounded-md overflow-hidden shadow-lg bg-white">
          <img class="w-full h-24 object-cover" src="${
            data_d.image.small
          }" alt="Card Image">
          <div class="px-4 py-2">
            <div class="font-bold mb-2">
              <a href="${data_d.link}" target="_self">
              ${data_d.title}
              </a>
            </div>
            <p class="italic text-xs leading-normal">${formatDateIndonesia(
              data_d.isoDate
            )}</p>
            <p class="text-gray-700 line-clamp-2">
            ${data_d.contentSnippet}
            </p>
          </div> 
        </div>
        </div> 
        <div class="col-start-3 row-start-3 mb-3 md:mb-0">
          <div class="relative min-h-full rounded-md overflow-hidden shadow-lg bg-white">
            <img class="w-full h-24 object-cover" src="${
              data_e.image.small
            }" alt="Card Image">
            <div class="px-4 py-2">
              <div class="font-bold mb-2">
                <a href="${data_e.link}" target="_self">
                ${data_e.title}
                </a>
              </div>
            <p class="italic text-xs leading-normal">${formatDateIndonesia(
              data_e.isoDate
            )}</p>
              <p class="text-gray-700 line-clamp-2">
              ${data_e.contentSnippet}
              </p>
            </div> 
          </div>
        </div>
        <div class="col-start-2 row-start-3 mb-3 md:mb-0">
          <div class="relative min-h-full rounded-md overflow-hidden shadow-lg bg-white">
            <img class="w-full h-24 object-cover" src="${
              data_f.image.small
            }" alt="Card Image">
            <div class="px-4 py-2">
              <div class="font-bold mb-2">
                <a href="${data_f.link}" target="_self">
                ${data_f.title}
                </a>
              
              </div>
              <p class="italic text-xs leading-normal">${formatDateIndonesia(
                data_f.isoDate
              )}</p>
              <p class="text-gray-700 line-clamp-2">
              ${data_f.contentSnippet}
              </p>
            </div> 
          </div>
        </div>
      </div> 
    </div>
     
    `;
  }
}

customElements.define("landing-page", LandingPage);
