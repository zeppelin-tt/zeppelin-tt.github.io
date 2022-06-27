'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "32c49f7a0f847fcaf91178f77b076606",
"assets/assets/404.png": "d5d4c4f7776dd44f0c1393637fa1f1c6",
"assets/assets/en.png": "a1b445a50ccadfc7d8d7f53f33b21d6a",
"assets/assets/fr.png": "b24757f6642634fe46bd6bd5c24ef944",
"assets/assets/genrePreviews/etude/doroga_k_hramu_ovrag.webp": "28e909758bdc425e2c2466211ca135dd",
"assets/assets/genrePreviews/etude/iyulskii_vecher.webp": "44631f1a7c63a1941708b01102338f45",
"assets/assets/genrePreviews/etude/kamni_abhazia.webp": "1aaa1f4eaf4c183d9cb412997e48893a",
"assets/assets/genrePreviews/etude/kamni_chernoe_more.webp": "f9782bbce2b57c42adf789d1f542ecc4",
"assets/assets/genrePreviews/etude/misha.webp": "5b5f67cf7070b9ea03b0f24910d62a92",
"assets/assets/genrePreviews/etude/novyi_afon_kiparisi.webp": "b130f03a65a565754e21039fcfc02745",
"assets/assets/genrePreviews/etude/novyi_afon_vid_na_gori.webp": "0b33856c4bbae2dbd23825b62fb65bc0",
"assets/assets/genrePreviews/etude/okrestnosti_novogo_afona.webp": "3eb466c3bd7013ac6604d51ec54779c7",
"assets/assets/genrePreviews/etude/portret_starogo_evreya.webp": "be9624af493e4e8a7796a8f391a4b5ec",
"assets/assets/genrePreviews/etude/serbskii_hudojnik_shandor_slaif.webp": "94bd60dffb2a1cdc3e7a1e5e6c1c6db8",
"assets/assets/genrePreviews/landscape/bereg_krasivoi_mechi_v_selce_kurapovo.webp": "f678e34e9ade31b1bfb10a1811ffe091",
"assets/assets/genrePreviews/landscape/donskie_prostori.webp": "60a7070f1ad1f04bd827605bc6b9aea4",
"assets/assets/genrePreviews/landscape/groza_ushla.webp": "fa117ff79a72f2749acdf0081181305e",
"assets/assets/genrePreviews/landscape/izymrud.webp": "85e63c2f24549beb5162ec63af39e6e8",
"assets/assets/genrePreviews/landscape/jatva_struilas_ogidaya_serpa.webp": "bdd3a1ac75461867ede4e80c4a982155",
"assets/assets/genrePreviews/landscape/light_shades_of_february.webp": "b3ff3bd59b28365a41b3b13a71686c64",
"assets/assets/genrePreviews/landscape/mart.webp": "4f654db6b77e7c3edf6179f7f1ba588f",
"assets/assets/genrePreviews/landscape/u_pruda.webp": "eec7f136540b485ae0fc3a902e730956",
"assets/assets/genrePreviews/landscape/vesennayay_rasputica.webp": "3dbe6f855c24a0599e8328ee46931faf",
"assets/assets/genrePreviews/landscape/vesennee_utro.webp": "b5d2771143edb8cfa18391d2e0cbd05f",
"assets/assets/genrePreviews/landscape/vid_na_s_karamyshevo.webp": "f2e3d1ef5736dc6704c52ac017f6f9c2",
"assets/assets/genrePreviews/marina/chernoe_more.webp": "35d3aabd2567d38b2d149420fa66db82",
"assets/assets/genrePreviews/marina/kamni_storm.webp": "2cb53bd5fd1fa1da194de4256ea3ed81",
"assets/assets/genrePreviews/marina/more_storm.webp": "6c65a9a4ddec89ffd532f0e58223ed56",
"assets/assets/genrePreviews/marina/priboi.webp": "e0c10756292b87fa37672dfa45b56d17",
"assets/assets/genrePreviews/marina/storm.webp": "2265dcb430b2e88e493918810b12b675",
"assets/assets/genrePreviews/portrait/aglymova_g_a_s_synom_antonom.webp": "0d27bda68c403d1c91a12e888ef0e698",
"assets/assets/genrePreviews/portrait/eva.webp": "83c6e16c40f4c2f2d089ca52e55cff6b",
"assets/assets/genrePreviews/portrait/mashenka.webp": "a0620ecfeb5c874033c3604ca940f273",
"assets/assets/genrePreviews/portrait/naparilsya.webp": "ba58d4ae552e80e7d10b9252ee3f77c9",
"assets/assets/genrePreviews/portrait/patriarh1.webp": "e9a0e1b2594f45e63196bcfcdc26f848",
"assets/assets/genrePreviews/portrait/patriarh2.webp": "0ecd1d2599811a9e8954fd9c0f5c6015",
"assets/assets/genrePreviews/portrait/poet_i_prosaik_v_kan.webp": "c4595818fa24300b27f0d4bf7314927b",
"assets/assets/genrePreviews/portrait/portret_tereshkinoi.webp": "0371b586e11f5587196993de55197cfe",
"assets/assets/genrePreviews/portrait/vozvraschenie_s_venskogo_bala.webp": "bfacdcfeb5d9cc226fca0f7f7d583fdc",
"assets/assets/genrePreviews/preview/etude.webp": "49b19046b967ad738f63d5e11f9abe53",
"assets/assets/genrePreviews/preview/landscape.webp": "5b250f50fdb1a00362162b7deaf3494e",
"assets/assets/genrePreviews/preview/marina.webp": "fd35481246562c93b742a51ad086caa0",
"assets/assets/genrePreviews/preview/portrait.webp": "bdd83264eb0c552133ef44e8ce81d207",
"assets/assets/genrePreviews/preview/still_life.webp": "881ae306904e9210832f9c32f4b9d815",
"assets/assets/genrePreviews/preview/thematic.webp": "b694f10b7b53ee52fe74e7bf06969d2a",
"assets/assets/genrePreviews/stillLife/klubnika.webp": "cb25204957c3a35ed0d3a7bc7c2273f2",
"assets/assets/genrePreviews/stillLife/letnih_krasok_aromat.webp": "eb4c7a92ad7576b522edb19158ec9ffa",
"assets/assets/genrePreviews/stillLife/letnii_natyurmort.webp": "f70ffaef6b31a20521352f7f87ca9cf4",
"assets/assets/genrePreviews/stillLife/natyurmort_s_gribami.webp": "2bad1d0cb14ac65fdb33d984fc7a68cd",
"assets/assets/genrePreviews/stillLife/natyurmort_s_klubnikoi.webp": "604f02af6af75016e225436e227a8552",
"assets/assets/genrePreviews/thematic/baba_yaga.webp": "27072157d1945506b96b6296190da55a",
"assets/assets/genrePreviews/thematic/inok.webp": "f8d60c31f55ae6cfb3288a165171031a",
"assets/assets/genrePreviews/thematic/i_vot_zemlya_rastlilas.webp": "a2f7fb002440b8faca1d0adaff9d11a8",
"assets/assets/genrePreviews/thematic/naslajdenie.webp": "b871729dd3b2fa770356bcb7ed50c781",
"assets/assets/genrePreviews/thematic/obnajennay.webp": "28151960c60505e7ab2a613f78bd1c0c",
"assets/assets/genrePreviews/thematic/osvobojdennie.webp": "165cb5bc6a308bd10174a71ae32bd35d",
"assets/assets/genrePreviews/thematic/poslednii.webp": "7484e3fcb191a8f441c30117e0d45b10",
"assets/assets/genrePreviews/thematic/probyjdenie.webp": "ee3f178fdd922751d8154c6050a0608e",
"assets/assets/genrePreviews/thematic/radost_jizni.webp": "b2d16e66add846d62ffe8f82bbe5b611",
"assets/assets/genres/etude/doroga_k_hramu_ovrag.webp": "8708efca79dc7f570ee15218b80b0e7e",
"assets/assets/genres/etude/iyulskii_vecher.webp": "ae9c60f7a29237127a33cf88e4253f49",
"assets/assets/genres/etude/kamni_abhazia.webp": "cc2a684d192c6bdf0286173c05a77d7b",
"assets/assets/genres/etude/kamni_chernoe_more.webp": "c069100cb9643449ec934f38cd0ef9dd",
"assets/assets/genres/etude/misha.webp": "f5e9c8ef1ec70b0a096a706792378525",
"assets/assets/genres/etude/novyi_afon_kiparisi.webp": "8dcf39821cf7f966252ea3ab29b8700b",
"assets/assets/genres/etude/novyi_afon_vid_na_gori.webp": "2a7a631cbbd0de1ec03755cf9ff8378a",
"assets/assets/genres/etude/okrestnosti_novogo_afona.webp": "acabf639973b17e124b233b29673b7a5",
"assets/assets/genres/etude/portret_starogo_evreya.webp": "b14e70ccc45ed3ba5d2ac0abd9e29c77",
"assets/assets/genres/etude/serbskii_hudojnik_shandor_slaif.webp": "a29f14ec97bc872904be01a74379eb4a",
"assets/assets/genres/landscape/bereg_krasivoi_mechi_v_selce_kurapovo.webp": "b9d07515523f29bf305bb63ad6138aa8",
"assets/assets/genres/landscape/donskie_prostori.webp": "3cd2ed9b5a29bcdc9656c062c601e3de",
"assets/assets/genres/landscape/groza_ushla.webp": "82a9a8d4a00d8b098f772b9fc31764df",
"assets/assets/genres/landscape/izymrud.webp": "044c968998377451bfcad757620aee19",
"assets/assets/genres/landscape/jatva_struilas_ogidaya_serpa.webp": "aeda7083e3d76821821868e8c2130818",
"assets/assets/genres/landscape/light_shades_of_february.webp": "4277c9508bed5f88cc89a1203fa3fbbc",
"assets/assets/genres/landscape/mart.webp": "e75ea4f54748d460d88857ea25bb6e18",
"assets/assets/genres/landscape/u_pruda.webp": "014d9223a6214c89f2629f4ca256c495",
"assets/assets/genres/landscape/vesennayay_rasputica.webp": "a8327dde832ec0f154475443751824a0",
"assets/assets/genres/landscape/vesennee_utro.webp": "a0fe5a09e575aef0137651e333508be8",
"assets/assets/genres/landscape/vid_na_s_karamyshevo.webp": "031752cc4890e7a34b1b1ba11fa99e2f",
"assets/assets/genres/marina/chernoe_more.webp": "4390004463270faa167edf438b420881",
"assets/assets/genres/marina/kamni_storm.webp": "5682780413109b51c149da8dd65a3b4b",
"assets/assets/genres/marina/more_storm.webp": "4d6aaf37c676e6e2aaa7b630b697fe3b",
"assets/assets/genres/marina/priboi.webp": "47c6fa26e241c8c0737f5cc0055d8e8a",
"assets/assets/genres/marina/storm.webp": "e76936ba43e19ce3931d7a23ee431571",
"assets/assets/genres/portrait/aglymova_g_a_s_synom_antonom.webp": "7196ff8d9cd31f24ef5df43a182d53b9",
"assets/assets/genres/portrait/eva.webp": "eb7d2701252b53bf956764bdb3e22188",
"assets/assets/genres/portrait/mashenka.webp": "d646b8a509c9b2e44a83ab862b75b901",
"assets/assets/genres/portrait/naparilsya.webp": "32aa1e9cc4f5d6d73921e234f32b4e21",
"assets/assets/genres/portrait/patriarh1.webp": "9dd89a278b0a2ba56bdd6184f9a56dab",
"assets/assets/genres/portrait/patriarh2.webp": "54ba5221b321568b25e5c87b3736d2d2",
"assets/assets/genres/portrait/poet_i_prosaik_v_kan.webp": "84fd7a4c8b5bcf2865b1b76d2c6212a9",
"assets/assets/genres/portrait/portret_tereshkinoi.webp": "109b803c70a1cb55b84c51d6bed05d29",
"assets/assets/genres/portrait/vozvraschenie_s_venskogo_bala.webp": "9c369834ce2846a1d568397995357d21",
"assets/assets/genres/stillLife/klubnika.webp": "31d296516b5f4e15397c88b01ff7cd18",
"assets/assets/genres/stillLife/letnih_krasok_aromat.webp": "839f9385bc7290aba977c7695f5745e1",
"assets/assets/genres/stillLife/letnii_natyurmort.webp": "e247367fa403bb31884501fb3bf1c365",
"assets/assets/genres/stillLife/natyurmort_s_gribami.webp": "66302501af444bb51ee0e2a9cb6f5f07",
"assets/assets/genres/stillLife/natyurmort_s_klubnikoi.webp": "390d94f9681f6a128b7f91ab3a529c47",
"assets/assets/genres/thematic/baba_yaga.webp": "fff4f5ecac13f7754b0acc4d80cadfb7",
"assets/assets/genres/thematic/inok.webp": "fb56d2ed19ca96c950b79d0b7d861515",
"assets/assets/genres/thematic/i_vot_zemlya_rastlilas.webp": "ef2f4d42fd50bb91e8ef07db695bbce4",
"assets/assets/genres/thematic/naslajdenie.webp": "bcd2296a9c88132fe7f74b27c6a79778",
"assets/assets/genres/thematic/osvobojdennie.webp": "b68292aafb36bda9fdd8a26d2c2b1e05",
"assets/assets/genres/thematic/poslednii.webp": "eebf41d3be89d9aae1ed82bba4310f6e",
"assets/assets/genres/thematic/probyjdenie.webp": "50f2944cea0a8b8325518eac8d0cc3e0",
"assets/assets/genres/thematic/radost_jizni.webp": "b849d3a77cb4b8a916f6188a0f04e488",
"assets/assets/home_screen/0.webp": "e0cc5ac6abeebc11d9bf8bc7aa9ecd0b",
"assets/assets/home_screen/1.webp": "7bec9dedb8f9ceff4b24f84e42f0c0d1",
"assets/assets/home_screen/2.webp": "50dd1efc5c8229d3e750c4bbbb77c398",
"assets/assets/icons/fb.ttf": "1281aa099e9cdfe2894330a10f7cb859",
"assets/assets/icons/vk.ttf": "d8092e25b35c4a1c9af1ef9381e7a801",
"assets/assets/icons/whatsApp_telegram_instagram.ttf": "4a6d6781a57182c1066f19e6c64f3d23",
"assets/assets/photo/artist.webp": "ee5594d4dfd6d8ddca95e091d2237d8c",
"assets/assets/podpis.png": "7bf8f50a53b48571a228f94d214b8086",
"assets/assets/ru.png": "2d163db8d0d80d787bc4f30bf07c5b6f",
"assets/FontManifest.json": "eb888a6ac7b1082cdd2c88a11a779ee3",
"assets/fonts/Gabriela-Regular.ttf": "b48569238eeb0d62de28a5d056b16bef",
"assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Merriweather-Italic.ttf": "498bf4ee4ac9fab22ad9f814839173b2",
"assets/fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0",
"assets/fonts/Merriweather-Regular.ttf": "c97a9fc29652bb4afcdac68020e5d0f7",
"assets/langs/en-US.json": "3a02654c851b75daaec3a66f44352e60",
"assets/langs/fr-FR.json": "d2c708094d0ed3ebced1c15f6bc9bd8f",
"assets/langs/ru-RU.json": "78e2b74c77e627c25b990614ff7e74ab",
"assets/NOTICES": "78678230a8ba097107dddcd34a4b21ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/resources/pictures.json": "0a1e190356e742eb7fdb052cad9f7632",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "e0780b3d3d14f3bee00955980981a006",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d8d0bee65fb138e4354f5fa9905e4fc",
"/": "3d8d0bee65fb138e4354f5fa9905e4fc",
"main.dart.js": "d70d6e78097b10f2c4ca7d852f3b12a3",
"manifest.json": "d0f4fccbd1af76e983da4ec2998ab44b",
"version.json": "b081d1c6d67dcee85bda9372f4cf377a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
