"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles/Home.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


 // Asegúrate de crear un archivo CSS para los estilos
const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
                    children: "Vensat Reparaciones S.L."
                })
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                src: "ruta/a/tu/imagen.jpg" // Reemplaza con la ruta de la imagen
                ,
                alt: "Reparaciones de Electrodom\xe9sticos",
                className: "hero-image"
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                        children: "50 A\xf1os de Experiencia"
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                        children: "Bienvenido a Vensat Reparaciones S.L., tu taller de confianza para reparaciones de electrodom\xe9sticos. Con m\xe1s de 50 a\xf1os de experiencia, estamos afiliados a Electrolux, lo que nos permite ofrecer un servicio de alta calidad y soluciones efectivas para todos tus problemas de electrodom\xe9sticos."
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                        children: "Nuestro equipo de profesionales est\xe1 altamente capacitado y listo para ayudarte. Ofrecemos servicios de reparaci\xf3n, mantenimiento y asistencia t\xe9cnica, garantizando siempre la satisfacci\xf3n del cliente."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(656));
module.exports = __webpack_exports__;

})();