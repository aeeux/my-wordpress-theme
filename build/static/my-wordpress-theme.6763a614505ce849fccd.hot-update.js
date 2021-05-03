webpackHotUpdate("my-wordpress-theme",{

/***/ "./packages/twentytwenty-theme/src/components/navigation/navigation.js":
/*!*****************************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/navigation/navigation.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link */ \"./packages/twentytwenty-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */const Navigation=({state})=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavWrapper,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuNav,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Menu,{children:state.theme.menu.map(([name,link])=>{// Check if the link matched the current page url\nconst isCurrentPage=state.router.link===link;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuItem,{},name);})})})});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Navigation));const NavWrapper=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"div\", false?undefined:{target:\"e16mihj94\",label:\"NavWrapper\"})( false?undefined:{name:\"1vr7vmn\",styles:\"align-items:center;display:flex\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2aWdhdGlvbiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdldyYXBwZXI+XG4gICAgPE1lbnVOYXY+XG4gICAgICA8TWVudT5cbiAgICAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlua1xuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9NZW51TGluaz4gKi99XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51PlxuICAgIDwvTWVudU5hdj5cbiAgPC9OYXZXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZpZ2F0aW9uKTtcblxuY29uc3QgTmF2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBNZW51TmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyNzdlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xuICB9XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuOHJlbSAwIDAgMS42cmVtICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbjogMC44cmVtIDAgMCAyLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlcixcbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuNav=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"nav\", false?undefined:{target:\"e16mihj93\",label:\"MenuNav\"})( false?undefined:{name:\"j18e95\",styles:\"display:none;@media (min-width: 1000px){display:block;width:100%;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2aWdhdGlvbiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdldyYXBwZXI+XG4gICAgPE1lbnVOYXY+XG4gICAgICA8TWVudT5cbiAgICAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlua1xuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9NZW51TGluaz4gKi99XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51PlxuICAgIDwvTWVudU5hdj5cbiAgPC9OYXZXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZpZ2F0aW9uKTtcblxuY29uc3QgTmF2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBNZW51TmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyNzdlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xuICB9XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuOHJlbSAwIDAgMS42cmVtICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbjogMC44cmVtIDAgMCAyLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlcixcbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Menu=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"ul\", false?undefined:{target:\"e16mihj92\",label:\"Menu\"})( false?undefined:{name:\"14v7blj\",styles:\"display:flex;font-size:1.8rem;font-weight:500;letter-spacing:-0.0277em;flex-wrap:wrap;justify-content:flex-end;list-style:none;margin:0;@media (min-width: 1220px){margin-top:-0.8rem;margin-right:0px;margin-bottom:0px;margin-left:-2.5rem;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3NCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2aWdhdGlvbiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdldyYXBwZXI+XG4gICAgPE1lbnVOYXY+XG4gICAgICA8TWVudT5cbiAgICAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlua1xuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9NZW51TGluaz4gKi99XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51PlxuICAgIDwvTWVudU5hdj5cbiAgPC9OYXZXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZpZ2F0aW9uKTtcblxuY29uc3QgTmF2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBNZW51TmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyNzdlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xuICB9XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuOHJlbSAwIDAgMS42cmVtICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbjogMC44cmVtIDAgMCAyLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlcixcbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuItem=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"li\", false?undefined:{target:\"e16mihj91\",label:\"MenuItem\"})( false?undefined:{name:\"y7j7sc\",styles:\"font-size:inherit;line-height:1.25;position:relative;margin:0.8rem 0 0 1.6rem!important;@media (min-width: 1220px){margin:0.8rem 0 0 2.5rem!important;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRTBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2aWdhdGlvbiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdldyYXBwZXI+XG4gICAgPE1lbnVOYXY+XG4gICAgICA8TWVudT5cbiAgICAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlua1xuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9NZW51TGluaz4gKi99XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51PlxuICAgIDwvTWVudU5hdj5cbiAgPC9OYXZXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZpZ2F0aW9uKTtcblxuY29uc3QgTmF2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBNZW51TmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyNzdlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xuICB9XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuOHJlbSAwIDAgMS42cmVtICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbjogMC44cmVtIDAgMCAyLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlcixcbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuLink=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], false?undefined:{target:\"e16mihj90\",label:\"MenuLink\"})( false?undefined:{name:\"i37uke\",styles:\"display:block;line-height:1.2;text-decoration:none;&:hover,&[aria-current=\\\"page\\\"]{text-decoration:underline;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RTZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQW5kcmVcXERlc2t0b3BcXHdlYnNpdGVzXFxteS13b3JkcHJlc3MtdGhlbWVcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2aWdhdGlvbiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdldyYXBwZXI+XG4gICAgPE1lbnVOYXY+XG4gICAgICA8TWVudT5cbiAgICAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICAgICAgey8qIDxNZW51TGlua1xuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9NZW51TGluaz4gKi99XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51PlxuICAgIDwvTWVudU5hdj5cbiAgPC9OYXZXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZpZ2F0aW9uKTtcblxuY29uc3QgTmF2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBNZW51TmF2ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyNzdlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xuICB9XG5gO1xuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZC5saWBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuOHJlbSAwIDAgMS42cmVtICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMjBweCkge1xuICAgIG1hcmdpbjogMC44cmVtIDAgMCAyLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlcixcbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzPzljNzYiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInN0YXRlIiwidGhlbWUiLCJtZW51IiwibWFwIiwibmFtZSIsImxpbmsiLCJpc0N1cnJlbnRQYWdlIiwicm91dGVyIiwiY29ubmVjdCIsIk5hdldyYXBwZXIiLCJNZW51TmF2IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpbmsiLCJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7cVJBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLEtBQU1BLFdBQVUsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUNqQix1RUFBQyxVQUFELFdBQ0UsdUVBQUMsT0FBRCxXQUNFLHVFQUFDLElBQUQsV0FDR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEdBQWpCLENBQXFCLENBQUMsQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQUQsR0FBa0IsQ0FDdEM7QUFDQSxLQUFNQyxjQUFhLENBQUdOLEtBQUssQ0FBQ08sTUFBTixDQUFhRixJQUFiLEdBQXNCQSxJQUE1QyxDQUNBLE1BQ0Usd0VBQUMsUUFBRCxJQUFlRCxJQUFmLENBREYsQ0FXRCxDQWRBLENBREgsRUFERixFQURGLEVBREYsQ0F3QmVJLHVIQUFPLENBQUNULFVBQUQsQ0FBdEIsRUFFQSxLQUFNVSxXQUFVLDRyR0FBaEIsQ0FLQSxLQUFNQyxRQUFPLDJ0R0FBYixDQVFBLEtBQU1DLEtBQUksbzRHQUFWLENBa0JBLEtBQU1DLFNBQVEsZ3pHQUFkLENBV0EsS0FBTUMsU0FBUSxDQUFHLG9FQUFNLENBQUNDLDZDQUFQLHdEQUFILG1wR0FBZCIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gKi9cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZXcmFwcGVyPlxuICAgIDxNZW51TmF2PlxuICAgICAgPE1lbnU+XG4gICAgICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluaztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgICAgIHsvKiA8TWVudUxpbmtcbiAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgIDwvTWVudUxpbms+ICovfVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudT5cbiAgICA8L01lbnVOYXY+XG4gIDwvTmF2V3JhcHBlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2aWdhdGlvbik7XG5cbmNvbnN0IE5hdldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgTWVudU5hdiA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgTWVudSA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMjc3ZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjIwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAtMC44cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIuNXJlbTtcbiAgfVxuYDtcblxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQubGlgXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjhyZW0gMCAwIDEuNnJlbSAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjIwcHgpIHtcbiAgICBtYXJnaW46IDAuOHJlbSAwIDAgMi41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIsXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/navigation/navigation.js\n");

/***/ })

})