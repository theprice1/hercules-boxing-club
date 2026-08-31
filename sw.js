const CACHE_NAME = "hercules-cache-v1";
const ASSETS_TO_CACHE = [
  "/hercules-boxing-club/",
  "/hercules-boxing-club/index.html",
  "/hercules-boxing-club/about.html",
  "/hercules-boxing-club/timetable.html",
  "/hercules-boxing-club/news.html",
  "/hercules-boxing-club/fight-results.html",
  "/hercules-boxing-club/social.html",
  "/hercules-boxing-club/safeguarding.html",
  "/hercules-boxing-club/governance.html",
  "/hercules-boxing-club/contact.html",
  "/hercules-boxing-club/css/style.css",
  "/hercules-boxing-club/css/custom.css",
  "/hercules-boxing-club/js/main.js",
  "/hercules-boxing-club/logo.webp",
];

// Install Event: Cache all core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
  self.skipWaiting();
});

// Activate Event: Clear old cached versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// Fetch Event: Serve cached assets first, fall back to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // Fallback for offline navigation if needed
        })
      );
    }),
  );
});
