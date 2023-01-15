"use strict";
(() => {
var exports = {};
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const excludedRepoNames = [
    'protein-links',
    'mah51',
    'create-typescript-component', 
];
async function handler(req, res) {
    const userResponse = await fetch(`https://api.github.com/users/mah51`);
    const userReposResponse = await fetch(`https://api.github.com/users/mah51/repos?per_page=100`);
    const user = await userResponse.json();
    const repositories = await userReposResponse.json();
    const notForked = repositories.filter((repo)=>!repo.fork && !excludedRepoNames.includes(repo.name)
    );
    const stars = notForked.reduce((a, r)=>a + r.stargazers_count
    , 0) || null;
    res.setHeader(`Cache-Control`, `public, s-maxage=1200, stale-while-revalidate=600`);
    const sendRepos = notForked.map(({ id , name , html_url , created_at , pushed_at , language , description , fork , stargazers_count  })=>({
            id,
            name,
            html_url,
            created_at,
            pushed_at,
            language,
            description,
            fork,
            stargazers_count
        })
    );
    return res.status(200).json({
        followers: user.followers,
        repos: sendRepos,
        stars
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(399));
module.exports = __webpack_exports__;

})();