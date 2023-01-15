"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 5208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* binding */ getTotalCharCode),
/* harmony export */   "Ox": () => (/* binding */ generateId),
/* harmony export */   "MX": () => (/* binding */ random),
/* harmony export */   "UP": () => (/* binding */ sample)
/* harmony export */ });
/* unused harmony exports range, clamp */
const range = (start, end, step = 1)=>{
    const output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for(let i = start; i < end; i += step){
        output.push(i);
    }
    return output;
};
const getTotalCharCode = (phrase)=>{
    return phrase.split('').reduce((a, c)=>a + c.charCodeAt(0)
    , 0);
};
const sampleOne = (arr)=>{
    return arr[Math.floor(Math.random() * arr.length)];
};
const generateId = (len = 4)=>{
    // prettier-ignore
    const characters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    return sample(characters, len).join('');
};
const random = (min, max)=>Math.floor(Math.random() * (max - min)) + min
;
const clamp = (val, min = 0, max = 1)=>Math.max(min, Math.min(max, val))
;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const sample = (arr, len = 1)=>{
    const output = [];
    for(let i = 0; i < len; i++){
        output.push(sampleOne(arr));
    }
    return output;
};



/***/ })

};
;