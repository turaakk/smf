import { getActiveTabURL } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  console.log('loaded')

    const container = document.getElementsByClassName("container")[0];

});

