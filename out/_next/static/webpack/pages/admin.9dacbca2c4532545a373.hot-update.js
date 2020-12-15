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
            Object(swr__WEBPACK_IMPORTED_MODULE_5__["trigger"])('/api/messages');
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Table"], {
      rowSelection: _objectSpread({
        type: 'checkbox'
      }, rowSelection),
      columns: columns,
      dataSource: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: onDelete,
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwidXNlU3RhdGUiLCJzZWxlY3RlZEtleSIsInNldFNlbGVjdGVkS2V5Iiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwibmFtZSIsIm9uRGVsZXRlIiwidXNlQ2FsbGJhY2siLCJ0cmlnZ2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGdCQUNFQyxtREFBTSxXQUFJQyxtREFBSixnQkFBd0JWLE9BQXhCLENBRFI7QUFBQSxNQUNkTyxJQURjLFdBQ2RBLElBRGM7QUFBQSxNQUNSSSxLQURRLFdBQ1JBLEtBRFE7O0FBR3RCLE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLFNBQUssRUFBRSxLQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBRFksRUFLWjtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQUxZLEVBU1o7QUFDSUQsU0FBSyxFQUFFLE9BRFg7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FUWSxFQWFaO0FBQ0lELFNBQUssRUFBRSxTQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBYlksQ0FBaEI7O0FBSHNCLGtCQXFCZ0JDLHNEQUFRLENBQUMsRUFBRCxDQXJCeEI7QUFBQSxNQXFCZkMsV0FyQmU7QUFBQSxNQXFCRkMsY0FyQkU7O0FBc0J0QixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFlBQVEsRUFBRSxrQkFBQ0MsZUFBRCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDekNDLGFBQU8sQ0FBQ0MsR0FBUiw0QkFBZ0NILGVBQWhDLEdBQW1ELGdCQUFuRCxFQUFxRUMsWUFBckU7QUFDQUosb0JBQWMsQ0FBQ0csZUFBRCxDQUFkO0FBQ0gsS0FKZ0I7QUFLakJJLG9CQUFnQixFQUFFLDBCQUFDQyxNQUFEO0FBQUEsYUFBYTtBQUMzQkMsZ0JBQVEsRUFBRUQsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLGVBREM7QUFFM0I7QUFDQUEsWUFBSSxFQUFFRixNQUFNLENBQUNFO0FBSGMsT0FBYjtBQUFBO0FBTEQsR0FBckI7QUFXQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLDBSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVyQlAsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaO0FBRnFCO0FBQUEsbUJBR2ZkLDRDQUFLLFVBQUwsV0FBZ0JRLG1EQUFoQix1QkFBb0NNLFdBQXBDLEdBQW1EO0FBQUVaLDZCQUFlLEVBQUU7QUFBbkIsYUFBbkQsQ0FIZTs7QUFBQTtBQUtyQjBCLCtEQUFPLENBQUMsZUFBRCxDQUFQO0FBTHFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUXJCUixtQkFBTyxDQUFDWCxLQUFSOztBQVJxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBVXpCLEVBVnlCLENBQTVCO0FBV0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQywwQ0FBRDtBQUNJLGtCQUFZO0FBQ1JvQixZQUFJLEVBQUU7QUFERSxTQUVMYixZQUZLLENBRGhCO0FBS0ksYUFBTyxFQUFFTixPQUxiO0FBTUksZ0JBQVUsRUFBRUw7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBVUkscUVBQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVxQixRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBN0REOztHQUFNcEIsVztVQUNzQkMsMkM7OztLQUR0QkQsVztBQStEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uOWRhY2JjYTJjNDUzMjU0NWEzNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlLCB0cmlnZ2VyIH0gZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgVGFibGUsIERpdmlkZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL3VybCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuY29uc3QgTWVzc2FnZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vbWVzc2FnZXNgLCBmZXRjaGVyKTtcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdLZXknLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdpZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VtYWlsJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnZW1haWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01lc3NhZ2UnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdtZXNzYWdlJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEtleSwgc2V0U2VsZWN0ZWRLZXldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG4gICAgICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkUm93S2V5czogJHtzZWxlY3RlZFJvd0tleXN9YCwgJ3NlbGVjdGVkUm93czogJywgc2VsZWN0ZWRSb3dzKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRLZXkoc2VsZWN0ZWRSb3dLZXlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENoZWNrYm94UHJvcHM6IChyZWNvcmQpID0+ICh7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ0Rpc2FibGVkIFVzZXInLFxyXG4gICAgICAgICAgICAvLyBDb2x1bW4gY29uZmlndXJhdGlvbiBub3QgdG8gYmUgY2hlY2tlZFxyXG4gICAgICAgICAgICBuYW1lOiByZWNvcmQubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEtleSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtiYWNrVXJsfS9tZXNzYWdlcy8ke3NlbGVjdGVkS2V5fWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlcignL2FwaS9tZXNzYWdlcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAuLi5yb3dTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25EZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==