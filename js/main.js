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
      "hidden md:hidden absolute top-full left-0 w-full bg-black text-white p-6 flex flex-col space-y-4 border-t border-gray-800 shadow-xl z-50";
    mobileMenu.innerHTML = `
            <a href="index.html" class="hover:text-red-500 transition py-2 border-b border-gray-900">Home</a>
            <a href="about.html" class="hover:text-red-500 transition py-2 border-b border-gray-900">About the CIC</a>
            <a href="timetable.html" class="hover:text-red-500 transition py-2 border-b border-gray-900">Timetable</a>
            <a href="safeguarding.html" class="hover:text-red-500 transition py-2 border-b border-gray-900">Safeguarding</a>
            <a href="contact.html" class="hover:text-red-500 transition py-2">Contact</a>
        `;

    // Ensure nav is relative so absolute positioning works
    navContainer.parentElement.style.position = "relative";
    navContainer.parentElement.appendChild(mobileMenu);

    // Toggle visibility on click
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
