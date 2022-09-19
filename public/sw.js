const CACHE_NAME = 'weddingpage';
const URL_CACHE = ['offline.html', 'manisfest.json',];

//initialiser => "sparar"
this.addEventListener('install',(event => {
    event.waitUntil(caches.open(CACHE_NAME)
    .then((cache => {
        console.log('cache open')
        return cache.addAll(URL_CACHE)
    })) )
}))
//för att ta in information och ifall man inte kan hämta sidan, kan man ändå se tidigare hämtat informaiton
this.addEventListener('fetch',(event) => {
    event.respondWith(caches.match(event.request)
    .then(() => {
        return fetch(event.request)
        .catch(() => {
            console.log('offline');
            return caches.match('offline.html')
        })
    }))
})
//delite uppdate i cache listan
this.addEventListener('activate',(event => {
const cacheWhiteList = [];
cacheWhiteList.push(CACHE_NAME);
event.waitUntil(caches.keys()
.then((cacheNames) => {
    Promise.all(cacheNames.map((cacheName) => {
        if(!cacheWhiteList.includes(cacheName)){
            return caches.delete(cacheName)
        }
    }))
}))
}))

