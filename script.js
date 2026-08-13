// Put the real destinations here when you have them.
const LINKS = {
  inform: "#",
  learn: "#",
  whatsapp: "#",
  email: ""
};

document.getElementById("informButton").href = LINKS.inform;
document.getElementById("learnButton").href = LINKS.learn;
document.querySelector(".whatsapp-icon").href = LINKS.whatsapp;
document.querySelector(".email-icon").href = LINKS.email || "mailto:";

// Prevent placeholder links from jumping to the top of the page.
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
