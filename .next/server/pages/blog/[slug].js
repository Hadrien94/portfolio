"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 6051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2723);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5733);
/* harmony import */ var _utils_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_mdx__WEBPACK_IMPORTED_MODULE_4__]);
_utils_mdx__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Blog({ mdxSource , frontMatter  }) {
    if (frontMatter.published || "production" === 'development') {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            frontMatter: frontMatter,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_1__.MDXRemote, {
                ...mdxSource,
                components: {
                    ..._components_MDXComponents__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
                }
            })
        }));
    }
    return null;
};
async function getStaticPaths() {
    const posts = await (0,_utils_mdx__WEBPACK_IMPORTED_MODULE_4__/* .getFiles */ .bE)(`blog`);
    return {
        paths: posts.map((p)=>({
                params: {
                    slug: p.replace(/\.mdx/, ``)
                }
            })
        ),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const post = await (0,_utils_mdx__WEBPACK_IMPORTED_MODULE_4__/* .getFileBySlug */ .x7)(`blog`, params.slug);
    return {
        props: {
            ...post
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ BlogLayout_BlogLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./src/components/ViewCounter/ViewCounter.tsx



const ViewCounter = ({ slug  })=>{
    const { data  } = (0,external_react_query_.useQuery)(`views${slug}`, ()=>{
        return fetch(`/api/views/${slug}`).then((res)=>res.json()
        );
    });
    const views = new Number(data === null || data === void 0 ? void 0 : data.total);
    (0,external_react_.useEffect)(()=>{
        const registerView = ()=>fetch(`/api/views/${slug}`, {
                method: 'POST'
            })
        ;
        registerView();
    }, [
        slug
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: `${views > 0 ? views.toLocaleString() : '–––'} views`
    }));
};
/* harmony default export */ const ViewCounter_ViewCounter = (ViewCounter);

;// CONCATENATED MODULE: ./src/components/ViewCounter/index.ts


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./src/components/BlogBadge/index.ts + 1 modules
var BlogBadge = __webpack_require__(1470);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./src/components/BlogLayout/BlogLayout.tsx











const BlogLayout = ({ children , frontMatter  })=>{
    var ref;
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_.Global, {
                styles: external_emotion_react_.css`
          * {
            scroll-padding-top: 80px;
          }
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: frontMatter.title,
                description: frontMatter.summary,
                canonical: `https://mikeroph.one${router.asPath}`,
                twitter: {
                    cardType: 'summary_large_image',
                    site: '@Mikerophone_'
                },
                openGraph: {
                    title: frontMatter.title,
                    site_name: 'Michael Hall',
                    description: frontMatter.summary,
                    url: `https://mikeroph.one${router.asPath}/`,
                    type: 'article',
                    article: {
                        publishedTime: new Date(frontMatter.publishedAt).toISOString()
                    },
                    images: [
                        {
                            url: `https://mikeroph.one${frontMatter.image}`
                        }, 
                    ]
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.chakra.article, {
                id: 'blogArticle',
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                pt: "20",
                width: "full",
                minH: "100vh",
                mx: "auto",
                maxWidth: "2xl",
                children: [
                    frontMatter.tags && /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        width: "full",
                        px: 3,
                        mb: 4,
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        sx: {
                            rowGap: '10px',
                            columnGap: '10px'
                        },
                        children: frontMatter.tags.map((tag, i)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogBadge/* default */.Z, {
                                tag: tag
                            }, i.toString())
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        fontSize: {
                            base: '3xl',
                            md: '6xl'
                        },
                        textAlign: {
                            base: 'center',
                            md: 'left'
                        },
                        px: 2,
                        children: frontMatter.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: {
                            base: 'column',
                            md: 'row'
                        },
                        justifyContent: "space-between",
                        alignItems: {
                            base: 'center',
                            md: 'flex-start'
                        },
                        maxW: "2xl",
                        mx: 'auto',
                        mb: 12,
                        mt: 5,
                        width: "full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                alignItems: "center",
                                my: {
                                    base: 2,
                                    md: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tag, {
                                        size: "lg",
                                        colorScheme: "brand",
                                        borderRadius: "full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                name: frontMatter.by.name,
                                                size: "xs",
                                                ml: -2,
                                                mr: 2,
                                                src: frontMatter.by.avatar
                                            }),
                                            frontMatter.by.name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        color: (0,react_.useColorModeValue)('gray.700', 'gray.300'),
                                        ml: 1,
                                        children: [
                                            ' • ',
                                            (0,external_date_fns_namespaceObject.format)((0,external_date_fns_namespaceObject.parseISO)(frontMatter.publishedAt), 'MMMM dd, yyyy')
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                color: (0,react_.useColorModeValue)('gray.700', 'gray.300'),
                                children: [
                                    frontMatter.wordCount.toLocaleString() + ' words',
                                    ` • `,
                                    (ref = frontMatter.readingTime) === null || ref === void 0 ? void 0 : ref.text,
                                    ` • `,
                                    /*#__PURE__*/ jsx_runtime_.jsx(ViewCounter_ViewCounter, {
                                        slug: frontMatter.slug
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        mb: 16,
                        px: 2,
                        maxWidth: "4xl",
                        width: "full",
                        className: 'blog-content',
                        children: [
                            children,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                justifyContent: "flex-start",
                                mr: "auto",
                                mt: 5,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.EditIcon, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `https://github.com/mah51/mikeroph.one/edit/main/src/data/blog/${frontMatter.slug}.mdx`,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            color: (0,react_.useColorModeValue)('gray.900', 'white'),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Edit on github"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const BlogLayout_BlogLayout = (BlogLayout);

;// CONCATENATED MODULE: ./src/components/BlogLayout/index.ts



/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ 7112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,15,208,723,966], () => (__webpack_exec__(6051)));
module.exports = __webpack_exports__;

})();