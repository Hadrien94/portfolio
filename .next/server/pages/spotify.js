(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 492:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "styles_image__K6S7k",
	"artistImage": "styles_artistImage__vy58k"
};


/***/ }),

/***/ 2036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ spotify),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "react-awesome-reveal"
const external_react_awesome_reveal_namespaceObject = require("react-awesome-reveal");
// EXTERNAL MODULE: ./src/components/LineHeading/index.ts + 1 modules
var LineHeading = __webpack_require__(2241);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/styles/styles.module.css
var styles_module = __webpack_require__(492);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/MusicLayouts/MusicCards.tsx





const SongCard = ({ song , titleCard , isPlaying  })=>{
    var ref, ref1, ref2;
    const { 0: imageLoad , 1: setImageLoad  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "a",
        href: (ref = song.external_urls) === null || ref === void 0 ? void 0 : ref.spotify,
        h: "full",
        w: "full",
        isTruncated: true,
        overflow: "visible",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
            my: 5,
            p: 5,
            overflow: "visible",
            width: "full",
            maxWidth: "2xl",
            templateColumns: `${titleCard ? `150px` : `110px`} 1fr`,
            border: "1px solid",
            bg: (0,react_.useColorModeValue)(`white`, `gray.900`),
            borderColor: (0,react_.useColorModeValue)(`gray.200`, `gray.700`),
            boxShadow: "lg",
            transition: "all 0.25s",
            borderRadius: "2xl",
            transitionTimingFunction: "spring(1 100 10 10)",
            _hover: {
                transform: `translateY(-4px)`,
                shadow: `xl`
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Skeleton, {
                    borderRadius: "2xl",
                    boxSize: titleCard ? `150px` : `110px`,
                    isLoaded: imageLoad,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        alt: (song === null || song === void 0 ? void 0 : song.name) + ' album cover',
                        className: (styles_module_default()).image,
                        width: titleCard ? `150px` : `110px`,
                        height: titleCard ? `150px` : `110px`,
                        onLoad: ()=>setImageLoad(true)
                        ,
                        src: song.albumImageUrl || song.album.images.filter((image)=>image.height > 109
                        ).slice(-1)[0].url
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    direction: "column",
                    ml: 5,
                    maxWidth: "full",
                    isTruncated: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            isTruncated: true,
                            maxWidth: "full",
                            fontSize: titleCard ? {
                                base: `2xl`,
                                md: `3xl`
                            } : {
                                base: `xl`,
                                md: `2xl`
                            },
                            fontWeight: "semibold",
                            children: `${song.name}${titleCard && !isPlaying ? ` - Paused` : ``}`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            direction: "column",
                            color: (0,react_.useColorModeValue)(`gray.600`, `gray.400`),
                            mt: 2,
                            isTruncated: true,
                            width: "full",
                            fontSize: {
                                base: `sm`,
                                sm: `md`
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                    isTruncated: true,
                                    maxWidth: "full",
                                    children: [
                                        "Album • ",
                                        song.album.name || song.album
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                    isTruncated: true,
                                    maxWidth: "full",
                                    children: [
                                        "Artist",
                                        ((ref1 = song.artists) === null || ref1 === void 0 ? void 0 : ref1.length) > 1 && `s`,
                                        " •",
                                        ` `,
                                        song.artist || ((ref2 = song.artists) === null || ref2 === void 0 ? void 0 : ref2.map((artist)=>artist.name
                                        ).join(`, `))
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
const ArtistCard = ({ artist  })=>{
    const { 0: imageLoad , 1: setImageLoad  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        overflow: "visible",
        position: "relative",
        maxHeight: "150px",
        maxWidth: "150px",
        mx: "auto",
        boxShadow: "dark-lg",
        outline: "none",
        transition: "all 0.25s",
        borderRadius: "2xl",
        transitionTimingFunction: "spring(1 100 10 10)",
        _hover: {
            transform: `translateY(-4px)`,
            shadow: `dark-xl`
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Skeleton, {
                overflow: "visible",
                maxWidth: "150px",
                borderRadius: "2xl",
                maxHeight: "150px",
                boxSize: "full",
                mx: "auto",
                isLoaded: imageLoad,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    className: (styles_module_default()).artistImage,
                    alt: (artist === null || artist === void 0 ? void 0 : artist.name) + ' artist image',
                    width: "150px",
                    height: "150px",
                    onLoad: ()=>setImageLoad(true)
                    ,
                    src: artist.images.filter((image)=>image.height >= 150
                    ).slice(-1)[0].url
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontWeight: "semibold",
                fontSize: "lg",
                display: "inline",
                maxWidth: "150px",
                width: "full",
                color: "white",
                textAlign: "center",
                zIndex: 100,
                children: artist.name
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/MusicLayouts/MusicLayouts.tsx





const TopSongs = ({ songs  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        maxW: "2xl",
        width: "full",
        mx: "auto",
        isTruncated: true,
        // fixes bug that cut shadow off
        overflow: "visible",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
                alignSelf: "center",
                mb: 5,
                children: "Top Songs"
            }),
            songs.map((song)=>/*#__PURE__*/ jsx_runtime_.jsx(SongCard, {
                    song: song
                }, song.id)
            )
        ]
    })
;
const TopArtists = ({ artists  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        maxW: "xl",
        width: "full",
        mx: "auto",
        overflow: "visible",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
                alignSelf: "center",
                mb: "4",
                children: "Top Artists"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
                bg: "transparent",
                columns: {
                    sm: 1,
                    md: 3
                },
                spacing: 5,
                my: 5,
                p: 5,
                width: "full",
                overflow: "visible",
                height: "full",
                children: artists.map((artist)=>/*#__PURE__*/ jsx_runtime_.jsx(ArtistCard, {
                        artist: artist
                    }, artist.id)
                )
            })
        ]
    })
;
const RecentSongs = ({ songs  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        width: "full",
        maxW: "2xl",
        mx: "auto",
        overflow: "visible",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
                alignSelf: "center",
                mb: 5,
                children: "Recently Played Songs"
            }),
            songs.map((song, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SongCard, {
                    song: song.track
                }, index.toString() + song.track.id)
            )
        ]
    })
;
const CurrentlyPlaying = ({ song  })=>{
    /*#__PURE__*/ return (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        alignItems: "center",
        width: "full",
        mx: "auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
                mb: "4",
                children: "Currently playing"
            }),
            (song === null || song === void 0 ? void 0 : song.isPlaying) ? /*#__PURE__*/ jsx_runtime_.jsx(SongCard, {
                song: song,
                titleCard: true,
                isPlaying: song.isPlaying
            }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                children: "Nothing playing"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/MusicLayouts/index.ts


// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./pages/spotify.tsx







const ListFade = ({ children  })=>{
    const bp = (0,react_.useBreakpointValue)({
        base: false,
        md: true
    });
    if (!bp) {
        return children;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_awesome_reveal_namespaceObject.Fade, {
        cascade: true,
        delay: 1000,
        triggerOnce: true,
        children: children
    }));
};
const HeadingFade = ({ children  })=>{
    const bp = (0,react_.useBreakpointValue)({
        base: false,
        md: true
    });
    if (!bp) {
        return children;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_awesome_reveal_namespaceObject.Fade, {
        direction: "up",
        triggerOnce: true,
        cascade: true,
        children: children
    }));
};
function Spotify({ data , error  }) {
    const { error: currentError , data: currentlyPlaying  } = (0,external_react_query_.useQuery)(`currentlyPlaying`, ()=>fetch(`/api/get-now-playing`).then((res)=>res.json()
        )
    , {
        refetchOnMount: true
    });
    if (error || currentError) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "There was an error fetching data from spotify"
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: "Music"
            }),
            ` `,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                width: "full",
                maxW: {
                    base: `full`,
                    lg: `7xl`,
                    xl: `8xl`
                },
                px: {
                    base: 2,
                    md: 5
                },
                pb: {
                    base: 16,
                    md: 28
                },
                mx: "auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeadingFade, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                pt: "28",
                                fontSize: {
                                    base: `3xl`,
                                    sm: `4xl`,
                                    md: `5xl`,
                                    lg: `6xl`
                                },
                                textAlign: "center",
                                children: "Here's what I'm listening to at the moment"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                textAlign: "center",
                                pt: "5",
                                children: "*Top Songs and Artists over the past 6 months"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                justifyContent: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    as: "a",
                                    href: "https://open.spotify.com/user/31xl7hwxkqrdf6xlt608i3kmg?si=XOKTjryTQdea1kF90ZkOfQ",
                                    variant: "ghost",
                                    colorScheme: "brand",
                                    size: "lg",
                                    mt: 5,
                                    leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                        viewBox: "0 0 168 168",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "#1ED760",
                                            d: "M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                                        })
                                    }),
                                    children: "View My Profile"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
                        columns: {
                            base: 1,
                            lg: 2
                        },
                        height: "full",
                        width: "full",
                        maxWidth: "full",
                        spacingY: 10,
                        spacingX: 10,
                        pt: 16,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListFade, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(TopArtists, {
                                    artists: data.artists.items
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CurrentlyPlaying, {
                                    song: currentlyPlaying
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TopSongs, {
                                    songs: data.songs.items
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(RecentSongs, {
                                    songs: data.recentlyPlayed.items
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
}
async function getStaticProps() {
    let error = null;
    let data = null;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}/api/get-spotify-data`);
        if (response.status !== 200) {
            error = `There was an error: ${response.status}`;
        } else {
            data = await response.json();
        }
    } catch (e) {
        console.error(e);
        error = 'There was an error fetching data from spotify';
    }
    return {
        props: {
            data,
            error,
            revalidate: 60
        }
    };
}
/* harmony default export */ const spotify = (Spotify);


/***/ }),

/***/ 2241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675], () => (__webpack_exec__(2036)));
module.exports = __webpack_exports__;

})();