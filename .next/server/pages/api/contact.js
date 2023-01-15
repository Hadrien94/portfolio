"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 3435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "vcards-js"
const external_vcards_js_namespaceObject = require("vcards-js");
var external_vcards_js_default = /*#__PURE__*/__webpack_require__.n(external_vcards_js_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.ts

const handler = (req, res)=>{
    const vCard = external_vcards_js_default()();
    vCard.firstName = 'Michael';
    vCard.lastName = 'Hall';
    vCard.email = 'michael.hall17@icloud.com';
    vCard.birthday = new Date(2000, 5, 12);
    vCard.photo.attachFromUrl('https://mikeroph.one/static/images/profile.jpeg', 'JPEG');
    vCard.socialUrls['github'] = 'https://github.com/mah51';
    res.setHeader('Content-Type', 'text/vcard; name=vcard.vcf');
    res.setHeader('Content-Disposition', 'inline; filename=vcard.vcf');
    res.send(vCard.getFormattedString());
};
/* harmony default export */ const contact = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3435));
module.exports = __webpack_exports__;

})();