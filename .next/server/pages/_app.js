"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/components/Loader/Loader.tsx

const Loader = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "loading-wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "loading-card",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "loading-loader",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                ]
            })
        })
    }));
};
/* harmony default export */ const Loader_Loader = (Loader);

;// CONCATENATED MODULE: ./src/components/Loader/index.ts


// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: external "next-plausible"
const external_next_plausible_namespaceObject = require("next-plausible");
var external_next_plausible_default = /*#__PURE__*/__webpack_require__.n(external_next_plausible_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Animations/Animation.tsx



const UpDown = ({ children , type  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.div, {
        overflow: "hidden",
        position: "absolute",
        className: // eslint-disable-next-line no-nested-ternary
        type === `wide` ? `UpDownWideAnimation` : type === `slow` ? `UpDownSlowAnimation` : `UpDownAnimation`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -500,
        children: children
    }));
};
/* harmony default export */ const Animation = (UpDown);

;// CONCATENATED MODULE: ./src/components/Animations/index.ts


;// CONCATENATED MODULE: ./src/components/SVG/SVG.tsx


const icons = {
    triangle: {
        shape: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
            strokeWidth: "1px",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "14.921,2.27 28.667,25.5 1.175,25.5 "
        }),
        viewBox: `0 0 30 30`
    },
    circle: {
        shape: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"
        }),
        viewBox: `0 0 30 30`
    },
    box: {
        shape: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"
        }),
        viewBox: `0 0 30 30`
    },
    hexa: {
        shape: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "27.5,21.904 15,28.809 2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
        }),
        viewBox: `0 0 30 30`
    }
};
const SVG = ({ stroke =false , color =`${[
    `gray`,
    `brand`,
    `teal`,
    `blue`,
    `green`
][Math.floor(Math.random() * 6)]}.${// eslint-disable-next-line react-hooks/rules-of-hooks
(0,react_.useColorModeValue)([
    `500`,
    `600`,
    `700`,
    `800`,
    `900`
], [
    `50`,
    `100`,
    `200`,
    `300`,
    `400`
])[Math.floor(Math.random() * 5)]}` , zIndex =-500 , width , icon , left , top , hiddenMobile =false  })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.svg, {
        sx: {
            position: `absolute`,
            stroke: stroke ? `currentColor` : `none`,
            fill: stroke ? `none` : `currentColor`,
            display: hiddenMobile ? {
                base: `none`,
                md: `block`
            } : `block`,
            overflow: `visible`,
            color,
            zIndex,
            width,
            left,
            top,
            filter: `blur(8px) saturate(160%)`
        },
        viewBox: icons[icon].viewBox,
        children: icons[icon].shape
    })
;
/* harmony default export */ const SVG_SVG = (SVG);

;// CONCATENATED MODULE: ./src/components/SVG/index.ts


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./src/components/NavBar/ToggleTheme.tsx



const ToggleTheme = ()=>{
    const text = (0,react_.useColorModeValue)('dark', 'light');
    const SwitchIcon = (0,react_.useColorModeValue)(bi_.BiMoon, bi_.BiSun);
    const { toggleColorMode: toggleMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
        mr: {
            base: 2,
            md: 0
        },
        size: "md",
        fontSize: "lg",
        "aria-label": `Switch to ${text} mode`,
        title: `Switch to ${text} mode`,
        variant: "ghost",
        onClick: toggleMode,
        colorScheme: "brand",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(SwitchIcon, {
            size: 25
        })
    }));
};
/* harmony default export */ const NavBar_ToggleTheme = (ToggleTheme);

;// CONCATENATED MODULE: ./src/components/NavBar/MobileNav.tsx






function MobileNav({ links  }) {
    const mobileNav = (0,react_.useDisclosure)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        display: {
            md: `none`
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar_ToggleTheme, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "toggle menu",
                icon: mobileNav.isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(react_.CloseButton, {
                    style: {
                        zIndex: 20
                    },
                    "aria-label": "Close menu"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMenu, {
                    size: "1.5em"
                }),
                variant: "ghost",
                onClick: mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                pos: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                css: {
                    backdropFilter: `saturate(180%) blur(5px)`,
                    backgroundColor: (0,react_.useColorModeValue)(`rgba(255, 255, 255, 0.9)`, `rgba(26, 32, 44, 0.9)`)
                },
                display: mobileNav.isOpen ? `flex` : `none`,
                flexDirection: "column",
                spacing: 3,
                rounded: "sm",
                shadow: "sm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            as: react_.Link,
                            w: "full",
                            mt: 16,
                            variant: "ghost",
                            children: "Home"
                        })
                    }),
                    links.map((link, index)=>{
                        if (link.type === `dropdown`) {
                            return link.links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: item.link,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: react_.Link,
                                        w: "full",
                                        mx: 2,
                                        variant: "ghost",
                                        children: item.name
                                    }, i.toString())
                                }, `${i.toString()}link`)
                            );
                        }
                        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: link.link,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: react_.Link,
                                w: "full",
                                mx: 2,
                                variant: "ghost",
                                children: link.name
                            }, index.toString())
                        }, `${index.toString()}link`));
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const NavBar_MobileNav = (MobileNav);

// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(429);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./src/components/NavBar/DesktopNav.tsx







function DesktopNav({ links  }) {
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: 8,
        display: {
            base: `none`,
            md: `flex`
        },
        children: [
            links.map((linkItem, index)=>{
                if (linkItem.type !== `dropdown`) {
                    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: linkItem.link,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            color: colorMode === 'light' ? `gray.800` : `white`,
                            fontSize: "lg",
                            fontWeight: "semibold",
                            position: "relative",
                            textTransform: "capitalize",
                            _after: {
                                transition: `all 0.25s ease-in-out`,
                                content: `''`,
                                /* Fixes anti-aliasing issue in chrome that leaves one pixel' */ outline: `1px solid transparent`,
                                width: `0%`,
                                height: `25%`,
                                position: `absolute`,
                                bottom: 1,
                                left: 0,
                                bg: colorMode === 'light' ? (0,theme_tools_.transparentize)(`brand.500`, 0.46) : (0,theme_tools_.transparentize)(`brand.500`, 0.36),
                                zIndex: -1
                            },
                            _hover: {
                                _after: {
                                    width: `100%`
                                }
                            },
                            children: linkItem.name
                        }, index.toString())
                    }, index.toString()));
                }
                if (linkItem.type === `dropdown`) {
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuButton, {
                                color: colorMode === 'light' ? `gray.800` : `white`,
                                fontSize: "lg",
                                fontWeight: "semibold",
                                position: "relative",
                                textTransform: "capitalize",
                                _after: {
                                    transition: `all 0.25s ease-in-out`,
                                    content: `''`,
                                    /* Fixes anti-aliasing issue in chrome that leaves one pixel' */ outline: `1px solid transparent`,
                                    width: `0%`,
                                    height: `25%`,
                                    position: `absolute`,
                                    bottom: 1,
                                    left: 0,
                                    bg: colorMode === 'light' ? (0,theme_tools_.transparentize)(`brand.500`, 0.46) : (0,theme_tools_.transparentize)(`brand.500`, 0.36),
                                    zIndex: -1
                                },
                                _hover: {
                                    _after: {
                                        width: `75%`
                                    },
                                    color: colorMode === 'light' ? `gray.800` : `white`
                                },
                                children: [
                                    linkItem.name,
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                        as: icons_.ChevronDownIcon
                                    })
                                ]
                            }, index.toString()),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuList, {
                                children: linkItem.links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: item.link,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            as: "a",
                                            sx: {
                                                cursor: `pointer`
                                            },
                                            children: item.name
                                        }, i.toString())
                                    }, `${i.toString()}MenuLink`)
                                )
                            })
                        ]
                    }, index.toString()));
                }
                return null;
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                spacing: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavBar_ToggleTheme, {})
            })
        ]
    }));
}
/* harmony default export */ const NavBar_DesktopNav = (DesktopNav);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/hooks/useScrollPosition.hook.tsx

function useScrollPosition() {
    const { 0: scrollPosition , 1: setScrollPosition  } = (0,external_react_.useState)({
        y: 0,
        max: 0
    });
    const handleScroll = (e)=>{
        const { target  } = e;
        const { scrollingElement  } = target;
        const { scrollTop , scrollHeight , clientHeight  } = scrollingElement;
        setScrollPosition({
            y: scrollTop,
            max: scrollHeight - clientHeight
        });
    };
    (0,external_react_.useEffect)(()=>{
        window === null || window === void 0 ? void 0 : window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>{
            window === null || window === void 0 ? void 0 : window.removeEventListener('scroll', handleScroll);
        };
    }, [
        scrollPosition
    ]);
    return {
        y: scrollPosition.y,
        max: scrollPosition.max
    };
};

;// CONCATENATED MODULE: ./src/components/NavBar/Nav.tsx











const links = [
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: `Projects`,
        link: `/projects`
    },
    //   {
    //     name: `Research`,
    //     link: `/research`,
    //   },
    {
        type: `dropdown`,
        name: `Other`,
        links: [
            {
                name: `Tools`,
                link: `/tools`
            },
            {
                name: `Links`,
                link: `/links`
            }, 
        ]
    }, 
];
function Nav() {
    const router = (0,router_.useRouter)();
    const { colorMode  } = (0,react_.useColorMode)();
    const { 0: width , 1: setWidth  } = (0,external_react_.useState)(0);
    const { y , max  } = useScrollPosition();
    const { pathname  } = (0,router_.useRouter)();
    const blogPage = pathname === '/blog/[slug]';
    (0,external_react_.useEffect)(()=>{
        if (blogPage) {
            const newWidth = y / max;
            if (newWidth !== width) {
                setWidth(newWidth * 100);
            }
        }
    }, [
        y,
        max,
        width,
        blogPage
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.header, {
        width: "full",
        position: "fixed",
        _before: {
            transition: 'all 0.10s',
            transitionTimingFunction: '1 100 10 10',
            content: '""',
            width: width + '%',
            top: 0,
            left: 0,
            height: '6px',
            bg: (0,react_.useColorModeValue)('brand.500', 'brand.300'),
            position: 'absolute',
            zIndex: 9999
        },
        top: 0,
        left: 0,
        zIndex: 10,
        bg: (0,react_.useColorModeValue)(`rgba(255, 255, 255, 0.8)`, `rgba(26, 33, 41, 0.8)`),
        sx: {
            backdropFilter: `saturate(180%) blur(5px)`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.nav, {
            mx: "auto",
            p: 3,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                margin: "auto",
                justifyContent: "space-between",
                alignContent: "center",
                maxW: "7xl",
                width: "full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        display: "flex",
                        alignContent: "center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            passHref: true,
                            children: router.asPath === '/' ? /*#__PURE__*/ jsx_runtime_.jsx(AnimatedTitle, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                fontSize: "lg",
                                margin: "auto",
                                fontWeight: "semibold",
                                position: "relative",
                                textTransform: "capitalize",
                                _after: {
                                    transition: `all 0.25s ease-in-out`,
                                    content: `''`,
                                    /* Fixes anti-aliasing issue in chrome that leaves one pixel' */ outline: `1px solid transparent`,
                                    width: `0%`,
                                    height: `25%`,
                                    position: `absolute`,
                                    bottom: 1,
                                    left: 0,
                                    bg: colorMode === 'light' ? (0,theme_tools_.transparentize)(`brand.500`, 0.46) : (0,theme_tools_.transparentize)(`brand.500`, 0.36),
                                    zIndex: -1
                                },
                                _hover: {
                                    _after: {
                                        width: `100%`
                                    },
                                    color: colorMode === 'light' ? `gray.900` : `white`
                                },
                                color: colorMode === 'light' ? 'gray.900' : 'white',
                                children: "Michael Hall"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar_MobileNav, {
                        links: links
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar_DesktopNav, {
                        links: links
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const NavBar_Nav = (Nav);
const AnimatedTitle = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomChakraLink, {
        color: (0,react_.useColorModeValue)('gray.900', 'white'),
        position: "relative",
        fontSize: "2xl",
        fontWeight: "semibold",
        textAlign: "center",
        children: [
            "Michael Hall",
            /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.svg, {
                className: "path-under",
                position: "absolute",
                height: "27px",
                bottom: '-14px',
                left: '-15px',
                transition: 'all 0.2s',
                transitionTimingFunction: "spring(1 10 10 10)",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 265 43",
                fill: "none",
                stroke: (0,react_.useColorModeValue)('brand.600', 'brand.300'),
                strokeWidth: "5px",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    className: "animated-underline",
                    d: "M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"
                })
            })
        ]
    })
;
const CustomChakraLink = styled_default()(react_.Link)`
  &:hover {
    text-decoration: none;
  }
  &:hover .path-under {
    transform: translateY(6px);
  }
`;

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/Footer/SocialIcons.tsx



const SocialIcons = ({ children , href , label  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
        label: label,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.chakra.button, {
            bg: (0,react_.useColorModeValue)(`blackAlpha.100`, `whiteAlpha.100`),
            rounded: "full",
            w: 8,
            h: 8,
            cursor: "pointer",
            as: "a",
            href: href,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease",
            _hover: {
                bg: (0,react_.useColorModeValue)(`blackAlpha.200`, `whiteAlpha.200`)
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                    children: label
                }),
                children
            ]
        })
    }));
};
/* harmony default export */ const Footer_SocialIcons = (SocialIcons);

;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx







const Footer = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const { error , data: currentlyPlaying  } = (0,external_react_query_.useQuery)(`currentlyPlaying`, ()=>fetch(`/api/get-now-playing`).then((res)=>res.json()
        )
    , {
        refetchOnMount: true
    });
    var ref;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: (0,react_.useColorModeValue)(`gray.50`, `gray.900`),
        color: (0,react_.useColorModeValue)(`gray.700`, `gray.200`),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
            columns: {
                base: 1,
                md: 3
            },
            gridTemplate: {
                base: `1fr`,
                md: `1fr 1fr 1fr`
            },
            mx: "auto",
            maxW: "7xl",
            py: 4,
            px: 5,
            spacing: 4,
            align: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    direction: "row",
                    maxW: "full",
                    mx: {
                        base: `auto`,
                        md: 5
                    },
                    alignItems: "center",
                    children: [
                        (currentlyPlaying === null || currentlyPlaying === void 0 ? void 0 : currentlyPlaying.isPlaying) ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                            h: 4,
                            w: 4,
                            viewBox: "0 0 168 168",
                            color: "brand.500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "currentColor",
                                d: "M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                            color: "brand.500",
                            boxSize: "1.4em",
                            as: bs_.BsPauseFill
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            ml: 2,
                            isTruncated: true,
                            children: [
                                (currentlyPlaying === null || currentlyPlaying === void 0 ? void 0 : currentlyPlaying.songUrl) ? /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.a, {
                                    color: colorMode === 'light' ? `gray.900` : `gray.200`,
                                    fontSize: "md",
                                    fontWeight: "semibold",
                                    maxW: "60%",
                                    isTruncated: true,
                                    href: currentlyPlaying.songUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: currentlyPlaying.name
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.p, {
                                    color: colorMode === 'light' ? `gray.900` : `gray.200`,
                                    fontSize: "md",
                                    maxW: "60%",
                                    isTruncated: true,
                                    fontWeight: "semibold",
                                    children: error ? `There was an error` : `Not Playing`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.span, {
                                    mx: 2,
                                    color: (0,react_.useColorModeValue)(`gray.600`, `gray.300`),
                                    display: {
                                        base: `hidden`,
                                        sm: `block`
                                    },
                                    children: ` – `
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.p, {
                                    color: "gray.600",
                                    isTruncated: true,
                                    maxW: "full",
                                    children: (ref = currentlyPlaying === null || currentlyPlaying === void 0 ? void 0 : currentlyPlaying.artist) !== null && ref !== void 0 ? ref : `Spotify`
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                    display: "flex",
                    alignSelf: "center",
                    mx: "auto",
                    children: [
                        "Built with:",
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                            label: "NextJS",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "https://nextjs.org/",
                                display: "flex",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                    color: (0,react_.useColorModeValue)(`gray.800`, `white`),
                                    viewBox: "0 0 256 256",
                                    my: "auto",
                                    mx: 1,
                                    alignSelf: "center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z",
                                        fill: "currentColor"
                                    })
                                })
                            })
                        }),
                        "/",
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                            label: "TypeScript",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "https://www.typescriptlang.org/",
                                display: "flex",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Icon, {
                                    color: (0,react_.useColorModeValue)(`gray.800`, `white`),
                                    viewBox: "0 0 512 512",
                                    my: "auto",
                                    mx: 1,
                                    alignSelf: "center",
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
                                            d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z",
                                            fill: (0,react_.useColorModeValue)(`white`, `gray.800`)
                                        })
                                    ]
                                })
                            })
                        }),
                        "/",
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                            label: "Chakra-UI",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                href: "https://chakra-ui.com/",
                                display: "flex",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Icon, {
                                    color: (0,react_.useColorModeValue)(`gray.800`, `white`),
                                    viewBox: "0 0 256 256",
                                    my: "auto",
                                    mx: 1,
                                    alignSelf: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            width: "256",
                                            height: "256",
                                            rx: "128.5",
                                            fill: "currentColor"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z",
                                            fill: (0,react_.useColorModeValue)(`white`, `gray.800`)
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: "row",
                    spacing: 6,
                    ml: "auto",
                    mr: {
                        base: `auto`,
                        md: 5
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer_SocialIcons, {
                            label: "GitHub",
                            href: "https://github.com/mah51/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer_SocialIcons, {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/in/michael-hall-86616b17b/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer_SocialIcons, {
                            label: "Email",
                            href: "mailto:michael.hall17@icloud.com",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineMail, {})
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/AppLayout/AppLayout.tsx









const AppLayout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                canonical: `https://www.mikeroph.one/${router.asPath}`,
                openGraph: {
                    url: `https://www.mikeroph.one/${router.asPath}`
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Animation, {
                type: "normal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "triangle",
                        width: 48,
                        stroke: true,
                        left: "10%",
                        top: "20%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "hexa",
                        width: 48,
                        stroke: true,
                        left: "60%",
                        top: "70%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "box",
                        width: 6,
                        left: "60%",
                        top: "15%"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Animation, {
                type: "wide",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "triangle",
                        width: 24,
                        stroke: true,
                        left: "65%",
                        top: "8%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "triangle",
                        width: 12,
                        stroke: true,
                        left: "90%",
                        top: "50%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "triangle",
                        width: 16,
                        stroke: true,
                        left: "30%",
                        top: "65%"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Animation, {
                type: "slow",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "circle",
                        width: 20,
                        hiddenMobile: true,
                        left: "85%",
                        top: "25%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "circle",
                        hiddenMobile: true,
                        stroke: true,
                        width: 24,
                        left: "5%",
                        top: "70%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "circle",
                        width: 6,
                        left: "4%",
                        top: "20%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SVG_SVG, {
                        icon: "circle",
                        width: 12,
                        left: "50%",
                        top: "60%",
                        color: "gray.100"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar_Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                bg: (0,react_.useColorModeValue)(`rgba(255, 255, 255, 0.8)`, `rgba(26, 33, 42, 0.8)`),
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    }));
};
/* harmony default export */ const AppLayout_AppLayout = (AppLayout);

;// CONCATENATED MODULE: ./src/components/AppLayout/index.ts


;// CONCATENATED MODULE: ./src/theme/index.ts


// 2. Call `extendTheme` and pass your custom values
const theme = (0,react_.extendTheme)({
    config: {
        useSystemColorMode: true
    },
    components: {
        Link: {
            baseStyle: (props)=>({
                    color: (0,theme_tools_.mode)('brand.600', 'brand.300')(props)
                })
        },
        Heading: {
            baseStyle: {
                fontFamily: 'Ubuntu'
            }
        },
        Text: {
            baseStyle: {
                fontFamily: 'Ubuntu'
            }
        },
        Button: {
            variants: {
                ghostAlwaysOn: (props)=>{
                    const darkBg = (0,theme_tools_.transparentize)(`${props.colorScheme}.200`, 0.12)(props.theme);
                    const darkHoverBg = (0,theme_tools_.transparentize)(`${props.colorScheme}.200`, 0.24)(props.theme);
                    const darkActiveBg = (0,theme_tools_.transparentize)(`${props.colorScheme}.200`, 0.36)(props.theme);
                    return {
                        color: (0,theme_tools_.mode)(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
                        bgColor: props.colorMode === 'light' ? `${props.colorScheme}.50` : darkBg,
                        _hover: {
                            bgColor: (0,theme_tools_.mode)(`${props.colorScheme}.100`, darkHoverBg)(props)
                        },
                        _active: {
                            bgColor: (0,theme_tools_.mode)(`${props.colorScheme}.200`, darkActiveBg)(props)
                        }
                    };
                }
            }
        }
    },
    styles: {
        global: (props)=>({
                '*': {
                    bg: 'none',
                    _selection: {
                        color: props.colorMode === `dark` ? `black` : `white`,
                        bg: props.colorMode === `dark` ? `brand.300` : `brand.600`
                    }
                }
            })
    },
    colors: {
        brand: {
            primary: `#47d185`,
            50: `#e1f7eb`,
            100: `#c4f0d8`,
            200: `#a7e9c5`,
            300: `#8ae1b1`,
            400: `#50d38b`,
            500: `#32cc77`,
            600: `#2bae66`,
            700: `#1d7444`,
            800: `#1d7444`,
            900: `#155733`
        }
    }
});
/* harmony default export */ const src_theme = (theme);

// EXTERNAL MODULE: ./src/components/MDXComponents/index.ts + 10 modules
var MDXComponents = __webpack_require__(2723);
;// CONCATENATED MODULE: external "@mdx-js/react"
const external_mdx_js_react_namespaceObject = require("@mdx-js/react");
;// CONCATENATED MODULE: ./pages/_app.tsx













const queryClient = new external_react_query_.QueryClient();
function MyApp({ Component , pageProps  }) {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        document.documentElement.lang = `en-GB`;
        const start = ()=>{
            setLoading(true);
        };
        const end = ()=>{
            setLoading(false);
        };
        router_default().events.on(`routeChangeStart`, start);
        router_default().events.on(`routeChangeComplete`, end);
        router_default().events.on(`routeChangeError`, end);
        return ()=>{
            router_default().events.off(`routeChangeStart`, start);
            router_default().events.off(`routeChangeComplete`, end);
            router_default().events.off(`routeChangeError`, end);
        };
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                defaultTitle: "Michael Hall",
                titleTemplate: "%s | Michael Hall",
                openGraph: {
                    title: `Michael Hall`,
                    type: `website`,
                    site_name: `Michael Hall`,
                    images: [
                        {
                            url: `https://www.mikeroph.one/static/images/profile.jpeg`,
                            alt: `Profile Picture`
                        }, 
                    ]
                },
                description: "The purpose of this site is for me to test things out & maybe show some things off."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                theme: src_theme,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_next_plausible_default()), {
                    domain: "mikeroph.one",
                    selfHosted: true,
                    trackOutboundLinks: true,
                    enabled: "production" === 'production',
                    customDomain: 'https://stats.mikeroph.one',
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
                        client: queryClient,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_mdx_js_react_namespaceObject.MDXProvider, {
                            components: MDXComponents/* default */.Z,
                            children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(Loader_Loader, {}) : /*#__PURE__*/ jsx_runtime_.jsx(AppLayout_AppLayout, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        })
                    })
                })
            })
        ]
    }));
};


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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,208,723], () => (__webpack_exec__(9817)));
module.exports = __webpack_exports__;

})();