document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(
    'button[aria-label="Open mobile menu"]',
  );

  // Create a mobile menu drawer dynamically if it doesn't exist
  const navContainer = document.querySelector("nav .container");

  if (navContainer && menuButton) {
    // Create mobile dropdown div
    const mobileMenu = document.createElement("div");
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

    // Ensure nav is relative so absolute positioning works smoothly on mobile
    navContainer.parentElement.style.position = "relative";
    navContainer.parentElement.appendChild(mobileMenu);

    // Toggle visibility on click
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking anywhere outside of it
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    });
  }
});
