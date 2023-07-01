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

  const hire = document.getElementById("con-hire");
  let hireArray = document.getElementById("circle-container");
  const hireText = document.getElementById("hire");
  hire.addEventListener("mouseover", hireArrayDisplay);
  hire.addEventListener("mouseout", hireArrayHide);

  function hireArrayDisplay() {
    hireArray.style.display = "block";
    let con = document.getElementById("con-hire");
    con.style.display = "flex";
    con.style.listStyle = "none";
    hireText.style.backgroundColor = "#19228f";
  }

  function hireArrayHide() {
    hireArray.style.display = "none";
    hireText.style.backgroundColor = "#0f20e7";
  }

  // Toggle background color of #hire every 30 milliseconds
  setInterval(function () {
    hireText.style.backgroundColor =
      hireText.style.backgroundColor === "rgb(25, 34, 143)"
        ? "rgb(15, 32, 231)"
        : "rgb(25, 34, 143)";
  }, 3000);

  // darkMode starts here
  const darkBody = document.body;
  const darkMode = document.querySelectorAll("h3, h2, h1");
  const darkModeBtn = document.getElementById("dark");
  const lightBtn = document.getElementById("light");

  darkModeBtn.addEventListener("click", triggerDarkMode);
  lightBtn.addEventListener("click", triggerLightMode);

  function triggerDarkMode() {
    darkMode.forEach((element) => {
      element.style.color = "#f5deb3";
    });

    darkBody.style.backgroundColor = "#363a3b";
    darkModeBtn.style.display = "none";
  }

  function triggerLightMode() {
    darkMode.forEach((element) => {
      element.style.color = ""; // Reset the color to the default value
    });

    darkBody.style.backgroundColor = ""; // Reset the background color to the default value
    darkModeBtn.style.display = ""; // Reset the display style to the default value
  }
} else {
  const openSvg = document.getElementById("openIcon");
  const closeSvg = document.getElementById("closeIcon");
  const asideElement = document.getElementById("asideEle");
  // variables for hire
  const openHire = document.getElementById("hire");
  const closeHireD = document.getElementById("closeHire");
  const hireElement = document.getElementById("circle-container");

  openSvg.addEventListener("click", openAside);
  closeSvg.addEventListener("click", closeAside);

  // listeners for hire
  openHire.addEventListener("click", displayHire);
  closeHireD.addEventListener("click", closeHireDisplay);

  function openAside() {
    closeSvg.style.display = "block";
    asideElement.style.display = "grid";
    openSvg.style.display = "none";
  }
  function closeAside() {
    closeSvg.style.display = "none";
    asideElement.style.display = "none";
    openSvg.style.display = "block";
  }

  // functions for hire
  function displayHire() {
    hireElement.style.display = "flex";
    openHire.style.backgroundColor = "#19228f";
  }
  function closeHireDisplay() {
    hireElement.style.display = "none";
    openHire.style.backgroundColor = "#0f20e7";
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

  // Toggle background color of #hire every 30 milliseconds
  setInterval(function () {
    openHire.style.backgroundColor =
      openHire.style.backgroundColor === "rgb(25, 34, 143)"
        ? "rgb(15, 32, 231)"
        : "rgb(25, 34, 143)";
  }, 3000);

  // darkMode starts here
  const darkBody = document.body;
  const darkMode = document.querySelectorAll("h3, h2, h1");
  const darkModeBtn = document.getElementById("darks");
  const lightBtn = document.getElementById("lights");
  const aside = document.getElementById("oandc");
  darkModeBtn.addEventListener("click", triggerDarkMode);
  lightBtn.addEventListener("click", triggerLightMode);

  function triggerDarkMode() {
    darkMode.forEach((element) => {
      element.style.color = "#f5deb3";
    });

    darkBody.style.backgroundColor = "#363a3b";
    darkModeBtn.style.display = "none";
    aside.style.color = " #e7eeef";
  }

  function triggerLightMode() {
    darkMode.forEach((element) => {
      element.style.color = ""; // Reset the color to the default value
    });

    darkBody.style.backgroundColor = ""; // Reset the background color to the default value
    darkModeBtn.style.display = ""; // Reset the display style to the default value
    aside.style.color = "";
  }
}
