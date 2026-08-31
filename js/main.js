document.addEventListener("DOMContentLoaded", () => {
  console.log("Hercules Nav Script Loaded");

  const navContainer = document.querySelector("nav .container");
  if (!navContainer) {
    console.warn("Nav container not found");
    return;
  }

  // Clean, standard selector that matches any navigation button or mobile toggle
  const menuButton =
    document.querySelector("nav button") ||
    document.querySelector(".md\\:hidden");
  if (!menuButton) {
    console.warn("Mobile menu button not found");
    return;
  }

  // Create mobile dropdown div if it doesn't exist
  let mobileMenu = document.getElementById("mobile-menu-drawer");
  if (!mobileMenu) {
    mobileMenu = document.createElement("div");
    mobileMenu.id = "mobile-menu-drawer";
    mobileMenu.className =
      "hidden md:hidden absolute top-full left-0 w-full bg-black/95 text-white p-6 flex flex-col space-y-4 border-t-2 border-purple-700 shadow-xl z-50 backdrop-blur-md";
    mobileMenu.innerHTML = `
        <a href="index.html" class="hover:text-purple-400 transition py-2 border-b border-gray-900">Home</a>
        <a href="about.html" class="hover:text-purple-400 transition py-2 border-b border-gray-900">About the CIC</a>
        <a href="timetable.html" class="hover:text-purple-400 transition py-2 border-b border-gray-900">Timetable</a>
        <a href="news.html" class="hover:text-purple-400 transition py-2 border-b border-gray-900">News</a>
        <a href="fight-results.html" class="hover:text-purple-400 transition py-2 border-b border-gray-900">Fight Results</a>
        <a href="social.html" class="hover:text-purple-400 transition py-2 border-b border-gray-900">Socials</a>
        <a href="safeguarding.html" class="hover:text-purple-400 transition py-2 border-b border-gray-900">Safeguarding</a>
        <a href="contact.html" class="hover:text-purple-400 transition py-2">Contact</a>
    `;

    navContainer.parentElement.style.position = "relative";
    navContainer.parentElement.appendChild(mobileMenu);
    console.log("Mobile menu drawer created and injected");
  }

  // Toggle visibility on click
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
    console.log("Mobile menu toggled");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });
});
