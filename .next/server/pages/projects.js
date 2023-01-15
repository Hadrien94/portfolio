"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 5036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./src/components/LineHeading/index.ts + 1 modules
var LineHeading = __webpack_require__(2241);
;// CONCATENATED MODULE: ./src/components/RepoCard/RepoCard.tsx



const RepoCard = ({ repo , i  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "a",
        href: repo.html_url,
        h: "full",
        w: "full",
        isTruncated: true,
        overflow: "visible",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
            spacing: 1,
            p: 3,
            bg: (0,react_.useColorModeValue)(`white`, `gray.900`),
            height: "100%",
            width: "100%",
            maxWidth: "100%",
            border: "1px solid",
            borderColor: (0,react_.useColorModeValue)(`gray.200`, `gray.700`),
            borderRadius: "lg",
            boxShadow: "lg",
            transition: "all 0.25s",
            transitionTimingFunction: "spring(1 100 10 10)",
            _hover: {
                transform: `translateY(-4px)`,
                shadow: `xl`
            },
            textAlign: "left",
            direction: "column",
            pl: 5,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            isTruncated: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    isInline: true,
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontSize: {
                                base: `lg`,
                                md: `xl`
                            },
                            fontWeight: "semibold",
                            maxW: "full",
                            isTruncated: true,
                            children: repo.name
                        }),
                        repo.language && /*#__PURE__*/ jsx_runtime_.jsx(react_.Tag, {
                            colorScheme: "brand",
                            size: "sm",
                            ml: 2,
                            mt: "auto",
                            height: "22px",
                            children: repo.language
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    color: (0,react_.useColorModeValue)(`gray.600`, `gray.400`),
                    justifySelf: "center",
                    maxWidth: "full",
                    isTruncated: true,
                    children: repo.description
                })
            ]
        })
    }, i.toString()));
};
/* harmony default export */ const RepoCard_RepoCard = (RepoCard);

;// CONCATENATED MODULE: ./src/components/RepoCard/index.ts


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(5208);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: external "react-icons/si"
const si_namespaceObject = require("react-icons/si");
;// CONCATENATED MODULE: ./src/components/Icons/Icons.tsx



const SemanticIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Icon, {
        viewBox: "0 0 256 256",
        marginInlineEnd: '6px',
        alignSelf: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 0h256v256H0V0z",
                fill: "#34BDB2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M168.461 87.041c-13.516-7.842-25.514-14.009-41.21-13.737-8.98.156-16.69 5.037-18.311 13.97-1.509 8.311 5.879 12.921 13.565 15.751 12.747 4.694 23.844 9.65 36.369 14.869 22.769 9.489 34.444 24.856 33.064 44.573-1.756 25.087-16.854 43.08-40.849 49.012-31.354 7.752-61.801-4.056-87.526-20.54 6.493-9.891 14.026-16.643 20.48-26.474 14.862 6.326 26.538 14.874 42.086 16.207 10.963.94 23.385.417 25.848-12.46 2.22-11.612-7.886-17.837-17.743-21.314-11.735-4.139-23.448-9.202-34.956-13.902-21.273-8.689-29.929-25.684-28.472-45.705 0-11.739 9.74-35.466 33.621-42.846 36.692-11.34 56.908.272 83.515 17.371-7.067 9.346-12.5 15.991-19.481 25.225",
                fill: "#FFF"
            })
        ]
    })
;
const TypeScriptIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Icon, {
        viewBox: "0 0 512 512",
        alignSelf: "center",
        marginInlineEnd: '6px',
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                fill: "currentColor",
                height: "512",
                rx: "50",
                width: "512"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                fill: "currentColor",
                height: "512",
                rx: "50",
                width: "512"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
            })
        ]
    })
;
const NextJSIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
        viewBox: "0 0 256 256",
        alignSelf: "center",
        marginInlineEnd: '6px',
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z",
            fill: "currentColor"
        })
    })
;
const ChakraIcon = ()=>/*#__PURE__*/ _jsxs(Icon, {
        viewBox: "0 0 256 256",
        marginInlineEnd: '6px',
        alignSelf: "center",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                width: "256",
                height: "256",
                rx: "128.5",
                fill: "currentColor"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z"
            })
        ]
    })
;

;// CONCATENATED MODULE: ./src/components/Icons/index.ts


;// CONCATENATED MODULE: ./src/components/Tags/Tags.tsx









const tagDict = {
    React: fa_.FaReact,
    'Next.JS': NextJSIcon,
    TypeScript: TypeScriptIcon,
    Node: io_namespaceObject.IoLogoNodejs,
    'Chakra-UI': bs_.BsFillLightningFill,
    MDX: si_namespaceObject.SiMarkdown,
    'Discord.JS': fa_.FaDiscord,
    'Semantic-UI': SemanticIcon
};
const Tags = ({ tags  })=>{
    const [isLargerThan800] = (0,react_.useMediaQuery)('(min-width: 800px)');
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
        height: "25px",
        isInline: true,
        children: tags === null || tags === void 0 ? void 0 : tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tag, {
                colorScheme: `${[
                    'red',
                    'orange',
                    'yellow',
                    'green',
                    'brand',
                    'teal',
                    'blue',
                    'cyan',
                    'pink',
                    'purple'
                ][(0,utils/* getTotalCharCode */.Df)(tag) % 10]}`,
                size: isLargerThan800 ? 'md' : 'sm',
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TagLeftIcon, {
                        marginInlineEnd: '6px',
                        as: tagDict[tag]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TagLabel, {
                        fontWeight: '600',
                        children: tag
                    })
                ]
            }, tag)
        )
    }));
};
/* harmony default export */ const Tags_Tags = (Tags);

;// CONCATENATED MODULE: ./src/components/Tags/index.ts


;// CONCATENATED MODULE: ./src/components/ImageCard/ImageCard.tsx







const ImageCard = ({ projectData , repo  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        borderRadius: "2xl",
        bg: (0,react_.useColorModeValue)('white', 'gray.900'),
        border: "1px solid",
        boxShadow: "lg",
        width: "full",
        borderColor: (0,react_.useColorModeValue)('gray.200', 'gray.700'),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                ratio: 16 / 9,
                border: "none",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    borderTopRadius: "2xl",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        alt: projectData.name + ' screenshot',
                        src: projectData.image || '',
                        layout: 'fill'
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                borderBottomRadius: '2xl',
                py: 5,
                px: 4,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        isInline: true,
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                fontFamily: "Ubuntu",
                                isTruncated: true,
                                maxWidth: "full",
                                fontSize: '2xl',
                                children: projectData.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                isInline: true,
                                justifyContent: "flex-end",
                                alignItems: "center",
                                spacing: 4,
                                children: [
                                    (repo === null || repo === void 0 ? void 0 : repo.html_url) && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: repo === null || repo === void 0 ? void 0 : repo.html_url,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            isExternal: true,
                                            className: `hover-link-${colorMode}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                                size: 23
                                            })
                                        })
                                    }),
                                    (projectData === null || projectData === void 0 ? void 0 : projectData.deployedLink) && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: projectData.deployedLink,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            isExternal: true,
                                            className: `hover-link-${colorMode}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaExternalLinkAlt, {
                                                size: 20
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        maxWidth: "100%",
                        maxHeight: "100%",
                        height: "100%",
                        width: "100%",
                        textAlign: "left",
                        color: (0,react_.useColorModeValue)(`gray.500`, `gray.500`),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Tags_Tags, {
                            tags: projectData === null || projectData === void 0 ? void 0 : projectData.stack
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        pt: 2,
                        children: projectData.longDescription
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const ImageCard_ImageCard = (ImageCard);

;// CONCATENATED MODULE: ./src/components/ImageCard/index.ts


;// CONCATENATED MODULE: ./src/components/PinnedImageProjects/PinnedImageProjects.tsx








const PinnedImageProjects = ({ projectData , repo , left  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const bp = (0,react_.useBreakpointValue)({
        base: `base`,
        lg: `lg`
    });
    if (bp === `lg`) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            position: "relative",
            width: "100%",
            py: 5,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    maxWidth: {
                        lg: `83%`,
                        xl: `90%`
                    },
                    ml: left ? `auto` : 0,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                        ratio: 16 / 9,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            boxShadow: "xl",
                            borderRadius: "2xl",
                            border: "1px solid",
                            borderColor: colorMode === 'light' ? `gray.200` : `gray.600`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                alt: (projectData === null || projectData === void 0 ? void 0 : projectData.name) + 'screenshot',
                                src: (projectData === null || projectData === void 0 ? void 0 : projectData.image) || '',
                                layout: "fill"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    maxHeight: "full",
                    boxShadow: "lg",
                    position: "absolute",
                    left: left ? {
                        lg: `0`,
                        xl: `-10%`
                    } : ``,
                    right: left ? `` : {
                        lg: `0`,
                        xl: `-10%`
                    },
                    top: "50%",
                    transform: "translate(0, -50%)",
                    borderRadius: "2xl",
                    bg: colorMode === 'light' ? `white` : `gray.900`,
                    p: 5,
                    width: "45%",
                    maxWidth: "600px",
                    whiteSpace: "normal",
                    minHeight: "35%",
                    border: "1px solid",
                    borderColor: colorMode === 'light' ? `gray.200` : `gray.700`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        maxHeight: "full",
                        height: "full",
                        width: "full",
                        maxWidth: "full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                width: "full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        justifyContent: "space-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                                isTruncated: true,
                                                children: projectData.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                                isInline: true,
                                                justifyContent: "flex-end",
                                                alignItems: "center",
                                                spacing: 4,
                                                mr: 1,
                                                children: [
                                                    (repo === null || repo === void 0 ? void 0 : repo.html_url) && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: repo === null || repo === void 0 ? void 0 : repo.html_url,
                                                        passHref: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                            isExternal: true,
                                                            className: `hover-link-${colorMode}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                                                size: 23
                                                            })
                                                        })
                                                    }),
                                                    (projectData === null || projectData === void 0 ? void 0 : projectData.deployedLink) && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: projectData.deployedLink,
                                                        passHref: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                            isExternal: true,
                                                            className: `hover-link-${colorMode}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaExternalLinkAlt, {
                                                                size: 20
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Tags_Tags, {
                                        tags: projectData === null || projectData === void 0 ? void 0 : projectData.stack
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                height: "full",
                                pt: 2,
                                children: projectData.longDescription
                            })
                        ]
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(ImageCard_ImageCard, {
        projectData: projectData,
        repo: repo
    }));
};
/* harmony default export */ const PinnedImageProjects_PinnedImageProjects = (PinnedImageProjects);

;// CONCATENATED MODULE: ./src/components/PinnedImageProjects/index.ts


;// CONCATENATED MODULE: ./src/components/PinnedProjects/PinnedProjects.tsx







const PinnedProjects = ({ repo , projectData , left  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    if (projectData && (projectData === null || projectData === void 0 ? void 0 : projectData.image)) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(PinnedImageProjects_PinnedImageProjects, {
            left: left,
            repo: repo,
            projectData: projectData
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        h: "full",
        w: "full",
        my: 5,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
            bg: colorMode === 'light' ? `white` : `gray.900`,
            px: {
                base: 4,
                md: 8
            },
            py: 4,
            height: "100%",
            width: "100%",
            border: "1px solid",
            borderColor: colorMode === 'light' ? `gray.200` : `gray.700`,
            borderRadius: "2xl",
            boxShadow: "xl",
            textAlign: "left",
            direction: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            isTruncated: true,
            spacing: 1,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    direction: {
                        base: 'column',
                        sm: 'row'
                    },
                    maxWidth: "full",
                    width: "full",
                    isTruncated: true,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        width: "full",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: {
                                    base: `2xl`,
                                    md: `4xl`
                                },
                                fontWeight: "bold",
                                isTruncated: true,
                                maxW: "100%",
                                children: projectData.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                isInline: true,
                                justifyContent: "flex-end",
                                alignItems: "center",
                                spacing: 4,
                                mr: 1,
                                children: [
                                    (repo === null || repo === void 0 ? void 0 : repo.html_url) && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: repo === null || repo === void 0 ? void 0 : repo.html_url,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            isExternal: true,
                                            className: `hover-link-${colorMode}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                                size: 23
                                            })
                                        })
                                    }),
                                    (projectData === null || projectData === void 0 ? void 0 : projectData.deployedLink) && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: projectData.deployedLink,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            isExternal: true,
                                            className: `hover-link-${colorMode}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaExternalLinkAlt, {
                                                size: 20
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Tags_Tags, {
                    tags: projectData === null || projectData === void 0 ? void 0 : projectData.stack
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    color: colorMode === 'light' ? `gray.600` : `gray.300`,
                    justifySelf: "center",
                    height: "100%",
                    width: "100%",
                    whiteSpace: "normal",
                    pt: 2,
                    children: projectData.longDescription
                })
            ]
        })
    }));
};
/* harmony default export */ const PinnedProjects_PinnedProjects = (PinnedProjects);

;// CONCATENATED MODULE: ./src/components/PinnedProjects/index.ts


;// CONCATENATED MODULE: ./data/pinnedRepos.ts
const pinnedRepos = [
    {
        image: 'https://user-images.githubusercontent.com/47287285/119244610-38467080-bb6a-11eb-8c0e-2e241a31dac8.png',
        name: 'WormTracker',
        deployedLink: "https://worm.mikeroph.one",
        stack: [
            'React',
            'Semantic-UI'
        ],
        id: 'WormTracker',
        longDescription: 'A quick tool I whipped up to help count worm tracks in grids on pictures of agar plates. Pretty weird, and super scuffed, but it worked well for the short time it was used.'
    },
    {
        id: `mikebot`,
        name: `MikeBot`,
        stack: [
            'Discord.JS',
            'Node'
        ],
        longDescription: `I wanted to learn how to use JavaScript and this project helped me dive into it. MikeBot utilised the discord API via discord.js to perform a variety of tasks from moderation, games, and general fun. I spent ages over quarantine on this project, and is where I started learning JS.`
    },
    {
        id: `mikeroph.one`,
        stack: [
            'Next.JS',
            'Chakra-UI',
            'MDX'
        ],
        name: `My Website`,
        deployedLink: 'https://mikeroph.one',
        image: 'https://user-images.githubusercontent.com/47287285/126173254-b30cafad-d757-4f5e-9a4e-f2c89b3657b2.png',
        longDescription: `I was looking through Lee Rob's and Daniel Wirtz's websites one afternoon, and decided I need one for myself (you might see a few similarities 🙃 ). I learnt a lot about NextJS and Chakra, and had a great time making it.`
    },
    {
        id: `scuffedmdb`,
        stack: [
            'Next.JS',
            'Chakra-UI'
        ],
        name: `ScuffedMDB`,
        deployedLink: 'https://smdb.mikeroph.one',
        image: 'https://user-images.githubusercontent.com/47287285/125026394-616c8300-e07c-11eb-9678-a6e497119b7d.png',
        longDescription: `I built the first version of this website during the latter half of quarantine to rate movies that my friends and I had watched over discord. Then decided it needed a remodel, and created ScuffedMDB (Movie-rating V2.0), made with NextJS and ChakraUI. It has been great to make a website, that not only all my friends can use, but other people can use (and have :)) for their own movie rating sites.`
    }, 
];

;// CONCATENATED MODULE: ./pages/projects.tsx









function Projects({ repos  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: "Projects"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                width: "full",
                px: 3,
                minH: "100vh",
                height: "full",
                mx: "auto",
                maxW: "6xl",
                py: "28",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        alignItems: "center",
                        width: "full",
                        px: 3,
                        height: "full",
                        mx: "auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
                                fontSize: {
                                    base: `5xl`,
                                    md: `6xl`
                                },
                                mx: "auto",
                                textAlign: "center",
                                children: "My projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                mt: 3,
                                children: "A quick collection of my projects."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                direction: "column",
                                my: 16,
                                width: "full",
                                height: "full",
                                maxWidth: "5xl",
                                spacing: 10,
                                children: pinnedRepos.sort((a, b)=>{
                                    var ref, ref1;
                                    return new Date((ref = repos.find((x)=>x.name.toLowerCase() === a.id.toLowerCase()
                                    )) === null || ref === void 0 ? void 0 : ref.created_at).getTime() - new Date((ref1 = repos.find((y)=>y.name.toLowerCase() === b.id.toLowerCase()
                                    )) === null || ref1 === void 0 ? void 0 : ref1.created_at).getTime();
                                }).reverse().map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx(PinnedProjects_PinnedProjects, {
                                        repo: repos.find((x)=>x.name.toLowerCase() === data.id.toLowerCase()
                                        ),
                                        left: index % 2 === 0,
                                        projectData: data
                                    }, index.toString())
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
                                fontSize: {
                                    base: `5xl`,
                                    lg: `5xl`
                                },
                                textAlign: "center",
                                children: "Repositories"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                mt: 3,
                                children: "A list of all of the public repositories on my GitHub."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: "a",
                                href: "https://github.com/mah51",
                                variant: "ghost",
                                colorScheme: "brand",
                                size: "lg",
                                mt: 5,
                                leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {}),
                                children: "View My Profile"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
                        mt: 10,
                        columns: {
                            base: 1,
                            md: 2
                        },
                        width: "full",
                        height: "full",
                        maxH: "full",
                        mx: "auto",
                        gridAutoRows: "1fr",
                        spacingX: 10,
                        spacingY: 8,
                        isTruncated: true,
                        overflow: "visible",
                        children: repos.sort((a, b)=>new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime()
                        ).reverse().map((repo, index)=>/*#__PURE__*/ jsx_runtime_.jsx(RepoCard_RepoCard, {
                                repo: repo,
                                i: index
                            }, index.toString())
                        )
                    })
                ]
            })
        ]
    }));
}
async function getStaticProps() {
    let error = null;
    let response = null;
    try {
        response = await fetch(`${process.env.NEXT_PUBLIC_HOST || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}/api/github`);
        if (!response.ok) {
            error = `${response.status} ${response.statusText}`;
        }
    } catch (e) {
        console.error(e);
        error = 'There was an error fetching github stats';
    }
    if (error) {
        return {
            props: {
                stars: 0,
                followers: 0,
                repos: [],
                error
            }
        };
    }
    const { stars , repos , followers  } = await response.json();
    return {
        props: {
            stars,
            repos,
            followers,
            revalidate: 600
        }
    };
}
/* harmony default export */ const projects = (Projects);


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



/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,208], () => (__webpack_exec__(5036)));
module.exports = __webpack_exports__;

})();