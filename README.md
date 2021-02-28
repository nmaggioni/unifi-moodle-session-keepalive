# unifi-moodle-session-keepalive

> Userscript to keep an UniFi Moodle Platform session alive and prevent logout while browsing a single page for an extended period of time.

If you don't reload an UniFi Moodle page for a _too short_ amount of time, you get disconnected.

This userscript gets loaded for each page under the `e-l.unifi.it` domain and silently refreshes your session in the background by requesting `https://e-l.unifi.it/my/` every few minutes as long as an UniFi Moodle tab exists.

## Installation

### 1. Userscripts manager

| Browser  | Extension |
|----------|-----------|
| Chrome   | [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag) |
| Firefox  | [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/) |
| Safari   | [Tampermonkey](http://tampermonkey.net/?browser=safari) |
| Edge     | [Tampermonkey](https://www.microsoft.com/store/p/tampermonkey/9nblggh5162s) |

### 2. Userscript

[Click here](https://github.com/nmaggioni/unifi-moodle-session-keepalive/raw/main/unifi-moodle-session-keepalive.user.js) to be prompted to install the script.
