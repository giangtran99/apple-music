(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 480:
/***/ ((module) => {

// Exports
module.exports = {
	"side-bar": "Layout_side-bar__hIUl2",
	"music-player": "Layout_music-player__8J_Zh",
	"main-content": "Layout_main-content__aecFS",
	"container": "Layout_container__nRe7b"
};


/***/ }),

/***/ 240:
/***/ ((module) => {

// Exports
module.exports = {
	"tab-element": "SideMenu_tab-element__C50mO"
};


/***/ }),

/***/ 507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layouts/MusicPlayer.tsx

function MusicPlayer() {
    const musics = [];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "this is audio"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/SearchBar.tsx

function SearchBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
// EXTERNAL MODULE: ./src/styles/SideMenu.module.css
var SideMenu_module = __webpack_require__(240);
var SideMenu_module_default = /*#__PURE__*/__webpack_require__.n(SideMenu_module);
;// CONCATENATED MODULE: ./src/layouts/SideMenu.tsx




const sideMenu = [
    {
        name: "Apple Music",
        childrens: [
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoPlayCircleOutline, {}),
                name: "Listen Now",
                url: "/"
            },
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoRadioOutline, {}),
                name: "Radio",
                url: "/music-tab/radio"
            }
        ]
    },
    {
        name: "Library",
        childrens: [
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoTimeOutline, {}),
                name: "Recently Added"
            },
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoTelescopeOutline, {}),
                name: "Artists"
            },
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoAlbumsOutline, {}),
                name: "Allbums"
            },
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoMusicalNoteOutline, {}),
                name: "Songs"
            }
        ]
    },
    {
        name: "Store",
        childrens: [
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoStarOutline, {}),
                name: "Itunes Store"
            }
        ]
    },
    {
        name: "Playlists",
        childrens: [
            {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoGridOutline, {}),
                name: "All Playlists"
            }
        ]
    }
];
function SideMenu() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {})
                }),
                sideMenu.map((menu)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        " * ",
                                        menu.name
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: menu.childrens.map((item, index)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: item.url,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (SideMenu_module_default())["tab-element"],
                                                        children: [
                                                            item.icon,
                                                            item.name
                                                        ]
                                                    })
                                                })
                                            }, index)
                                        });
                                    })
                                })
                            ]
                        })
                    });
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/styles/Layout.module.css
var Layout_module = __webpack_require__(480);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./src/layouts/Layout.tsx




function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Layout_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Layout_module_default())["side-bar"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SideMenu, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Layout_module_default())["music-player"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MusicPlayer, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: (Layout_module_default())["main-content"],
                    children: children
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



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
var __webpack_exports__ = (__webpack_exec__(507));
module.exports = __webpack_exports__;

})();