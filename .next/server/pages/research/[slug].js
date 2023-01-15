"use strict";
(() => {
var exports = {};
exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 6928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ResearchLayout),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/BlogBadge/index.ts + 1 modules
var BlogBadge = __webpack_require__(1470);
// EXTERNAL MODULE: ./data/researchItems.ts
var researchItems = __webpack_require__(4696);
;// CONCATENATED MODULE: external "@chakra-ui/avatar"
const avatar_namespaceObject = require("@chakra-ui/avatar");
;// CONCATENATED MODULE: external "@chakra-ui/layout"
const layout_namespaceObject = require("@chakra-ui/layout");
;// CONCATENATED MODULE: external "@chakra-ui/tag"
const tag_namespaceObject = require("@chakra-ui/tag");
// EXTERNAL MODULE: ./src/components/LineHeading/index.ts + 1 modules
var LineHeading = __webpack_require__(2241);
;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = require("process");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/research/[slug].tsx









function ResearchLayout({ item  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Box, {
        py: "20",
        minHeight: "100vh",
        width: "full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.VStack, {
                mx: "auto",
                my: "10",
                maxWidth: {
                    base: '97%',
                    md: '70%'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Flex, {
                        flexWrap: "wrap",
                        children: item.tags.map((tag, i)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogBadge/* default */.Z, {
                                tag: tag,
                                mr: "2",
                                mt: "2"
                            }, i.toString())
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
                        children: item.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Flex, {
                        py: "2",
                        justifyContent: "space-between",
                        w: "full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.HStack, {
                                children: item.authors.map((author)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(tag_namespaceObject.Tag, {
                                        size: "lg",
                                        colorScheme: "brand",
                                        borderRadius: "full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(avatar_namespaceObject.Avatar, {
                                                name: author.name,
                                                size: "xs",
                                                ml: -2,
                                                mr: 2,
                                                src: author.avatar
                                            }),
                                            author.name
                                        ]
                                    }, `${author.name}${external_process_namespaceObject.title[0]}`)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                fontSize: "lg",
                                fontWeight: "bold",
                                children: item.date
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("object", {
                data: item.pdf,
                type: item.pdf,
                style: {
                    height: '80vh',
                    width: '96%',
                    margin: '0 auto'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                    src: item.pdf,
                    style: {
                        height: '80vh',
                        width: '100%'
                    },
                    type: "application/pdf"
                })
            })
        ]
    }));
};
async function getStaticPaths() {
    return {
        paths: researchItems/* researchItems.map */.w.map((p)=>({
                params: {
                    slug: p.id
                }
            })
        ),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    return {
        props: {
            item: researchItems/* researchItems.find */.w.find((p)=>p.id === params.slug
            )
        }
    };
}


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [15,696], () => (__webpack_exec__(6928)));
module.exports = __webpack_exports__;

})();