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

  var onSelectChange = function onSelectChange(selectedRowKeys) {
    setSelectedRowKeys(selectedRowKeys);
    console.log('selectedRowKeys changed: ', selectedRowKeys);
  };

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
  var onDelete = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/Object(C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return C_Users_HOME_Documents_portpolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              console.log(selectedRowKeys); // await axios.delete(`${backUrl}/messages/${selectedRow}`, { withCredentials: true });
            } catch (err) {
              console.error(err);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Table"], {
      rowSelection: _objectSpread({
        type: 'checkbox'
      }, rowSelection),
      columns: columns,
      dataSource: dataSource
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: onDelete,
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);
};

_s(MessageList, "NtACaCcVV5yyl4VT9d12/ZUpP4g=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwiZGF0YVNvdXJjZSIsIm1hcCIsInYiLCJrZXkiLCJpZCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUm93S2V5cyIsInNldFNlbGVjdGVkUm93S2V5cyIsIm9uU2VsZWN0Q2hhbmdlIiwiY29uc29sZSIsImxvZyIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwib25EZWxldGUiLCJ1c2VDYWxsYmFjayIsImVyciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZTtBQUFFRyxtQkFBZSxFQUFFO0FBQW5CLEdBQWYsRUFBMENDLElBQTFDLENBQStDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLElBQW5CO0FBQUEsR0FBL0MsQ0FBVDtBQUFBLENBQWhCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxnQkFDRUMsbURBQU0sV0FBSUMsbURBQUosZ0JBQXdCVixPQUF4QixDQURSO0FBQUEsTUFDZE8sSUFEYyxXQUNkQSxJQURjO0FBQUEsTUFDUkksS0FEUSxXQUNSQSxLQURROztBQUl0QixNQUFNQyxPQUFPLEdBQUcsQ0FDWjtBQUNJQyxTQUFLLEVBQUUsSUFEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQURZLEVBS1o7QUFDSUQsU0FBSyxFQUFFLE1BRFg7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FMWSxFQVNaO0FBQ0lELFNBQUssRUFBRSxPQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBVFksRUFhWjtBQUNJRCxTQUFLLEVBQUUsU0FEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQWJZLENBQWhCO0FBa0JBLE1BQU1DLFVBQVUsR0FBR1IsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVTLEdBQU4sQ0FBVSxVQUFBQyxDQUFDO0FBQUEsV0FBSztBQUMvQkMsU0FBRyxFQUFFRCxDQUFDLENBQUNFLEVBRHdCO0FBRS9CQyxVQUFJLEVBQUVILENBQUMsQ0FBQ0csSUFGdUI7QUFHL0JDLFdBQUssRUFBRUosQ0FBQyxDQUFDSSxLQUhzQjtBQUkvQkMsYUFBTyxFQUFFTCxDQUFDLENBQUNLO0FBSm9CLEtBQUw7QUFBQSxHQUFYLENBQW5COztBQXRCc0Isa0JBNkJ3QkMsc0RBQVEsQ0FBQyxFQUFELENBN0JoQztBQUFBLE1BNkJmQyxlQTdCZTtBQUFBLE1BNkJFQyxrQkE3QkY7O0FBOEJ0QixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFGLGVBQWUsRUFBSTtBQUV0Q0Msc0JBQWtCLENBQUNELGVBQUQsQ0FBbEI7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNKLGVBQXpDO0FBQ0gsR0FKRDs7QUFLQSxNQUFNSyxZQUFZLEdBQUc7QUFDakJMLG1CQUFlLEVBQWZBLGVBRGlCO0FBRWpCTSxZQUFRLEVBQUVKLGNBRk87QUFHakJLLG9CQUFnQixFQUFFLDBCQUFDQyxNQUFEO0FBQUEsYUFBYTtBQUMzQkMsZ0JBQVEsRUFBRUQsTUFBTSxDQUFDWixJQUFQLEtBQWdCLGVBREM7QUFFM0I7QUFDQUEsWUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBSGMsT0FBYjtBQUFBO0FBSEQsR0FBckI7QUFVQSxNQUFNYyxRQUFRLEdBQUdDLHlEQUFXLDBSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekIsZ0JBQUk7QUFDQVIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixlQUFaLEVBREEsQ0FFQTtBQUNILGFBSEQsQ0FJQSxPQUFPWSxHQUFQLEVBQVk7QUFDUlQscUJBQU8sQ0FBQ2hCLEtBQVIsQ0FBY3lCLEdBQWQ7QUFDSDs7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVF6QixFQVJ5QixDQUE1QjtBQVNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsMENBQUQ7QUFDSSxrQkFBWTtBQUNSQyxZQUFJLEVBQUU7QUFERSxTQUVMUixZQUZLLENBRGhCO0FBS0ksYUFBTyxFQUFFakIsT0FMYjtBQU1JLGdCQUFVLEVBQUVHO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQVdJLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFbUIsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQXhFRDs7R0FBTTFCLFc7VUFDc0JDLDJDOzs7S0FEdEJELFc7QUEwRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjA2M2NlYTQxODNjOTJlY2YwMDk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IFRhYmxlLCBEaXZpZGVyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy91cmwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XHJcbmNvbnN0IE1lc3NhZ2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L21lc3NhZ2VzYCwgZmV0Y2hlcik7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0lkJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnaWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05hbWUnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXNzYWdlJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnbWVzc2FnZScsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YT8ubWFwKHYgPT4gKHtcclxuICAgICAgICBrZXk6IHYuaWQsXHJcbiAgICAgICAgbmFtZTogdi5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB2LmVtYWlsLFxyXG4gICAgICAgIG1lc3NhZ2U6IHYubWVzc2FnZSxcclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRSb3dLZXlzLCBzZXRTZWxlY3RlZFJvd0tleXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBzZWxlY3RlZFJvd0tleXMgPT4ge1xyXG5cclxuICAgICAgICBzZXRTZWxlY3RlZFJvd0tleXMoc2VsZWN0ZWRSb3dLZXlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRSb3dLZXlzIGNoYW5nZWQ6ICcsIHNlbGVjdGVkUm93S2V5cyk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG4gICAgICAgIHNlbGVjdGVkUm93S2V5cyxcclxuICAgICAgICBvbkNoYW5nZTogb25TZWxlY3RDaGFuZ2UsXHJcbiAgICAgICAgZ2V0Q2hlY2tib3hQcm9wczogKHJlY29yZCkgPT4gKHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcbiAgICAgICAgICAgIC8vIENvbHVtbiBjb25maWd1cmF0aW9uIG5vdCB0byBiZSBjaGVja2VkXHJcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZC5uYW1lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFJvd0tleXMpO1xyXG4gICAgICAgICAgICAvLyBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFja1VybH0vbWVzc2FnZXMvJHtzZWxlY3RlZFJvd31gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9