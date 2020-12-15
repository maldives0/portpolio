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

  if (error) {
    console.error(error);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: "\uB370\uC774\uD130 \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, _this);
  }

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
            Object(swr__WEBPACK_IMPORTED_MODULE_5__["mutate"])(url, data === null || data === void 0 ? void 0 : data.filter(function (c) {
              return c.id !== selectedRowKeys;
            }), false);
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("".concat(_config_url__WEBPACK_IMPORTED_MODULE_7__["backUrl"], "/messages/").concat(selectedRowKeys), {
              withCredentials: true
            });

          case 5:
            Object(swr__WEBPACK_IMPORTED_MODULE_5__["trigger"])(url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29uc29sZSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImRhdGFTb3VyY2UiLCJtYXAiLCJ2Iiwia2V5IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwidXNlU3RhdGUiLCJzZWxlY3RlZFJvd0tleXMiLCJzZXRTZWxlY3RlZFJvd0tleXMiLCJvblNlbGVjdENoYW5nZSIsInVzZUNhbGxiYWNrIiwib25EZWxldGUiLCJtdXRhdGUiLCJmaWx0ZXIiLCJjIiwidHJpZ2dlciIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGdCQUNFQyxtREFBTSxXQUFJQyxtREFBSixnQkFBd0JWLE9BQXhCLENBRFI7QUFBQSxNQUNkTyxJQURjLFdBQ2RBLElBRGM7QUFBQSxNQUNSSSxLQURRLFdB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QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0E1RUQ7O0dBQU1yQixXO1VBQ3NCQywyQzs7O0tBRHRCRCxXO0FBOEVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi5jY2ZlNDhmYWViYWM2ZDUzN2VlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUsIHRyaWdnZXIgfSBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyBUYWJsZSwgRGl2aWRlciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi9jb25maWcvdXJsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xyXG5jb25zdCBNZXNzYWdlTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS9tZXNzYWdlc2AsIGZldGNoZXIpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PuuNsOydtO2EsCDroZzrlKkg7KSRIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6Q8L2Rpdj4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0tleScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2tleScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VtYWlsJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnZW1haWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01lc3NhZ2UnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdtZXNzYWdlJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhPy5tYXAodiA9PiAoe1xyXG4gICAgICAgIGtleTogdi5pZCxcclxuICAgICAgICBuYW1lOiB2Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHYuZW1haWwsXHJcbiAgICAgICAgbWVzc2FnZTogdi5tZXNzYWdlLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZFJvd0tleXMsIHNldFNlbGVjdGVkUm93S2V5c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBvblNlbGVjdENoYW5nZSA9IHVzZUNhbGxiYWNrKChzZWxlY3RlZFJvd0tleXMpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFJvd0tleXMoc2VsZWN0ZWRSb3dLZXlzKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYWNrVXJsfS9tZXNzYWdlc2A7XHJcbiAgICAgICAgICAgIG11dGF0ZSh1cmwsIGRhdGE/LmZpbHRlcihjID0+IGMuaWQgIT09IHNlbGVjdGVkUm93S2V5cyksIGZhbHNlKTtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke2JhY2tVcmx9L21lc3NhZ2VzLyR7c2VsZWN0ZWRSb3dLZXlzfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0cmlnZ2VyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZWxlY3RlZFJvd0tleXNdKTtcclxuXHJcbiAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBvblNlbGVjdENoYW5nZSxcclxuICAgICAgICBnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICdEaXNhYmxlZCBVc2VyJyxcclxuICAgICAgICAgICAgLy8gQ29sdW1uIGNvbmZpZ3VyYXRpb24gbm90IHRvIGJlIGNoZWNrZWRcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9