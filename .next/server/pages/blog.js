"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6966);
/* harmony import */ var _components_BlogPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1967);
/* harmony import */ var _components_LineHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2241);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_mdx__WEBPACK_IMPORTED_MODULE_3__]);
_utils_mdx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Blog({ posts  }) {
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: sort , 1: setSort  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('recent');
    posts[0].featured = Date.now() - new Date(posts[0].publishedAt).getTime() < 1000 * 60 * 60 * 24 * 14;
    const filteredBlogPosts = posts.filter((frontMatter)=>frontMatter.title.toLowerCase().includes(filter) && (frontMatter.published || "production" === 'development')
    ).sort((a, b)=>{
        if (sort === 'recent' || sort === 'old') {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        }
    });
    if (sort === 'old') {
        filteredBlogPosts.reverse();
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        direction: "column",
        alignItems: "center",
        width: "full",
        minH: "100vh",
        mx: "auto",
        maxW: "5xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LineHeading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                mt: "28",
                fontSize: {
                    base: `3xl`,
                    sm: `4xl`,
                    md: `5xl`,
                    lg: `6xl`
                },
                textAlign: "center",
                children: "Blog Posts"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                mt: 3,
                px: 5,
                children: [
                    "Here are a collection of my blog posts, with ",
                    posts.length,
                    " blog",
                    posts.length > 1 && 's',
                    " :)."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                mt: "16",
                width: "full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        width: "full",
                        direction: {
                            base: 'column',
                            md: 'row'
                        },
                        my: 7,
                        px: {
                            base: 5,
                            sm: 2
                        },
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
                                maxWidth: {
                                    base: 'full',
                                    md: '200px'
                                },
                                mb: {
                                    base: 5,
                                    md: 0
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputLeftElement, {
                                        pointerEvents: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineSearch, {
                                            color: "gray.300"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        variant: "filled",
                                        type: "text",
                                        placeholder: "Search",
                                        _placeholder: {
                                            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)('gray.800', 'whiteAlpha.800')
                                        },
                                        onChange: (e)=>setFilter(e.target.value.toLowerCase())
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
                                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button,
                                        rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiChevronDown, {}),
                                        children: "Sort by..."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
                                        zIndex: 998,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                zIndex: 999,
                                                isDisabled: sort === 'recent',
                                                onClick: ()=>setSort('recent')
                                                ,
                                                children: "Recent"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                zIndex: 999,
                                                isDisabled: sort === 'old',
                                                onClick: ()=>setSort('old')
                                                ,
                                                children: "Oldest"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    filteredBlogPosts.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        fontSize: "2xl",
                        textAlign: "center",
                        children: "No Results :("
                    }),
                    filteredBlogPosts.map((frontMatter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogPost__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            ...frontMatter
                        }, frontMatter.title)
                    )
                ]
            })
        ]
    }));
}
async function getStaticProps() {
    const posts = await (0,_utils_mdx__WEBPACK_IMPORTED_MODULE_3__/* .getAllFilesFrontMatter */ .sj)();
    return {
        props: {
            posts
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ BlogPost_BlogPost)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "date-fns/formatDistance"
var formatDistance_ = __webpack_require__(3291);
var formatDistance_default = /*#__PURE__*/__webpack_require__.n(formatDistance_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/components/BlogBadge/index.ts + 1 modules
var BlogBadge = __webpack_require__(1470);
;// CONCATENATED MODULE: ./src/components/BlogPost/BlogPost.tsx







const BlogPost = ({ title , summary , slug , tags , publishedAt , featured  })=>{
    const spliceBP = (0,react_.useBreakpointValue)({
        base: 2,
        md: 4
    });
    const { data  } = (0,external_react_query_.useQuery)(`views${slug}`, ()=>{
        return fetch(`/api/views/${slug}`).then((res)=>res.json()
        );
    });
    const views = data === null || data === void 0 ? void 0 : data.total;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/blog/${slug}`,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            _hover: {
                textDecoration: `none`
            },
            width: "full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                mb: 8,
                px: 5,
                py: 4,
                mt: featured ? 14 : 0,
                direction: "column",
                width: "calc(100% -10px)",
                mx: '5px',
                border: "1px solid",
                bg: (0,react_.useColorModeValue)(`white`, `gray.900`),
                borderColor: (0,react_.useColorModeValue)(`gray.200`, `gray.700`),
                boxShadow: "lg",
                transition: "all 0.25s",
                borderRadius: "2xl",
                borderTopLeftRadius: featured ? '0' : '2xl',
                position: "relative",
                transitionTimingFunction: "spring(1 100 10 10)",
                _hover: {
                    transform: `translateY(-4px)`,
                    shadow: `xl`
                },
                children: [
                    featured && /*#__PURE__*/ jsx_runtime_.jsx(react_.Tag, {
                        fontFamily: "Ubuntu",
                        fontWeight: "extrabold",
                        size: "lg",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        border: "1px solid",
                        borderColor: "brand.200",
                        borderBottomRadius: "0",
                        transform: "translateY(-100%)",
                        colorScheme: "brand",
                        children: "New Post"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        width: "full",
                        alignItems: {
                            base: 'flex-start',
                            sm: 'flex-end'
                        },
                        flexDirection: {
                            base: `column`,
                            sm: `row`
                        },
                        justifyContent: "space-between",
                        maxW: "full",
                        mb: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                                mb: {
                                    base: 2,
                                    sm: 0
                                },
                                sx: {
                                    marginLeft: '0px!important'
                                },
                                children: tags && tags.slice(0, spliceBP).map((tag, i)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogBadge/* default */.Z, {
                                        tag: tag
                                    }, i.toString())
                                )
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                fontWeight: "medium",
                                fontSize: "lg",
                                color: (0,react_.useColorModeValue)('gray.600', 'gray.400'),
                                children: [
                                    formatDistance_default()(new Date(publishedAt), new Date(), {
                                        addSuffix: true
                                    }),
                                    ' ',
                                    '•',
                                    " ",
                                    `${views ? new Number(views).toLocaleString() : '–––'} views`
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        color: (0,react_.useColorModeValue)('gray.900', 'white'),
                        mb: 2,
                        fontSize: {
                            base: '2xl',
                            md: '3xl'
                        },
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: (0,react_.useColorModeValue)('gray.900', 'white'),
                        width: "full",
                        children: summary
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const BlogPost_BlogPost = (BlogPost);

;// CONCATENATED MODULE: ./src/components/BlogPost/index.ts



/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 3291:
/***/ ((module) => {

module.exports = require("date-fns/formatDistance");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 7275:
/***/ ((module) => {

module.exports = require("remark-code-titles");

/***/ }),

/***/ 3982:
/***/ ((module) => {

module.exports = import("remark-autolink-headings");;

/***/ }),

/***/ 9071:
/***/ ((module) => {

module.exports = import("remark-slug");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,15,966], () => (__webpack_exec__(4178)));
module.exports = __webpack_exports__;

})();