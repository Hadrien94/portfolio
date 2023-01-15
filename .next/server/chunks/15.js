"use strict";
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 1470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ BlogBadge_BlogBadge)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/BlogBadge/BlogBadge.tsx


const BlogBadge = (props)=>{
    const { tag  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Badge, {
        colorScheme: [
            `gray`,
            `brand`,
            `teal`,
            `blue`,
            `green`,
            `pink`,
            `orange`,
            `red`,
            `purple`,
            `yellow`
        ][(tag.charCodeAt(0) + tag.charCodeAt(1)) % 10],
        py: 1,
        px: 2,
        fontWeight: '600',
        borderRadius: 'md',
        ...props,
        children: tag
    }));
};
/* harmony default export */ const BlogBadge_BlogBadge = (BlogBadge);

;// CONCATENATED MODULE: ./src/components/BlogBadge/index.ts



/***/ }),

/***/ 2241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ LineHeading_LineHeading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/LineHeading/LineHeading.tsx



const LineHeading = ({ children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
        position: "relative",
        _before: {
            content: `''`,
            position: `absolute`,
            bottom: 1,
            left: 0,
            height: `30%`,
            width: `100%`,
            bgColor: (0,react_.useColorModeValue)(`brand.200`, `brand.500`),
            opacity: (0,react_.useColorModeValue)(1, 0.5),
            zIndex: -1
        },
        ...props,
        children: children
    })
;
/* harmony default export */ const LineHeading_LineHeading = (LineHeading);

;// CONCATENATED MODULE: ./src/components/LineHeading/index.ts



/***/ })

};
;