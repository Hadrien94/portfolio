"use strict";
(() => {
var exports = {};
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 5575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2467);

async function handler(req, res) {
    if (req.method === `GET`) {
        try {
            const { responseTracks , responseArtists , responseRecently  } = await (0,_utils_spotify__WEBPACK_IMPORTED_MODULE_0__/* .getSpotifyData */ ._)();
            if (responseRecently.status !== 200) {
                return res.status(responseRecently.status).json({
                    error: `there was an error`
                });
            }
            if (responseArtists.status !== 200) {
                return res.status(responseArtists.status).json({
                    error: `there was an error`
                });
            }
            if (responseTracks.status !== 200) {
                return res.status(responseTracks.status).json({
                    error: `there was an error`
                });
            }
            const artists = await responseArtists.json();
            const songs = await responseTracks.json();
            const recentlyPlayed = await responseRecently.json();
            res.setHeader(`Cache-Control`, `public, s-maxage=60, stale-while-revalidate=60`);
            return res.status(200).json({
                artists,
                songs,
                recentlyPlayed
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            if (e.response.status === 429) {
                return res.status(429).json({
                    message: `you need to wait ${e.headers[`Retry-After`]}`
                });
            }
            return res.status(500).json({
                message: `there was an error`,
                code: e.response.status
            });
        }
    } else {
        return res.status(405).json({
            error: `Method not allowed`
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [467], () => (__webpack_exec__(5575)));
module.exports = __webpack_exports__;

})();