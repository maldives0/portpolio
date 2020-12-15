webpackHotUpdate_N_E("pages/admin",{

/***/ "./components/MessageList.js":
/*!***********************************!*\
  !*** ./components/MessageList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/url */ "./config/url.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\HOME\\Documents\\portpolio\\components\\MessageList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var MessageList = function MessageList() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_config_url__WEBPACK_IMPORTED_MODULE_7__["backUrl"], "/messages"), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  var columns = [{
    title: 'Key',
    dataIndex: 'key'
  }, {
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Email',
    dataIndex: 'email'
  }, {
    title: 'Message',
    dataIndex: 'message'
  }];
  var dataSource = data === null || data === void 0 ? void 0 : data.map(function (v) {
    return {
      key: v.id,
      name: v.name,
      email: v.email,
      message: v.message
    };
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      selectedRowKeys = _useState[0],
      setSelectedRowKeys = _useState[1];

  var onSelectChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (selectedRowKeys) {
    setSelectedRowKeys(selectedRowKeys);
  }, []);
  var onDelete = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/Object(C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var url;
    return C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = "".concat(_config_url__WEBPACK_IMPORTED_MODULE_7__["backUrl"], "/messages");
            mutate(url, data === null || data === void 0 ? void 0 : data.filter(function (c) {
              return c.id !== selectedRowKeys;
            }), false);
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("".concat(_config_url__WEBPACK_IMPORTED_MODULE_7__["backUrl"], "/messages/").concat(selectedRowKeys), {
              withCredentials: true
            });

          case 5:
            trigger(url);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  })), [selectedRowKeys]);
  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: function getCheckboxProps(record) {
      return {
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name
      };
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Table"], {
      rowSelection: _objectSpread({
        type: 'checkbox'
      }, rowSelection),
      columns: columns,
      dataSource: dataSource
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: onDelete,
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, _this);
};

_s(MessageList, "xfO3F9CvS8GLoZm6vDw6Pff/nMw=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = MessageList;
/* harmony default export */ __webpack_exports__["default"] = (MessageList);

var _c;

$RefreshReg$(_c, "MessageList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwiZGF0YVNvdXJjZSIsIm1hcCIsInYiLCJrZXkiLCJpZCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUm93S2V5cyIsInNldFNlbGVjdGVkUm93S2V5cyIsIm9uU2VsZWN0Q2hhbmdlIiwidXNlQ2FsbGJhY2siLCJvbkRlbGV0ZSIsIm11dGF0ZSIsImZpbHRlciIsImMiLCJ0cmlnZ2VyIiwiY29uc29sZSIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGdCQUNFQyxtREFBTSxXQUFJQyxtREFBSixnQkFBd0JWLE9BQXhCLENBRFI7QUFBQSxNQUNkTyxJQURjLFdBQ2RBLElBRGM7QUFBQSxNQUNSSSxLQURRLFdB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aW4uMTE0M2ExNmMzYjFjYzY5NmMzMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgVGFibGUsIERpdmlkZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL3VybCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuY29uc3QgTWVzc2FnZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vbWVzc2FnZXNgLCBmZXRjaGVyKTtcclxuXHJcblxyXG4gICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnS2V5JyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAna2V5JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOYW1lJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW1haWwnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVzc2FnZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ21lc3NhZ2UnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGRhdGE/Lm1hcCh2ID0+ICh7XHJcbiAgICAgICAga2V5OiB2LmlkLFxyXG4gICAgICAgIG5hbWU6IHYubmFtZSxcclxuICAgICAgICBlbWFpbDogdi5lbWFpbCxcclxuICAgICAgICBtZXNzYWdlOiB2Lm1lc3NhZ2UsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkUm93S2V5cywgc2V0U2VsZWN0ZWRSb3dLZXlzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IG9uU2VsZWN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHNlbGVjdGVkUm93S2V5cykgPT4ge1xyXG5cclxuICAgICAgICBzZXRTZWxlY3RlZFJvd0tleXMoc2VsZWN0ZWRSb3dLZXlzKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2JhY2tVcmx9L21lc3NhZ2VzYDtcclxuICAgICAgICAgICAgbXV0YXRlKHVybCwgZGF0YT8uZmlsdGVyKGMgPT4gYy5pZCAhPT0gc2VsZWN0ZWRSb3dLZXlzKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFja1VybH0vbWVzc2FnZXMvJHtzZWxlY3RlZFJvd0tleXN9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRyaWdnZXIodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NlbGVjdGVkUm93S2V5c10pO1xyXG5cclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBzZWxlY3RlZFJvd0tleXMsXHJcbiAgICAgICAgb25DaGFuZ2U6IG9uU2VsZWN0Q2hhbmdlLFxyXG4gICAgICAgIGdldENoZWNrYm94UHJvcHM6IChyZWNvcmQpID0+ICh7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ0Rpc2FibGVkIFVzZXInLFxyXG4gICAgICAgICAgICAvLyBDb2x1bW4gY29uZmlndXJhdGlvbiBub3QgdG8gYmUgY2hlY2tlZFxyXG4gICAgICAgICAgICBuYW1lOiByZWNvcmQubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAuLi5yb3dTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=