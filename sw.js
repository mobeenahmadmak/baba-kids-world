// Increment CACHE with each release to trigger the in-app Update Now prompt.
const CACHE='baba-kids-app-v6-phase2-learning-20261118';
const PREFIX='baba-kids-app-';
const LEGACY='baba-kids-v4-1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
  // Remain waiting until Update Now is selected.
});
self.addEventListener('message',event=>{
  if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>(key.startsWith(PREFIX)||key===LEGACY)&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  const scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      // Keep the current version until the user accepts Update Now.
      const cached=(await caches.match(request))||(await caches.match('./index.html'));
      if(cached)return cached;
      try{
        const response=await fetch(request);
        if(response.ok){
          const cache=await caches.open(CACHE);
          await cache.put(request,response.clone()).catch(()=>{});
        }
        return response;
      }catch{
        return new Response('Offline: open Baba & Kids World once while online.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
    return;
  }
  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached)return cached;
    return fetch(request);
  })());
});
