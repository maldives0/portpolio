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

  console.log(data.map(function (v) {
    return {
      key: v.id,
      name: v.name,
      email: v.email,
      message: v.message
    };
  }));
  var dataSource = [{// key: data.id,
  }];
  var columns = [{
    title: 'Id',
    dataIndex: 'id'
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      selectedKey = _useState[0],
      setSelectedKey = _useState[1];

  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      console.log("selectedRowKeys: ".concat(selectedRowKeys), 'selectedRows: ', selectedRows);
      setSelectedKey(selectedRowKeys);
    },
    getCheckboxProps: function getCheckboxProps(record) {
      return {
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name
      };
    }
  };
  var onDelete = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/Object(C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(selectedKey);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("".concat(_config_url__WEBPACK_IMPORTED_MODULE_7__["backUrl"], "/messages/").concat(selectedKey), {
              withCredentials: true
            });

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  })), []);
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
      lineNumber: 76,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, _this);
};

_s(MessageList, "zvZmxcXgtnUJ6g2Cdq2Ewl81IqI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInYiLCJrZXkiLCJpZCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJkYXRhU291cmNlIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwidXNlU3RhdGUiLCJzZWxlY3RlZEtleSIsInNldFNlbGVjdGVkS2V5Iiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJnZXRDaGVja2JveFByb3BzIiwicmVjb3JkIiwiZGlzYWJsZWQiLCJvbkRlbGV0ZSIsInVzZUNhbGxiYWNrIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGdCQUNFQyxtREFBTSxXQUFJQyxtREFBSixnQkFBd0JWLE9BQXhCLENBRFI7QUFBQSxNQUNkTyxJQURjLFdBQ2RBLElBRGM7QUFBQSxNQUNSSSxLQURRLFdBQ1JBLEtBRFE7O0FBRXRCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBSSxDQUFDTyxHQUFMLENBQVMsVUFBQ0MsQ0FBRDtBQUFBLFdBQVE7QUFDekJDLFNBQUcsRUFBRUQsQ0FBQyxDQUFDRSxFQURrQjtBQUV6QkMsVUFBSSxFQUFFSCxDQUFDLENBQUNHLElBRmlCO0FBR3pCQyxXQUFLLEVBQUVKLENBQUMsQ0FBQ0ksS0FIZ0I7QUFJekJDLGFBQU8sRUFBRUwsQ0FBQyxDQUFDSztBQUpjLEtBQVI7QUFBQSxHQUFULENBQVo7QUFVQSxNQUFNQyxVQUFVLEdBQUcsQ0FDZixDQUNJO0FBREosR0FEZSxDQUFuQjtBQU9BLE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLFNBQUssRUFBRSxJQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBRFksRUFLWjtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQUxZLEVBU1o7QUFDSUQsU0FBSyxFQUFFLE9BRFg7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FUWSxFQWFaO0FBQ0lELFNBQUssRUFBRSxTQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBYlksQ0FBaEI7O0FBbkJzQixrQkFxQ2dCQyxzREFBUSxDQUFDLEVBQUQsQ0FyQ3hCO0FBQUEsTUFxQ2ZDLFdBckNlO0FBQUEsTUFxQ0ZDLGNBckNFOztBQXNDdEIsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxZQUFRLEVBQUUsa0JBQUNDLGVBQUQsRUFBa0JDLFlBQWxCLEVBQW1DO0FBQ3pDbkIsYUFBTyxDQUFDQyxHQUFSLDRCQUFnQ2lCLGVBQWhDLEdBQW1ELGdCQUFuRCxFQUFxRUMsWUFBckU7QUFDQUosb0JBQWMsQ0FBQ0csZUFBRCxDQUFkO0FBQ0gsS0FKZ0I7QUFLakJFLG9CQUFnQixFQUFFLDBCQUFDQyxNQUFEO0FBQUEsYUFBYTtBQUMzQkMsZ0JBQVEsRUFBRUQsTUFBTSxDQUFDZixJQUFQLEtBQWdCLGVBREM7QUFFM0I7QUFDQUEsWUFBSSxFQUFFZSxNQUFNLENBQUNmO0FBSGMsT0FBYjtBQUFBO0FBTEQsR0FBckI7QUFXQSxNQUFNaUIsUUFBUSxHQUFHQyx5REFBVywwUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFckJ4QixtQkFBTyxDQUFDQyxHQUFSLENBQVlhLFdBQVo7QUFGcUI7QUFBQSxtQkFHZnhCLDRDQUFLLFVBQUwsV0FBZ0JRLG1EQUFoQix1QkFBb0NnQixXQUFwQyxHQUFtRDtBQUFFdEIsNkJBQWUsRUFBRTtBQUFuQixhQUFuRCxDQUhlOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNckJRLG1CQUFPLENBQUNELEtBQVI7O0FBTnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFRekIsRUFSeUIsQ0FBNUI7QUFTQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLHFFQUFDLDBDQUFEO0FBQ0ksa0JBQVk7QUFDUjBCLFlBQUksRUFBRTtBQURFLFNBRUxULFlBRkssQ0FEaEI7QUFLSSxhQUFPLEVBQUVOLE9BTGI7QUFNSSxnQkFBVSxFQUFFRDtBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFVSSxxRUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRWMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQTNFRDs7R0FBTTNCLFc7VUFDc0JDLDJDOzs7S0FEdEJELFc7QUE2RVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLmM5YTM1M2U0YjQ3ZjQxOTFjMTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IFRhYmxlLCBEaXZpZGVyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy91cmwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XHJcbmNvbnN0IE1lc3NhZ2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L21lc3NhZ2VzYCwgZmV0Y2hlcik7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLm1hcCgodikgPT4gKHtcclxuICAgICAgICBrZXk6IHYuaWQsXHJcbiAgICAgICAgbmFtZTogdi5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB2LmVtYWlsLFxyXG4gICAgICAgIG1lc3NhZ2U6IHYubWVzc2FnZSxcclxuXHJcbiAgICB9XHJcblxyXG4gICAgKSlcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8ga2V5OiBkYXRhLmlkLFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0lkJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnaWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05hbWUnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXNzYWdlJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnbWVzc2FnZScsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRLZXksIHNldFNlbGVjdGVkS2V5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkS2V5KHNlbGVjdGVkUm93S2V5cyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICdEaXNhYmxlZCBVc2VyJyxcclxuICAgICAgICAgICAgLy8gQ29sdW1uIGNvbmZpZ3VyYXRpb24gbm90IHRvIGJlIGNoZWNrZWRcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRLZXkpO1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFja1VybH0vbWVzc2FnZXMvJHtzZWxlY3RlZEtleX1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=