let cacheData ="appV1";

self.addEventListener('install', (event) => {
    console.log('Service worker installing...');
    
  });
   
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    

    if(!navigator.onLine)
      {
        event.respondWith(
          caches.match(event.request).then((response) => {
            // Serve the cached response if available, or fetch it from the network
            return response || fetch(event.request);
          })
        );
      }
   
  });