"use strict";
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 2467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getNowPlaying),
/* harmony export */   "_": () => (/* binding */ getSpotifyData)
/* harmony export */ });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3477);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString(`base64`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=3`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=10`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const getAccessToken = async ()=>{
    const response = await fetch(TOKEN_ENDPOINT, {
        method: `POST`,
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': `application/x-www-form-urlencoded`
        },
        body: querystring__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            grant_type: `refresh_token`,
            refresh_token
        })
    });
    return response.json();
};
const getNowPlaying = async ()=>{
    const { access_token  } = await getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};
const getSpotifyData = async ()=>{
    const { access_token  } = await getAccessToken();
    const responseTracks = await fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    const responseArtists = await fetch(TOP_ARTISTS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    const responseRecently = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    return {
        responseArtists,
        responseRecently,
        responseTracks
    };
};


/***/ })

};
;