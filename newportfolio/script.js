const heroHeading = document.querySelectorAll("#hero h1, #hero h2, #hero h3");

function typeWriter(element) {
  const text = element.textContent;
  element.textContent = ""; // Clear the existing text content
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50); // Adjust the typing speed (in milliseconds) as needed
    }
  }

  type();
}

heroHeading.forEach((heading) => {
  typeWriter(heading);
});

const mediaQuery = window.matchMedia("(min-width: 769px)");

// Check if the media query matches on page load
if (mediaQuery.matches) {
  const svg = document.getElementById("blog");
  const svgLink = document.getElementById("blogsvg");

  svg.addEventListener("mouseover", svgF);
  svg.addEventListener("mouseout", svgN);

  function svgF() {
    svgLink.style.display = "block";
  }

  function svgN() {
    svgLink.style.display = "none";
  }

  // for item

  // Get the buttons and corresponding content elements
  const siteBtn = document.getElementById("site-btn");
  const gameBtn = document.getElementById("game-btn");
  const appBtn = document.getElementById("app-btn");

  const siteLine = document.querySelector("#con-lang1 .line");
  const gameLine = document.querySelector("#con-lang2 .empt");
  const appLine = document.querySelector("#con-lang3 .empt");

  const siteContent = document.getElementById("con-site");
  const gameContent = document.getElementById("con-game");
  const appContent = document.getElementById("con-app");

  // Add event listeners to the buttons
  siteBtn.addEventListener("click", showSiteContent);
  gameBtn.addEventListener("click", showGameContent);
  appBtn.addEventListener("click", showAppContent);

  // Function to show the site content and hide the game and app content
  function showSiteContent() {
    siteLine.classList.add("line");
    gameLine.classList.remove("line");
    appLine.classList.remove("line");

    siteContent.style.display = "grid";
    gameContent.style.display = "none";
    appContent.style.display = "none";
  }

  // Function to show the game content and hide the site and app content
  function showGameContent() {
    siteLine.classList.remove("line");
    gameLine.classList.add("line");
    appLine.classList.remove("line");

    siteContent.style.display = "none";
    gameContent.style.display = "grid";
    appContent.style.display = "none";
  }

  // Function to show the app content and hide the site and game content
  function showAppContent() {
    siteLine.classList.remove("line");
    gameLine.classList.remove("line");
    appLine.classList.add("line");

    siteContent.style.display = "none";
    gameContent.style.display = "none";
    appContent.style.display = "grid";
  }
} else {
  const openSvg = document.getElementById("openIcon");
  const closeSvg = document.getElementById("closeIcon");
  const asideElement = document.getElementById("asideEle");
  const hero = document.getElementById("hero");
  openSvg.addEventListener("click", openAside);
  closeSvg.addEventListener("click", closeAside);

  function openAside() {
    closeSvg.style.display = "block";
    asideElement.style.display = "grid";
    openSvg.style.display = "none";
    hero.style.display = "none";
  }
  function closeAside() {
    closeSvg.style.display = "none";
    asideElement.style.display = "none";
    openSvg.style.display = "block";
    hero.style.display = "block";
  }

  const heroHeading = document.querySelectorAll("#hero h1, #hero h2, #hero h3");

  function typeWriter(element) {
    const text = element.textContent;
    element.textContent = ""; // Clear the existing text content
    let index = 0;

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust the typing speed (in milliseconds) as needed
      }
    }

    type();
  }

  heroHeading.forEach((heading) => {
    typeWriter(heading);
  });

  // Get the buttons and corresponding content elements
  const siteBtn = document.getElementById("site-btn");
  const gameBtn = document.getElementById("game-btn");
  const appBtn = document.getElementById("app-btn");

  const siteLine = document.querySelector("#con-lang1 .line");
  const gameLine = document.querySelector("#con-lang2 .empt");
  const appLine = document.querySelector("#con-lang3 .empt");

  const siteContent = document.getElementById("con-site");
  const gameContent = document.getElementById("con-game");
  const appContent = document.getElementById("con-app");

  // Add event listeners to the buttons
  siteBtn.addEventListener("click", showSiteContent);
  gameBtn.addEventListener("click", showGameContent);
  appBtn.addEventListener("click", showAppContent);

  // Add touch events for mobile devices
  siteBtn.addEventListener("touchstart", showSiteContent);
  gameBtn.addEventListener("touchstart", showGameContent);
  appBtn.addEventListener("touchstart", showAppContent);

  // Function to show the site content and hide the game and app content
  function showSiteContent() {
    siteLine.classList.add("line");
    gameLine.classList.remove("line");
    appLine.classList.remove("line");

    siteContent.style.display = "flex";
    gameContent.style.display = "none";
    appContent.style.display = "none";
  }

  // Function to show the game content and hide the site and app content
  function showGameContent() {
    siteLine.classList.remove("line");
    gameLine.classList.add("line");
    appLine.classList.remove("line");

    siteContent.style.display = "none";
    gameContent.style.display = "flex";
    appContent.style.display = "none";
  }

  // Function to show the app content and hide the site and game content
  function showAppContent() {
    siteLine.classList.remove("line");
    gameLine.classList.remove("line");
    appLine.classList.add("line");

    siteContent.style.display = "none";
    gameContent.style.display = "none";
    appContent.style.display = "flex";
  }
}
// Function for removing and bringing back elements in tabs
const hideSiteEle = document.getElementById("siteele");
const hideSiteEle1 = document.getElementById("siteele1");
const hideSiteEle2 = document.getElementById("siteele2");
const hideSiteEle3 = document.getElementById("siteele3");
const hideSiteEle4 = document.getElementById("siteele4");
const hideSiteEle5 = document.getElementById("siteele5");
const hideSiteEle6 = document.getElementById("siteele6");
const hideSiteEle7 = document.getElementById("siteele7");
const hideSiteEle8 = document.getElementById("siteele8");

const siteeleTextcontent = document.getElementById("siteeletextcon");
const siteeleTextcontent1 = document.getElementById("siteeletextcon1");
const siteeleTextcontent2 = document.getElementById("siteeletextcon2");
const siteeleTextcontent3 = document.getElementById("siteeletextcon3");
const siteeleTextcontent4 = document.getElementById("siteeletextcon4");
const siteeleTextcontent5 = document.getElementById("siteeletextcon5");
const siteeleTextcontent6 = document.getElementById("siteeletextcon6");
const siteeleTextcontent7 = document.getElementById("siteeletextcon7");
const siteeleTextcontent8 = document.getElementById("siteeletextcon8");

hideSiteEle.addEventListener("mouseover", removeSiteEle);
hideSiteEle1.addEventListener("mouseover", removeSiteEle1);
hideSiteEle2.addEventListener("mouseover", removeSiteEle2);
hideSiteEle3.addEventListener("mouseover", removeSiteEle3);
hideSiteEle4.addEventListener("mouseover", removeSiteEle4);
hideSiteEle5.addEventListener("mouseover", removeSiteEle5);
hideSiteEle6.addEventListener("mouseover", removeSiteEle6);
hideSiteEle7.addEventListener("mouseover", removeSiteEle7);
hideSiteEle8.addEventListener("mouseover", removeSiteEle8);

function removeSiteEle() {
  hideSiteEle.classList.remove("siteelement");
  siteeleTextcontent.style.display = "block";
}

function removeSiteEle1() {
  hideSiteEle1.classList.remove("siteelement1");
  siteeleTextcontent1.style.display = "block";
}

function removeSiteEle2() {
  hideSiteEle2.classList.remove("siteelement2");
  siteeleTextcontent2.style.display = "block";
}

function removeSiteEle3() {
  hideSiteEle3.classList.remove("siteelement3");
  siteeleTextcontent3.style.display = "block";
}
function removeSiteEle4() {
  hideSiteEle4.classList.remove("siteelement4");
  siteeleTextcontent4.style.display = "block";
}
function removeSiteEle5() {
  hideSiteEle5.classList.remove("siteelement5");
  siteeleTextcontent5.style.display = "block";
}
function removeSiteEle6() {
  hideSiteEle6.classList.remove("siteelement6");
  siteeleTextcontent6.style.display = "block";
}
function removeSiteEle7() {
  hideSiteEle7.classList.remove("siteelement7");
  siteeleTextcontent7.style.display = "block";
}
function removeSiteEle8() {
  hideSiteEle8.classList.remove("siteelement8");
  siteeleTextcontent8.style.display = "block";
}
// Function to display elements
hideSiteEle.addEventListener("mouseout", displaySiteEle);
hideSiteEle1.addEventListener("mouseout", displaySiteEle1);
hideSiteEle2.addEventListener("mouseout", displaySiteEle2);
hideSiteEle3.addEventListener("mouseout", displaySiteEle3);
hideSiteEle4.addEventListener("mouseout", displaySiteEle4);
hideSiteEle5.addEventListener("mouseout", displaySiteEle5);
hideSiteEle6.addEventListener("mouseout", displaySiteEle6);
hideSiteEle7.addEventListener("mouseout", displaySiteEle7);
hideSiteEle8.addEventListener("mouseout", displaySiteEle8);

function displaySiteEle() {
  hideSiteEle.classList.add("siteelement");
  siteeleTextcontent.style.display = "none";
}

function displaySiteEle1() {
  hideSiteEle1.classList.add("siteelement1");
  siteeleTextcontent1.style.display = "none";
}

function displaySiteEle2() {
  hideSiteEle2.classList.add("siteelement2");
  siteeleTextcontent2.style.display = "none";
}
function displaySiteEle3() {
  hideSiteEle3.classList.add("siteelement3");
  siteeleTextcontent3.style.display = "none";
}
function displaySiteEle4() {
  hideSiteEle4.classList.add("siteelement4");
  siteeleTextcontent4.style.display = "none";
}
function displaySiteEle5() {
  hideSiteEle5.classList.add("siteelement5");
  siteeleTextcontent5.style.display = "none";
}
function displaySiteEle6() {
  hideSiteEle6.classList.add("siteelement6");
  siteeleTextcontent6.style.display = "none";
}
function displaySiteEle7() {
  hideSiteEle7.classList.add("siteelement7");
  siteeleTextcontent7.style.display = "none";
}
function displaySiteEle8() {
  hideSiteEle8.classList.add("siteelement8");
  siteeleTextcontent8.style.display = "none";
}

// for game

// Additional code for con-game and con-app
const hideGameEle = document.getElementById("gameele");
const hideGameEle1 = document.getElementById("gameele1");

const gameeleTextcontent = document.getElementById("gameeletextcon");
const gameeleTextcontent1 = document.getElementById("gameeletextcon1");

hideGameEle.addEventListener("mouseover", removeGameEle);
hideGameEle1.addEventListener("mouseover", removeGameEle1);

function removeGameEle() {
  hideGameEle.classList.remove("gameelement");
  gameeleTextcontent.style.display = "block";
}

function removeGameEle1() {
  hideGameEle1.classList.remove("gameelement1");
  gameeleTextcontent1.style.display = "block";
}

hideGameEle.addEventListener("mouseout", displayGameEle);
hideGameEle1.addEventListener("mouseout", displayGameEle1);

function displayGameEle() {
  hideGameEle.classList.add("gameelement");
  gameeleTextcontent.style.display = "none";
}

function displayGameEle1() {
  hideGameEle1.classList.add("gameelement1");
  gameeleTextcontent1.style.display = "none";
}

// Additional code for con-app
const hideAppEle = document.getElementById("appele");
const hideAppEle1 = document.getElementById("appele1");

const appeleTextcontent = document.getElementById("appeletextcon");
const appeleTextcontent1 = document.getElementById("appeletextcon1");

hideAppEle.addEventListener("mouseover", removeAppEle);
hideAppEle1.addEventListener("mouseover", removeAppEle1);

function removeAppEle() {
  hideAppEle.classList.remove("appelement");
  appeleTextcontent.style.display = "block";
}

function removeAppEle1() {
  hideAppEle1.classList.remove("appelement1");
  appeleTextcontent1.style.display = "block";
}

hideAppEle.addEventListener("mouseout", displayAppEle);
hideAppEle1.addEventListener("mouseout", displayAppEle1);

function displayAppEle() {
  hideAppEle.classList.add("appelement");
  appeleTextcontent.style.display = "none";
}

function displayAppEle1() {
  hideAppEle1.classList.add("appelement1");
  appeleTextcontent1.style.display = "none";
}

// socials js
const flinkedin = document.getElementById("flinkedin");
const linkedin = document.getElementById("linkedin");

flinkedin.addEventListener("mouseover", linkedinOver);
flinkedin.addEventListener("mouseout", linkedinOut);

function linkedinOver() {
  linkedin.style.fill = "#0a66c2"; // Change the color of the SVG icon
}

function linkedinOut() {
  linkedin.style.fill = ""; // Reset the color to its original state
}
//  for twitter

const ftwitter = document.getElementById("ftwitter");
const twitter = document.getElementById("twitter");

ftwitter.addEventListener("mouseover", TwitterOver);
ftwitter.addEventListener("mouseout", TwitterOut);

function TwitterOver() {
  twitter.style.fill = "#1d9bf0"; // Change the color of the SVG icon
}

function TwitterOut() {
  twitter.style.fill = ""; // Reset the color to its original state
}

// for insta

const finsta = document.getElementById("finsta");
const instagram = document.getElementById("instagram");

finsta.addEventListener("mouseover", instagramOver);
finsta.addEventListener("mouseout", instagramOut);

function instagramOver() {
  instagram.style.fill = "#ea455d"; // Change the color of the SVG icon
}

function instagramOut() {
  instagram.style.fill = ""; // Reset the color to its original state
}

// for email
const fmail = document.getElementById("fmail");
const email = document.getElementById("email");

fmail.addEventListener("mouseover", mailOver);
fmail.addEventListener("mouseout", mailOut);

function mailOver() {
  email.style.fill = "#ca2123"; // Change the color of the SVG icon
}

function mailOut() {
  email.style.fill = ""; // Reset the color to its original state
}
