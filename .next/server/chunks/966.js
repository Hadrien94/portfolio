"use strict";
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 6966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bE": () => (/* binding */ getFiles),
/* harmony export */   "x7": () => (/* binding */ getFileBySlug),
/* harmony export */   "sj": () => (/* binding */ getAllFilesFrontMatter)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5780);
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9071);
/* harmony import */ var remark_autolink_headings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3982);
/* harmony import */ var remark_code_titles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7275);
/* harmony import */ var remark_code_titles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_code_titles__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_slug__WEBPACK_IMPORTED_MODULE_6__, remark_autolink_headings__WEBPACK_IMPORTED_MODULE_7__]);
([remark_slug__WEBPACK_IMPORTED_MODULE_6__, remark_autolink_headings__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getFiles = (type)=>fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `data`, type))
;
async function getFileBySlug(type, slug) {
    const source = slug ? fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `data`, type, `${slug}.mdx`), `utf8`) : fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `data`, `${type}.mdx`), `utf8`);
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(source);
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(content, {
        mdxOptions: {
            remarkPlugins: [
                remark_slug__WEBPACK_IMPORTED_MODULE_6__["default"],
                [
                    remark_autolink_headings__WEBPACK_IMPORTED_MODULE_7__["default"]
                ],
                (remark_code_titles__WEBPACK_IMPORTED_MODULE_8___default())
            ],
            rehypePlugins: [
                (_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_5___default())
            ]
        }
    });
    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: reading_time__WEBPACK_IMPORTED_MODULE_2___default()(content),
            slug: slug || null,
            ...data
        }
    };
}
async function getAllFilesFrontMatter() {
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `data`, `blog`));
    return files.reduce((allPosts, postSlug)=>{
        const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `data`, `blog`, postSlug), `utf8`);
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(source);
        return [
            {
                ...data,
                slug: postSlug.replace(`.mdx`, ``)
            },
            ...allPosts, 
        ];
    }, []);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;