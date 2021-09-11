
/*
 * Define Global Variables
 */
//nav bar elements
const ul = document.getElementById("navbar__list");
//last selected link
let lastLink = null;
//last selected section
let endSection = null;
/**
 * End Global Variables
 * Begin Main Functions
 */
// build the nav
// make an li lists
function makeNavList() {
  // make a fragment so we can append all sibilings inside the fragment
  const fragment = document.createDocumentFragment();
  const sectionsList = Object.values(document.getElementsByTagName("section"));
  for (const i of sectionsList) {
    const tLink = createNavLink(i);
    window.addEventListener("scroll", () => elementSelected(i, tLink));
    fragment.appendChild(tLink);
  }
  ul.appendChild(fragment);
}
// build tLinks
function createNavLink(section) {
  // create an li lists
  const li = document.createElement("li");
  //   create an a elements
  const anchor = document.createElement("a");
  //   give anchor tags a class
  anchor.className = "menu__link";
  anchor.innerText = section.dataset.nav;
  li.appendChild(anchor);
  li.addEventListener("click", () => goSection(section));
  return li;
}
/**
 * End Main Functions
 * Begin Events
 */
// Scroll to anchor section using scrollIntoView event
function goSection(section) {
  section.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
// Toggle active section and tLink function
function elementSelected(section, tLink) {
  // using pageoffset to get view of section
  if (
    window.scrollY >= section.offsetTop - window.innerHeight * 0.5 &&
    window.scrollY <=
    section.offsetTop + section.clientHeight - window.innerHeight * 0.5
  ) {
    if (lastLink != tLink) {
      // add active class by toggle 
      if (lastLink != null) {
        lastLink.getElementsByTagName("a")[0].classList.toggle("active");
        endSection.classList.toggle("your-active-class");
      }
      tLink.getElementsByTagName("a")[0].classList.toggle("active");
      section.classList.toggle("your-active-class");
      endSection = section;
      lastLink = tLink;
    }
  }
}
// Build menu
makeNavList();
