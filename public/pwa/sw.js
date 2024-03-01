// This is for fetching data and storing it in cache. if NetworkFirst = download every time 
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  ({ request }) => {
    const destination = request.destination === 'image'
      || destination === 'document' || destination === 'style';
  },
    new workbox.strategies.CacheFirst()
);