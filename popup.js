import { getActiveTabURL } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  console.log('loaded')

    const container = document.getElementsByClassName("container")[0];

    container.innerHTML = `<div class="title">${document.documentElement.outerHTML}We\'ve got your feed.</div>`;

});

