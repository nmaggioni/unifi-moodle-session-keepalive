// ==UserScript==
// @name        UniFi Moodle Session Keepalive
// @namespace   https://github.com/nmaggioni/
// @match       https://e-l.unifi.it/*
// @grant       GM.xmlHttpRequest
// @grant       GM_xmlhttpRequest
// @version     0.0.1
// @author      nmaggioni
// @description Keep Moodle login active
// @update      2021-02-28
// @homepageURL https://github.com/nmaggioni/unifi-moodle-session-keepalive
// @run-at      document-idle
// ==/UserScript==

(() => {
  const logTag = "UniFi Moodle Session Keepalive";
  const intervalMinutes = 3;
  
  console.log(`${logTag} - triggering every ${intervalMinutes} minutes`);
  setInterval(() => {
    GM.xmlHttpRequest({
      url: "https://e-l.unifi.it/my/",
      method: "GET",
      onerror: (res) => {
        console.warn(`${logTag} - ${new Date()} - req err ${res.status}`);
      },
      onload: (res) => {
        console.log(`${logTag} - ${new Date()} - req ok ${res.status}`);
      }
    });
  }, intervalMinutes * 60 * 1000);
})();
