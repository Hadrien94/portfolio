"use strict";
(() => {
var exports = {};
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 6882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2467);

async function handler(req, res) {
    const response = await (0,_utils_spotify__WEBPACK_IMPORTED_MODULE_0__/* .getNowPlaying */ .e)();
    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({
            isPlaying: false
        });
    }
    const song = await response.json();
    const isPlaying = song.is_playing;
    const { name  } = song.item;
    const artist = song.item.artists.map((_artist)=>_artist.name
    ).join(`, `);
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images.filter((image)=>image.height > 109
    ).slice(-1)[0].url;
    const songUrl = song.item.external_urls.spotify;
    res.setHeader(`Cache-Control`, `public, s-maxage=60, stale-while-revalidate=30`);
    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        name
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [467], () => (__webpack_exec__(6882)));
module.exports = __webpack_exports__;

})();