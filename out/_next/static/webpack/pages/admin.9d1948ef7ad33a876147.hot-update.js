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

  console.log();
  var dataSource = [];
  dataSource.unshift(data.map(function (v) {
    return {
      key: v.id,
      name: v.name,
      email: v.email,
      message: v.message
    };
  }));
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
      lineNumber: 60,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Table"], {
      rowSelection: _objectSpread({
        type: 'checkbox'
      }, rowSelection),
      columns: columns,
      dataSource: dataSource
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: onDelete,
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRhdGFTb3VyY2UiLCJ1bnNoaWZ0IiwibWFwIiwidiIsImtleSIsImlkIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInVzZVN0YXRlIiwic2VsZWN0ZWRLZXkiLCJzZXRTZWxlY3RlZEtleSIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzIiwic2VsZWN0ZWRSb3dzIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwib25EZWxldGUiLCJ1c2VDYWxsYmFjayIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZTtBQUFFRyxtQkFBZSxFQUFFO0FBQW5CLEdBQWYsRUFBMENDLElBQTFDLENBQStDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLElBQW5CO0FBQUEsR0FBL0MsQ0FBVDtBQUFBLENBQWhCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxnQkFDRUMsbURBQU0sV0FBSUMsbURBQUosZ0JBQXdCVixPQUF4QixDQURSO0FBQUEsTUFDZE8sSUFEYyxXQUNkQSxJQURjO0FBQUEsTUFDUkksS0FEUSxXQUNSQSxLQURROztBQUV0QkMsU0FBTyxDQUFDQyxHQUFSO0FBRUEsTUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0FBLFlBQVUsQ0FBQ0MsT0FBWCxDQUFtQlIsSUFBSSxDQUFDUyxHQUFMLENBQVMsVUFBQ0MsQ0FBRDtBQUFBLFdBQVE7QUFDaENDLFNBQUcsRUFBRUQsQ0FBQyxDQUFDRSxFQUR5QjtBQUVoQ0MsVUFBSSxFQUFFSCxDQUFDLENBQUNHLElBRndCO0FBR2hDQyxXQUFLLEVBQUVKLENBQUMsQ0FBQ0ksS0FIdUI7QUFJaENDLGFBQU8sRUFBRUwsQ0FBQyxDQUFDSztBQUpxQixLQUFSO0FBQUEsR0FBVCxDQUFuQjtBQU9BLE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLFNBQUssRUFBRSxJQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBRFksRUFLWjtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQUxZLEVBU1o7QUFDSUQsU0FBSyxFQUFFLE9BRFg7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FUWSxFQWFaO0FBQ0lELFNBQUssRUFBRSxTQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBYlksQ0FBaEI7O0FBWnNCLGtCQThCZ0JDLHNEQUFRLENBQUMsRUFBRCxDQTlCeEI7QUFBQSxNQThCZkMsV0E5QmU7QUFBQSxNQThCRkMsY0E5QkU7O0FBK0J0QixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFlBQVEsRUFBRSxrQkFBQ0MsZUFBRCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDekNwQixhQUFPLENBQUNDLEdBQVIsNEJBQWdDa0IsZUFBaEMsR0FBbUQsZ0JBQW5ELEVBQXFFQyxZQUFyRTtBQUNBSixvQkFBYyxDQUFDRyxlQUFELENBQWQ7QUFDSCxLQUpnQjtBQUtqQkUsb0JBQWdCLEVBQUUsMEJBQUNDLE1BQUQ7QUFBQSxhQUFhO0FBQzNCQyxnQkFBUSxFQUFFRCxNQUFNLENBQUNkLElBQVAsS0FBZ0IsZUFEQztBQUUzQjtBQUNBQSxZQUFJLEVBQUVjLE1BQU0sQ0FBQ2Q7QUFIYyxPQUFiO0FBQUE7QUFMRCxHQUFyQjtBQVdBLE1BQU1nQixRQUFRLEdBQUdDLHlEQUFXLDBSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVyQnpCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWMsV0FBWjtBQUZxQjtBQUFBLG1CQUdmekIsNENBQUssVUFBTCxXQUFnQlEsbURBQWhCLHVCQUFvQ2lCLFdBQXBDLEdBQW1EO0FBQUV2Qiw2QkFBZSxFQUFFO0FBQW5CLGFBQW5ELENBSGU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1yQlEsbUJBQU8sQ0FBQ0QsS0FBUjs7QUFOcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVF6QixFQVJ5QixDQUE1QjtBQVNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsMENBQUQ7QUFDSSxrQkFBWTtBQUNSMkIsWUFBSSxFQUFFO0FBREUsU0FFTFQsWUFGSyxDQURoQjtBQUtJLGFBQU8sRUFBRU4sT0FMYjtBQU1JLGdCQUFVLEVBQUVUO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQVVJLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFc0IsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQXBFRDs7R0FBTTVCLFc7VUFDc0JDLDJDOzs7S0FEdEJELFc7QUFzRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjlkMTk0OGVmN2FkMzNhODc2MTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IFRhYmxlLCBEaXZpZGVyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy91cmwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XHJcbmNvbnN0IE1lc3NhZ2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L21lc3NhZ2VzYCwgZmV0Y2hlcik7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICk7XHJcbiAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgZGF0YVNvdXJjZS51bnNoaWZ0KGRhdGEubWFwKCh2KSA9PiAoe1xyXG4gICAgICAgIGtleTogdi5pZCxcclxuICAgICAgICBuYW1lOiB2Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHYuZW1haWwsXHJcbiAgICAgICAgbWVzc2FnZTogdi5tZXNzYWdlLFxyXG5cclxuICAgIH0pKSk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJZCcsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2lkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOYW1lJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW1haWwnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVzc2FnZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ21lc3NhZ2UnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkS2V5LCBzZXRTZWxlY3RlZEtleV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRSb3dLZXlzOiAke3NlbGVjdGVkUm93S2V5c31gLCAnc2VsZWN0ZWRSb3dzOiAnLCBzZWxlY3RlZFJvd3MpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEtleShzZWxlY3RlZFJvd0tleXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q2hlY2tib3hQcm9wczogKHJlY29yZCkgPT4gKHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcbiAgICAgICAgICAgIC8vIENvbHVtbiBjb25maWd1cmF0aW9uIG5vdCB0byBiZSBjaGVja2VkXHJcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZC5uYW1lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uRGVsZXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkS2V5KTtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke2JhY2tVcmx9L21lc3NhZ2VzLyR7c2VsZWN0ZWRLZXl9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnJvd1NlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9