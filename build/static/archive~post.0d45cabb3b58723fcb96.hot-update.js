webpackHotUpdate("archive~post",{

/***/ "./packages/twentytwenty-theme/src/components/post/post-categories.js":
/*!****************************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/post/post-categories.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_screen_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/screen-reader */ \"./packages/twentytwenty-theme/src/components/styles/screen-reader.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link */ \"./packages/twentytwenty-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const PostCategories=({categories})=>{// Remove empty or undefined categories\nconst postCategories=categories.filter(Boolean);if(postCategories.length===0){return null;}return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(EntryCategories,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_styles_screen_reader__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{children:\"Categories\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(EntryCategoriesInner,{children:postCategories.map(category=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(CategoryTag,{link:category.link,children:Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(category.name)},category.id))})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(PostCategories));const EntryCategories=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e13btr6x2\",label:\"EntryCategories\"})( false?undefined:{name:\"in1q1e\",styles:\"line-height:1.25;margin-bottom:2rem;@media (min-width: 700px){margin-bottom:3rem;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xccG9zdFxccG9zdC1jYXRlZ29yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbmRyZVxcRGVza3RvcFxcd2Vic2l0ZXNcXG15LXdvcmRwcmVzcy10aGVtZVxccGFja2FnZXNcXHR3ZW50eXR3ZW50eS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxwb3N0XFxwb3N0LWNhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSBcIi4uL3N0eWxlcy9zY3JlZW4tcmVhZGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG5jb25zdCBQb3N0Q2F0ZWdvcmllcyA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICAvLyBSZW1vdmUgZW1wdHkgb3IgdW5kZWZpbmVkIGNhdGVnb3JpZXNcbiAgY29uc3QgcG9zdENhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihCb29sZWFuKTtcblxuICBpZiAocG9zdENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbnRyeUNhdGVnb3JpZXM+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dD5DYXRlZ29yaWVzPC9TY3JlZW5SZWFkZXJUZXh0PlxuXG4gICAgICA8RW50cnlDYXRlZ29yaWVzSW5uZXI+XG4gICAgICAgIHtwb3N0Q2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPENhdGVnb3J5VGFnIGtleT17Y2F0ZWdvcnkuaWR9IGxpbms9e2NhdGVnb3J5Lmxpbmt9PlxuICAgICAgICAgICAge2RlY29kZShjYXRlZ29yeS5uYW1lKX1cbiAgICAgICAgICA8L0NhdGVnb3J5VGFnPlxuICAgICAgICApKX1cbiAgICAgIDwvRW50cnlDYXRlZ29yaWVzSW5uZXI+XG4gICAgPC9FbnRyeUNhdGVnb3JpZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3RDYXRlZ29yaWVzKTtcblxuY29uc3QgRW50cnlDYXRlZ29yaWVzID0gc3R5bGVkLmRpdmBcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuYDtcblxuY29uc3QgRW50cnlDYXRlZ29yaWVzSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IC0wLjVyZW0gMCAwIC0xcmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIG1hcmdpbjogLTFyZW0gMCAwIC0ycmVtO1xuICB9XG5gO1xuXG5jb25zdCBDYXRlZ29yeVRhZyA9IHN0eWxlZChMaW5rKWBcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMzY2NjY2NjdlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwIDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDFyZW0gMCAwIDJyZW07XG4gIH1cblxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDE1MG1zO1xuICA6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const EntryCategoriesInner=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e13btr6x1\",label:\"EntryCategoriesInner\"})( false?undefined:{name:\"15qk1og\",styles:\"justify-content:center;display:flex;flex-wrap:wrap;margin:-0.5rem 0 0 -1rem;@media (min-width: 700px){margin:-1rem 0 0 -2rem;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xccG9zdFxccG9zdC1jYXRlZ29yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDdUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbmRyZVxcRGVza3RvcFxcd2Vic2l0ZXNcXG15LXdvcmRwcmVzcy10aGVtZVxccGFja2FnZXNcXHR3ZW50eXR3ZW50eS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxwb3N0XFxwb3N0LWNhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSBcIi4uL3N0eWxlcy9zY3JlZW4tcmVhZGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG5jb25zdCBQb3N0Q2F0ZWdvcmllcyA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICAvLyBSZW1vdmUgZW1wdHkgb3IgdW5kZWZpbmVkIGNhdGVnb3JpZXNcbiAgY29uc3QgcG9zdENhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihCb29sZWFuKTtcblxuICBpZiAocG9zdENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbnRyeUNhdGVnb3JpZXM+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dD5DYXRlZ29yaWVzPC9TY3JlZW5SZWFkZXJUZXh0PlxuXG4gICAgICA8RW50cnlDYXRlZ29yaWVzSW5uZXI+XG4gICAgICAgIHtwb3N0Q2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPENhdGVnb3J5VGFnIGtleT17Y2F0ZWdvcnkuaWR9IGxpbms9e2NhdGVnb3J5Lmxpbmt9PlxuICAgICAgICAgICAge2RlY29kZShjYXRlZ29yeS5uYW1lKX1cbiAgICAgICAgICA8L0NhdGVnb3J5VGFnPlxuICAgICAgICApKX1cbiAgICAgIDwvRW50cnlDYXRlZ29yaWVzSW5uZXI+XG4gICAgPC9FbnRyeUNhdGVnb3JpZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3RDYXRlZ29yaWVzKTtcblxuY29uc3QgRW50cnlDYXRlZ29yaWVzID0gc3R5bGVkLmRpdmBcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuYDtcblxuY29uc3QgRW50cnlDYXRlZ29yaWVzSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IC0wLjVyZW0gMCAwIC0xcmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIG1hcmdpbjogLTFyZW0gMCAwIC0ycmVtO1xuICB9XG5gO1xuXG5jb25zdCBDYXRlZ29yeVRhZyA9IHN0eWxlZChMaW5rKWBcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMzY2NjY2NjdlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwIDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDFyZW0gMCAwIDJyZW07XG4gIH1cblxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDE1MG1zO1xuICA6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const CategoryTag=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], false?undefined:{target:\"e13btr6x0\",label:\"CategoryTag\"})( false?undefined:{name:\"100n8le\",styles:\"border-bottom:0.15rem solid currentColor;font-size:1.4rem;font-weight:700;letter-spacing:0.036666667em;margin:0.5rem 0 0 1rem;text-decoration:none;text-transform:uppercase;@media (min-width: 700px){font-size:1.5rem;margin:1rem 0 0 2rem;}transition:border-bottom-color 150ms;:hover{border-bottom-color:transparent;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xccG9zdFxccG9zdC1jYXRlZ29yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEZ0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbmRyZVxcRGVza3RvcFxcd2Vic2l0ZXNcXG15LXdvcmRwcmVzcy10aGVtZVxccGFja2FnZXNcXHR3ZW50eXR3ZW50eS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxwb3N0XFxwb3N0LWNhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFNjcmVlblJlYWRlclRleHQgZnJvbSBcIi4uL3N0eWxlcy9zY3JlZW4tcmVhZGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG5jb25zdCBQb3N0Q2F0ZWdvcmllcyA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICAvLyBSZW1vdmUgZW1wdHkgb3IgdW5kZWZpbmVkIGNhdGVnb3JpZXNcbiAgY29uc3QgcG9zdENhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihCb29sZWFuKTtcblxuICBpZiAocG9zdENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFbnRyeUNhdGVnb3JpZXM+XG4gICAgICA8U2NyZWVuUmVhZGVyVGV4dD5DYXRlZ29yaWVzPC9TY3JlZW5SZWFkZXJUZXh0PlxuXG4gICAgICA8RW50cnlDYXRlZ29yaWVzSW5uZXI+XG4gICAgICAgIHtwb3N0Q2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPENhdGVnb3J5VGFnIGtleT17Y2F0ZWdvcnkuaWR9IGxpbms9e2NhdGVnb3J5Lmxpbmt9PlxuICAgICAgICAgICAge2RlY29kZShjYXRlZ29yeS5uYW1lKX1cbiAgICAgICAgICA8L0NhdGVnb3J5VGFnPlxuICAgICAgICApKX1cbiAgICAgIDwvRW50cnlDYXRlZ29yaWVzSW5uZXI+XG4gICAgPC9FbnRyeUNhdGVnb3JpZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3RDYXRlZ29yaWVzKTtcblxuY29uc3QgRW50cnlDYXRlZ29yaWVzID0gc3R5bGVkLmRpdmBcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuYDtcblxuY29uc3QgRW50cnlDYXRlZ29yaWVzSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IC0wLjVyZW0gMCAwIC0xcmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIG1hcmdpbjogLTFyZW0gMCAwIC0ycmVtO1xuICB9XG5gO1xuXG5jb25zdCBDYXRlZ29yeVRhZyA9IHN0eWxlZChMaW5rKWBcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMzY2NjY2NjdlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwIDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDFyZW0gMCAwIDJyZW07XG4gIH1cblxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDE1MG1zO1xuICA6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LWNhdGVnb3JpZXMuanM/MDFhMiJdLCJuYW1lcyI6WyJQb3N0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJwb3N0Q2F0ZWdvcmllcyIsImZpbHRlciIsIkJvb2xlYW4iLCJsZW5ndGgiLCJtYXAiLCJjYXRlZ29yeSIsImxpbmsiLCJkZWNvZGUiLCJuYW1lIiwiaWQiLCJjb25uZWN0IiwiRW50cnlDYXRlZ29yaWVzIiwiRW50cnlDYXRlZ29yaWVzSW5uZXIiLCJDYXRlZ29yeVRhZyIsIkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7OztxUkFJQSxLQUFNQSxlQUFjLENBQUcsQ0FBQyxDQUFFQyxVQUFGLENBQUQsR0FBb0IsQ0FDekM7QUFDQSxLQUFNQyxlQUFjLENBQUdELFVBQVUsQ0FBQ0UsTUFBWCxDQUFrQkMsT0FBbEIsQ0FBdkIsQ0FFQSxHQUFJRixjQUFjLENBQUNHLE1BQWYsR0FBMEIsQ0FBOUIsQ0FBaUMsQ0FDL0IsTUFBTyxLQUFQLENBQ0QsQ0FFRCxNQUNFLHlFQUFDLGVBQUQsWUFDRSx1RUFBQyw2REFBRCx5QkFERixDQUdFLHVFQUFDLG9CQUFELFdBQ0dILGNBQWMsQ0FBQ0ksR0FBZixDQUFvQkMsUUFBRCxFQUNsQix1RUFBQyxXQUFELEVBQStCLElBQUksQ0FBRUEsUUFBUSxDQUFDQyxJQUE5QyxVQUNHQyx1REFBTSxDQUFDRixRQUFRLENBQUNHLElBQVYsQ0FEVCxFQUFrQkgsUUFBUSxDQUFDSSxFQUEzQixDQURELENBREgsRUFIRixHQURGLENBYUQsQ0FyQkQsQ0F1QmVDLHVIQUFPLENBQUNaLGNBQUQsQ0FBdEIsRUFFQSxLQUFNYSxnQkFBZSwrMkZBQXJCLENBU0EsS0FBTUMscUJBQW9CLGk2RkFBMUIsQ0FXQSxLQUFNQyxZQUFXLENBQUcsb0VBQU0sQ0FBQ0MsNkNBQVAsMkRBQUgsMjlGQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QtY2F0ZWdvcmllcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tIFwiLi4vc3R5bGVzL3NjcmVlbi1yZWFkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5cbmNvbnN0IFBvc3RDYXRlZ29yaWVzID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIC8vIFJlbW92ZSBlbXB0eSBvciB1bmRlZmluZWQgY2F0ZWdvcmllc1xuICBjb25zdCBwb3N0Q2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIGlmIChwb3N0Q2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVudHJ5Q2F0ZWdvcmllcz5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0PkNhdGVnb3JpZXM8L1NjcmVlblJlYWRlclRleHQ+XG5cbiAgICAgIDxFbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICAgICAge3Bvc3RDYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlUYWcga2V5PXtjYXRlZ29yeS5pZH0gbGluaz17Y2F0ZWdvcnkubGlua30+XG4gICAgICAgICAgICB7ZGVjb2RlKGNhdGVnb3J5Lm5hbWUpfVxuICAgICAgICAgIDwvQ2F0ZWdvcnlUYWc+XG4gICAgICAgICkpfVxuICAgICAgPC9FbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICA8L0VudHJ5Q2F0ZWdvcmllcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdENhdGVnb3JpZXMpO1xuXG5jb25zdCBFbnRyeUNhdGVnb3JpZXMgPSBzdHlsZWQuZGl2YFxuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG5gO1xuXG5jb25zdCBFbnRyeUNhdGVnb3JpZXNJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogLTAuNXJlbSAwIDAgLTFyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luOiAtMXJlbSAwIDAgLTJyZW07XG4gIH1cbmA7XG5cbmNvbnN0IENhdGVnb3J5VGFnID0gc3R5bGVkKExpbmspYFxuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzNjY2NjY2N2VtO1xuICBtYXJnaW46IDAuNXJlbSAwIDAgMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMXJlbSAwIDAgMnJlbTtcbiAgfVxuXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMTUwbXM7XG4gIDpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/post/post-categories.js\n");

/***/ })

})