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
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("".concat(_config_url__WEBPACK_IMPORTED_MODULE_7__["backUrl"], "/messages"), newMsg, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwidXNlU3RhdGUiLCJzZWxlY3RlZEtleSIsInNldFNlbGVjdGVkS2V5Iiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwibmFtZSIsIm9uRGVsZXRlIiwidXNlQ2FsbGJhY2siLCJuZXdNc2ciLCJ0cmlnZ2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGdCQUNFQyxtREFBTSxXQUFJQyxtREFBSixnQkFBd0JWLE9BQXhCLENBRFI7QUFBQSxNQUNkTyxJQURjLFdBQ2RBLElBRGM7QUFBQSxNQUNSSSxLQURRLFdBQ1JBLEtBRFE7O0FBR3RCLE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLFNBQUssRUFBRSxLQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBRFksRUFLWjtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQUxZLEVBU1o7QUFDSUQsU0FBSyxFQUFFLE9BRFg7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FUWSxFQWFaO0FBQ0lELFNBQUssRUFBRSxTQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBYlksQ0FBaEI7O0FBSHNCLGtCQXFCZ0JDLHNEQUFRLENBQUMsRUFBRCxDQXJCeEI7QUFBQSxNQXFCZkMsV0FyQmU7QUFBQSxNQXFCRkMsY0FyQkU7O0FBc0J0QixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFlBQVEsRUFBRSxrQkFBQ0MsZUFBRCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDekNDLGFBQU8sQ0FBQ0MsR0FBUiw0QkFBZ0NILGVBQWhDLEdBQW1ELGdCQUFuRCxFQUFxRUMsWUFBckU7QUFDQUosb0JBQWMsQ0FBQ0csZUFBRCxDQUFkO0FBQ0gsS0FKZ0I7QUFLakJJLG9CQUFnQixFQUFFLDBCQUFDQyxNQUFEO0FBQUEsYUFBYTtBQUMzQkMsZ0JBQVEsRUFBRUQsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLGVBREM7QUFFM0I7QUFDQUEsWUFBSSxFQUFFRixNQUFNLENBQUNFO0FBSGMsT0FBYjtBQUFBO0FBTEQsR0FBckI7QUFXQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLDBSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVyQlAsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaO0FBRnFCO0FBQUEsbUJBR2ZkLDRDQUFLLFVBQUwsV0FBZ0JRLG1EQUFoQixnQkFBb0NvQixNQUFwQyxFQUE0QztBQUFFMUIsNkJBQWUsRUFBRTtBQUFuQixhQUE1QyxDQUhlOztBQUFBO0FBS3JCMkIsK0RBQU8sQ0FBQyxlQUFELENBQVA7QUFMcUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRckJULG1CQUFPLENBQUNYLEtBQVI7O0FBUnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFVekIsRUFWeUIsQ0FBNUI7QUFXQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLHFFQUFDLDBDQUFEO0FBQ0ksa0JBQVk7QUFDUnFCLFlBQUksRUFBRTtBQURFLFNBRUxkLFlBRkssQ0FEaEI7QUFLSSxhQUFPLEVBQUVOLE9BTGI7QUFNSSxnQkFBVSxFQUFFTDtBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFVSSxxRUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRXFCLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0E3REQ7O0dBQU1wQixXO1VBQ3NCQywyQzs7O0tBRHRCRCxXO0FBK0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi43MjI4ZDFhNTUxODQyNTAwZTliOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUsIHRyaWdnZXIgfSBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyBUYWJsZSwgRGl2aWRlciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi9jb25maWcvdXJsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xyXG5jb25zdCBNZXNzYWdlTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS9tZXNzYWdlc2AsIGZldGNoZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0tleScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2lkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOYW1lJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW1haWwnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVzc2FnZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ21lc3NhZ2UnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkS2V5LCBzZXRTZWxlY3RlZEtleV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRSb3dLZXlzOiAke3NlbGVjdGVkUm93S2V5c31gLCAnc2VsZWN0ZWRSb3dzOiAnLCBzZWxlY3RlZFJvd3MpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEtleShzZWxlY3RlZFJvd0tleXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q2hlY2tib3hQcm9wczogKHJlY29yZCkgPT4gKHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcbiAgICAgICAgICAgIC8vIENvbHVtbiBjb25maWd1cmF0aW9uIG5vdCB0byBiZSBjaGVja2VkXHJcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZC5uYW1lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRGVsZXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkS2V5KTtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke2JhY2tVcmx9L21lc3NhZ2VzYCwgbmV3TXNnLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgIHRyaWdnZXIoJy9hcGkvbWVzc2FnZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=