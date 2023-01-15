"use strict";
(() => {
var exports = {};
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4938);

async function handler(req, res) {
    const snapshot = await _utils_firebase__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ref */ .Z.ref('views').once('value');
    const views = snapshot.val();
    const allViews = Object.values(views).reduce((total, value)=>total + value
    );
    return res.status(200).json({
        total: allViews
    });
};


/***/ }),

/***/ 4938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ firebase)
});

;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
var external_firebase_admin_default = /*#__PURE__*/__webpack_require__.n(external_firebase_admin_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/firebase.ts

if (!(external_firebase_admin_default()).apps.length) {
    var ref;
    external_firebase_admin_default().initializeApp({
        credential: external_firebase_admin_default().credential.cert({
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: (ref = process.env.FIREBASE_PRIVATE_KEY) === null || ref === void 0 ? void 0 : ref.replace(/\\n/g, '\n'),
            projectId: 'personal-site-76e82'
        }),
        databaseURL: 'https://personal-site-76e82-default-rtdb.europe-west1.firebasedatabase.app/'
    });
}
/* harmony default export */ const firebase = (external_firebase_admin_default().database());


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(143));
module.exports = __webpack_exports__;

})();