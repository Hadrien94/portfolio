"use strict";
exports.id = 723;
exports.ids = [723];
exports.modules = {

/***/ 2723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MDXComponents)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/LineHeading/index.ts + 1 modules
var LineHeading = __webpack_require__(2241);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(429);
;// CONCATENATED MODULE: ./src/components/MDXComponents/Definition.tsx



const Definition = ({ term , definition , link  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Tooltip, {
        placement: 'top',
        label: definition,
        hasArrow: true,
        bg: (0,external_chakra_ui_react_.useColorModeValue)('brand.50', '#314044'),
        color: (0,external_chakra_ui_react_.useColorModeValue)('brand.900', 'brand.200'),
        fontWeight: "semibold",
        fontSize: "md",
        py: 1,
        px: 2,
        borderRadius: 'lg',
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.chakra.span, {
            lineHeight: 3,
            as: link ? 'a' : 'span',
            href: link ? link : null,
            //@ts-expect-error transparentize tools return string, but types are not applicable.
            bg: (0,external_chakra_ui_react_.useColorModeValue)('brand.50', (0,theme_tools_.transparentize)('brand.200', 0.16)),
            borderRadius: 'md',
            _hover: {
                cursor: link ? 'pointer' : 'normal'
            },
            px: 2,
            pl: '18px',
            mr: '1px',
            position: "relative",
            verticalAlign: "middle",
            color: (0,external_chakra_ui_react_.useColorModeValue)('brand.900', 'brand.200'),
            fontWeight: "semibold",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.span, {
                    position: "absolute",
                    top: 0,
                    left: '6px',
                    transform: 'translateY(110%)',
                    height: "7px",
                    width: "7px",
                    borderRadius: "50%",
                    display: "inline-flex",
                    mr: 1,
                    my: 'auto',
                    verticalAlign: 'middle',
                    bg: (0,external_chakra_ui_react_.useColorModeValue)('brand.800', 'brand.200')
                }),
                term
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/MDXComponents/Aside.tsx




const colors = {
    positive: 'brand',
    negative: 'red',
    neutral: 'blue',
    warning: 'orange'
};
const Aside = ({ children , type , title , ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.chakra.aside, {
        position: "relative",
        py: '24px',
        mt: 4,
        mx: '-32px',
        borderRadius: "6px 6px 6px 3px",
        px: '32px',
        borderLeft: '4px solid',
        borderColor: (0,external_chakra_ui_react_.useColorModeValue)(`${colors[type]}.500`, `${colors[type]}.400`),
        //@ts-expect-error transparentize tools return string, but types are not applicable.
        bg: (0,external_chakra_ui_react_.useColorModeValue)(`${colors[type]}.100`, (0,theme_tools_.transparentize)(`${colors[type]}.300`, 0.18)),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.div, {
                bg: (0,external_chakra_ui_react_.useColorModeValue)('white', 'gray.800'),
                borderRadius: [
                    'warning',
                    'negative'
                ].includes(type) ? '25%' : '50%',
                top: 0,
                left: 0,
                position: 'absolute',
                transform: "translate(calc(-50% - 1.5px), -50%)",
                padding: '8px',
                margin: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.svg, {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32px",
                    height: "32px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: (0,external_chakra_ui_react_.useColorModeValue)(`${colors[type]}.500`, `${colors[type]}.400`),
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (()=>{
                        switch(type){
                            case 'neutral':
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "16",
                                            x2: "12",
                                            y2: "12"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "8",
                                            x2: "12.01",
                                            y2: "8"
                                        })
                                    ]
                                }));
                                break;
                            case 'positive':
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                            points: "22 4 12 14.01 9 11.01"
                                        })
                                    ]
                                }));
                                break;
                            case 'warning':
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "9",
                                            x2: "12",
                                            y2: "13"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "17",
                                            x2: "12.01",
                                            y2: "17"
                                        })
                                    ]
                                }));
                            case 'negative':
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "20",
                                            height: "20",
                                            rx: "5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "8",
                                            x2: "16",
                                            y1: "8",
                                            y2: "16"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x2: "8",
                                            x1: "16",
                                            y1: "8",
                                            y2: "16"
                                        })
                                    ]
                                }));
                            default:
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "16",
                                            x2: "12",
                                            y2: "12"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "8",
                                            x2: "12.01",
                                            y2: "8"
                                        })
                                    ]
                                }));
                        }
                    })()
                })
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Heading, {
                as: 'h6',
                fontSize: 'xl',
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                mt: 2,
                children: children
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/MDXComponents/MDXComponents.tsx










const CustomLink = (props)=>{
    const { colorMode  } = (0,external_chakra_ui_react_.useColorMode)();
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternalLink) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            /*#__PURE__*/ passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
                width: "calc(100% + 28px)",
                position: "absolute",
                ml: '-0.7em',
                height: "full",
                maxW: "700px",
                ...props,
                cursor: "pointer",
                _after: {
                    content: "'#'",
                    visibility: 'hidden',
                    color: colorMode === 'light' ? 'gray.400' : 'gray.600'
                },
                _hover: {
                    _after: {
                        visibility: 'visible',
                        textDecoration: 'none'
                    }
                }
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Link, {
        _hover: {
            textDecoration: 'none'
        },
        color: colorMode === 'light' ? 'blue.600' : 'blue.200',
        target: "_blank",
        rel: "noopener noreferrer",
        ...props
    }));
};
const CustomImage = ({ alt , ratio , border , chakraWidth , layout , ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Flex, {
        direction: "column",
        my: 7,
        children: [
            ratio ? /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.AspectRatio, {
                width: chakraWidth || 'full',
                mx: 'auto',
                ratio: ratio,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    className: `${border && 'border'}`,
                    alt: alt,
                    layout: layout || 'fill',
                    ...props
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                className: `${border && 'border'}`,
                layout: layout || 'responsive',
                alt: alt,
                ...props
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "28ec687b091d29ea",
                children: ".border{border-radius:var(--chakra-radii-xl)}"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                textAlign: "center",
                fontWeight: 'semibold',
                mt: 2,
                color: (0,external_chakra_ui_react_.useColorModeValue)('gray.600', 'gray.400'),
                children: alt
            })
        ]
    }));
    ``;
};
const CustomTitle = (props)=>{
    const title = props.children[0].props.parentName;
    const titleSize = {
        h1: [
            '2xl',
            '4xl'
        ],
        h2: [
            'xl',
            '2xl'
        ],
        h3: [
            'lg',
            'xl'
        ],
        h4: [
            'md',
            'lg'
        ],
        h5: [
            'sm',
            'md'
        ],
        h6: 'sm'
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Flex, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LineHeading/* default */.Z, {
            as: title,
            fontSize: titleSize[title],
            mt: 5,
            ...props,
            children: props.children
        })
    }));
};
const CustomText = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
        fontSize: 'lg',
        mt: 4,
        children: children
    }));
};
const CustomUnorderedList = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.UnorderedList, {
        fontSize: "lg",
        spacing: '4px',
        mt: 3,
        children: children
    }));
};
const CustomListItem = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.ListItem, {
        color: (0,external_chakra_ui_react_.useColorModeValue)('brand.500', 'brand.300'),
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.span, {
            color: (0,external_chakra_ui_react_.useColorModeValue)('black', 'white'),
            children: children
        })
    }));
};
const Padding = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
        width: "full",
        height: "1px",
        ...props
    }));
};
const RemarkTitle = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.div, {
        mt: 8,
        mx: '-20px',
        px: '20px',
        py: 3,
        color: (0,external_chakra_ui_react_.useColorModeValue)('gray.800', 'gray.200'),
        borderTopRadius: 'xl',
        bg: (0,external_chakra_ui_react_.useColorModeValue)('gray.200', 'gray.700'),
        fontSize: "sm",
        fontFamily: 'mono',
        fontWeight: "bold",
        ...props
    }));
};
const CustomDiv = (props)=>{
    var ref;
    if (props === null || props === void 0 ? void 0 : (ref = props.className) === null || ref === void 0 ? void 0 : ref.includes('remark-code-title')) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(RemarkTitle, {
            ...props
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.div, {
        ...props
    }));
};
const CustomPre = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.pre, {
        ...props,
        borderRadius: "xl",
        mt: 8,
        mx: '-20px',
        pt: 5,
        pb: 3,
        px: '20px',
        bg: (0,external_chakra_ui_react_.useColorModeValue)('gray.100', 'gray.900'),
        color: (0,external_chakra_ui_react_.useColorModeValue)('gray.800', 'gray.50'),
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.div, {
            overflowX: 'scroll',
            pb: 2,
            sx: {
                scrollPaddingBottom: '10px',
                scrollbarColor: (0,external_chakra_ui_react_.useColorModeValue)('var(--chakra-colors-gray-300) var(--chakra-colors-gray-100)', 'var(--chakra-colors-gray-700) var(--chakra-colors-gray-900)'),
                scrollbarWidth: 'thin'
            },
            ...props
        })
    }));
};
const codeStyles = react_.css`
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: var(--chakra-colors-yellow-500);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--chakra-colors-yellow-500);
  }
`;
const lightCodeStyles = react_.css`
  ${codeStyles};
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.punctuation {
    color: var(--chakra-colors-gray-700);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--chakra-colors-pink-600);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--chakra-colors-blue-600);
  }

  .token.function,
  .token.class-name {
    color: var(--chakra-colors-brand-600);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--chakra-colors-purple-600);
  }
`;
const darkCodeStyles = react_.css`
  ${codeStyles};
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.punctuation {
    color: var(--chakra-colors-gray-300);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--chakra-colors-pink-300);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--chakra-colors-blue-300);
  }

  .token.function,
  .token.class-name {
    color: var(--chakra-colors-brand-300);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--chakra-colors-purple-300);
  }
`;
const CustomCode = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.chakra.code, {
        ...props,
        color: (0,external_chakra_ui_react_.useColorModeValue)('gray.800', 'gray.200'),
        bg: (0,external_chakra_ui_react_.useColorModeValue)('gray.100', 'gray.900'),
        css: (0,external_chakra_ui_react_.useColorModeValue)({
            ...lightCodeStyles
        }, {
            ...darkCodeStyles
        })
    }));
};
const TextColorMode = ()=>{
    const value = (0,external_chakra_ui_react_.useColorModeValue)('dark', 'light');
    return value;
};

;// CONCATENATED MODULE: ./src/hooks/useRandomInterval.hook.tsx

const random = (min, max)=>Math.floor(Math.random() * (max - min)) + min
;
const useRandomInterval = (callback, minDelay, maxDelay)=>{
    const timeoutId = external_react_default().useRef(null);
    const savedCallback = external_react_default().useRef(callback);
    external_react_default().useEffect(()=>{
        savedCallback.current = callback;
    });
    external_react_default().useEffect(()=>{
        const isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';
        if (isEnabled) {
            const handleTick = ()=>{
                const nextTickAt = random(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(()=>{
                    savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }
        return ()=>window.clearTimeout(timeoutId.current)
        ;
    }, [
        minDelay,
        maxDelay
    ]);
    const cancel = external_react_default().useCallback(function() {
        window.clearTimeout(timeoutId.current);
    }, []);
    return cancel;
};
/* harmony default export */ const useRandomInterval_hook = (useRandomInterval);

;// CONCATENATED MODULE: ./src/hooks/usePrefersReducedMotion.hook.tsx

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = "undefined" === 'undefined';
const getInitialState = ()=>{
    // For our initial server render, we won't know if the user
    // prefers reduced motion, but it doesn't matter. This value
    // will be overwritten on the client, before any animations
    // occur.
    return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = external_react_default().useState(getInitialState);
    external_react_default().useEffect(()=>{
        const mediaQueryList = window.matchMedia(QUERY);
        const listener = (event)=>{
            setPrefersReducedMotion(!event.matches);
        };
        mediaQueryList.addListener(listener);
        return ()=>{
            mediaQueryList.removeListener(listener);
        };
    }, []);
    return prefersReducedMotion;
}
/* harmony default export */ const usePrefersReducedMotion_hook = (usePrefersReducedMotion);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(5208);
;// CONCATENATED MODULE: ./src/components/UnstyledButton/UnstyledButton.tsx

/* harmony default export */ const UnstyledButton = ((styled_default()).button`
  display: ${(props)=>{
    return props.display || 'block';
}};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;

  &:focus {
    outline: 2px auto var(--color-primary);
    outline-offset: 2px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`);

;// CONCATENATED MODULE: ./src/components/UnstyledButton/index.ts


;// CONCATENATED MODULE: ./src/hooks/useIsOnScreen.hook.tsx

function useIsOnscreen(// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
elementRef, defaultState = false) {
    const [isOnscreen, setIsOnscreen] = external_react_default().useState(defaultState);
    external_react_default().useEffect(()=>{
        if (!elementRef.current) {
            return null;
        }
        const observer = new window.IntersectionObserver((entries)=>{
            const [entry] = entries;
            setIsOnscreen(entry.intersectionRatio > 0);
        });
        observer.observe(elementRef.current);
        return ()=>{
            observer.disconnect();
        };
    }, [
        elementRef
    ]);
    return isOnscreen;
};

;// CONCATENATED MODULE: ./src/components/Sparkles/Sparkles.tsx










const defaultGeneratePosition = (size)=>{
    const style = {};
    style.left = (0,utils/* random */.MX)(0, 100) + '%';
    style.zIndex = (0,utils/* sample */.UP)([
        1,
        3
    ])[0];
    if (Math.random() > 0.5) {
        style.top = size * 0.5;
    } else {
        style.bottom = -size * 0.5;
    }
    return style;
};
const generateSparkle = (colors, minSize, maxSize, generatePosition)=>{
    const size = (0,utils/* random */.MX)(minSize, maxSize);
    const sparkle = {
        id: (0,utils/* generateId */.Ox)(),
        color: (0,utils/* sample */.UP)(colors)[0],
        size,
        numOfPoints: 4,
        createdAt: Date.now(),
        style: generatePosition(size)
    };
    return sparkle;
};
const Sparkles = ({ rate =400 , variance =200 , minSize =10 , maxSize =20 , colors =[
    [
        '#FFC700',
        'var(--chakra-colors-yellow-300)'
    ],
    [
        '#FFC700',
        'var(--chakra-colors-yellow-300)'
    ],
    [
        'var(--chakra-colors-purple-500)',
        'var(--chakra-colors-purple-300)'
    ],
    [
        'var(--chakra-colors-brand-500)',
        'var(--chakra-colors-brand-300)'
    ],
    [
        'var(--chakra-colors-pink-500)',
        'var(--chakra-colors-pink-300)'
    ], 
] , children , isToggleable , style ={} , generatePosition =defaultGeneratePosition , delayBy =0 , ...delegated })=>{
    const [sparkles, setSparkles] = external_react_default().useState(()=>[]
    );
    const [hasDelayElapsed, setHasDelayElapsed] = external_react_default().useState(delayBy === 0);
    const [isEnabled, setIsEnabled] = external_react_default().useState(true);
    const ref = external_react_default().useRef();
    const isOnscreen = useIsOnscreen(ref);
    const prefersReducedMotion = usePrefersReducedMotion_hook();
    const shouldAnimate = hasDelayElapsed && !prefersReducedMotion;
    useRandomInterval_hook(()=>{
        if (!isOnscreen || !isEnabled) {
            return;
        }
        const sparkle = generateSparkle(colors, minSize, maxSize, generatePosition);
        const now = Date.now();
        const nextSparkles = sparkles.filter((sp)=>{
            const delta = now - sp.createdAt;
            return delta < 1000;
        });
        nextSparkles.push(sparkle);
        setSparkles(nextSparkles);
    }, shouldAnimate ? rate - variance : null, shouldAnimate ? rate + variance : null);
    external_react_default().useEffect(()=>{
        if (!delayBy) {
            return;
        }
        const timeoutId = window.setTimeout(()=>setHasDelayElapsed(true)
        , delayBy);
        return ()=>{
            window.clearTimeout(timeoutId);
        };
    }, [
        delayBy
    ]);
    const { colorMode  } = (0,external_chakra_ui_react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        ref: ref,
        as: isToggleable ? UnstyledButton : 'div',
        onClick: ()=>{
            if (!isToggleable) {
                return;
            }
            setIsEnabled(!isEnabled);
        },
        style: {
            ...style,
            cursor: isToggleable ? 'pointer' : 'default',
            textShadow: `0px 0px 10px ${(0,external_chakra_ui_react_.useColorModeValue)('var(--chakra-colors-white)', 'var(--chakra-colors-gray-800)')},
        1px 1px 3px ${(0,external_chakra_ui_react_.useColorModeValue)('var(--chakra-colors-white)', 'var(--chakra-colors-gray-800)')}`
        },
        ...delegated,
        children: [
            sparkles.map((sparkle)=>/*#__PURE__*/ jsx_runtime_.jsx(Sparkle, {
                    color: colorMode === 'light' ? sparkle.color[0] : sparkle.color[1] || sparkle.color[0],
                    size: sparkle.size,
                    numOfPoints: sparkle.numOfPoints,
                    style: sparkle.style
                }, sparkle.id)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(ChildWrapper, {
                children: children
            })
        ]
    }));
};
const Sparkle = ({ size , color , style , numOfPoints =4  })=>{
    const path = numOfPoints === 4 ? 'M92 0C92 0 96 63.4731 108.263 75.7365C120.527 88 184 92 184 92C184 92 118.527 98 108.263 108.263C98 118.527 92 184 92 184C92 184 86.4731 119 75.7365 108.263C65 97.5269 0 92 0 92C0 92 63.9731 87.5 75.7365 75.7365C87.5 63.9731 92 0 92 0Z' : 'M34 0C34 0 33.4886 20.0074 41.7749 26.3376C50.0612 32.6678 68 25.9737 68 25.9737C68 25.9737 49.7451 31.6449 46.58 41.8873C43.4149 52.1298 55.0132 68 55.0132 68C55.0132 68 44.2424 51.4976 34 51.4976C23.7576 51.4976 12.9868 68 12.9868 68C12.9868 68 24.5851 52.1298 21.42 41.8873C18.2549 31.6449 0 25.9737 0 25.9737C0 25.9737 17.9388 32.6678 26.2251 26.3376C34.5114 20.0074 34 0 34 0Z';
    return(/*#__PURE__*/ jsx_runtime_.jsx(SparkleWrapper, {
        style: style,
        children: /*#__PURE__*/ jsx_runtime_.jsx(SparkleSvg, {
            width: size,
            height: size,
            viewBox: "0 0 184 184",
            fill: "none",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: path,
                fill: color
            })
        })
    }));
};
const comeInOut = react_.keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
`;
const spin = react_.keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(200deg);
  }
`;
const Wrapper = styled_default()(UnstyledButton)`
  display: inline-block;
  position: relative;
  color: inherit;
`;
const SparkleWrapper = (styled_default()).span`
  position: absolute;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 1300ms forwards;
  }
`;
const SparkleSvg = (styled_default()).svg`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1400ms linear;
  }
`;
const ChildWrapper = (styled_default()).strong`
  position: relative;
  z-index: 2;
  font-weight: bold;
`;
/* harmony default export */ const Sparkles_Sparkles = (Sparkles);

;// CONCATENATED MODULE: ./src/components/Sparkles/index.ts


;// CONCATENATED MODULE: ./src/components/MDXComponents/index.ts



const titles = {};
new Array(6).fill('').forEach((x, i)=>{
    titles['h' + (i + 1).toString()] = CustomTitle;
});
const MDXComponents = {
    a: CustomLink,
    p: CustomText,
    ul: CustomUnorderedList,
    li: CustomListItem,
    pre: CustomPre,
    code: CustomCode,
    div: CustomDiv,
    VStack: external_chakra_ui_react_.VStack,
    Aside: Aside,
    Padding: Padding,
    Definition: Definition,
    Checkbox: external_chakra_ui_react_.Checkbox,
    TextColorMode: TextColorMode,
    Image: CustomImage,
    Sparkles: Sparkles_Sparkles,
    ...titles
};
/* harmony default export */ const components_MDXComponents = (MDXComponents);


/***/ })

};
;