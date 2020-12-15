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
    dataIndex: 'id',
    key: 'id'
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
      lineNumber: 52,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Table"], {
      rowSelection: _objectSpread({
        type: 'checkbox'
      }, rowSelection),
      columns: columns,
      dataSource: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: onDelete,
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwidXNlU3RhdGUiLCJzZWxlY3RlZEtleSIsInNldFNlbGVjdGVkS2V5Iiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwibmFtZSIsIm9uRGVsZXRlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWU7QUFBRUcsbUJBQWUsRUFBRTtBQUFuQixHQUFmLEVBQTBDQyxJQUExQyxDQUErQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDQyxJQUFuQjtBQUFBLEdBQS9DLENBQVQ7QUFBQSxDQUFoQjs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsZ0JBQ0VDLG1EQUFNLFdBQUlDLG1EQUFKLGdCQUF3QlYsT0FBeEIsQ0FEUjtBQUFBLE1BQ2RPLElBRGMsV0FDZEEsSUFEYztBQUFBLE1BQ1JJLEtBRFEsV0FDUkEsS0FEUTs7QUFHdEIsTUFBTUMsT0FBTyxHQUFHLENBQ1o7QUFDSUMsU0FBSyxFQUFFLElBRFg7QUFFSUMsYUFBUyxFQUFFLElBRmY7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FEWSxFQU1aO0FBQ0lGLFNBQUssRUFBRSxNQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBTlksRUFVWjtBQUNJRCxTQUFLLEVBQUUsT0FEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQVZZLEVBY1o7QUFDSUQsU0FBSyxFQUFFLFNBRFg7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FkWSxDQUFoQjs7QUFIc0Isa0JBc0JnQkUsc0RBQVEsQ0FBQyxFQUFELENBdEJ4QjtBQUFBLE1Bc0JmQyxXQXRCZTtBQUFBLE1Bc0JGQyxjQXRCRTs7QUF1QnRCLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsWUFBUSxFQUFFLGtCQUFDQyxlQUFELEVBQWtCQyxZQUFsQixFQUFtQztBQUN6Q0MsYUFBTyxDQUFDQyxHQUFSLDRCQUFnQ0gsZUFBaEMsR0FBbUQsZ0JBQW5ELEVBQXFFQyxZQUFyRTtBQUNBSixvQkFBYyxDQUFDRyxlQUFELENBQWQ7QUFDSCxLQUpnQjtBQUtqQkksb0JBQWdCLEVBQUUsMEJBQUNDLE1BQUQ7QUFBQSxhQUFhO0FBQzNCQyxnQkFBUSxFQUFFRCxNQUFNLENBQUNFLElBQVAsS0FBZ0IsZUFEQztBQUUzQjtBQUNBQSxZQUFJLEVBQUVGLE1BQU0sQ0FBQ0U7QUFIYyxPQUFiO0FBQUE7QUFMRCxHQUFyQjtBQVdBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsMFJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXJCUCxtQkFBTyxDQUFDQyxHQUFSLENBQVlQLFdBQVo7QUFGcUI7QUFBQSxtQkFHZmYsNENBQUssVUFBTCxXQUFnQlEsbURBQWhCLHVCQUFvQ08sV0FBcEMsR0FBbUQ7QUFBRWIsNkJBQWUsRUFBRTtBQUFuQixhQUFuRCxDQUhlOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNckJtQixtQkFBTyxDQUFDWixLQUFSOztBQU5xQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBUXpCLEVBUnlCLENBQTVCO0FBU0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQywwQ0FBRDtBQUNJLGtCQUFZO0FBQ1JvQixZQUFJLEVBQUU7QUFERSxTQUVMWixZQUZLLENBRGhCO0FBS0ksYUFBTyxFQUFFUCxPQUxiO0FBTUksZ0JBQVUsRUFBRUw7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBVUkscUVBQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVzQixRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBNUREOztHQUFNckIsVztVQUNzQkMsMkM7OztLQUR0QkQsVztBQThEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uMWNhNzM1ZDkyNzVlZjI0ODgyZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgVGFibGUsIERpdmlkZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL3VybCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuY29uc3QgTWVzc2FnZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vbWVzc2FnZXNgLCBmZXRjaGVyKTtcclxuXHJcbiAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJZCcsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2lkJyxcclxuICAgICAgICAgICAga2V5OiAnaWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05hbWUnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXNzYWdlJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnbWVzc2FnZScsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRLZXksIHNldFNlbGVjdGVkS2V5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkS2V5KHNlbGVjdGVkUm93S2V5cyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICdEaXNhYmxlZCBVc2VyJyxcclxuICAgICAgICAgICAgLy8gQ29sdW1uIGNvbmZpZ3VyYXRpb24gbm90IHRvIGJlIGNoZWNrZWRcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRLZXkpO1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFja1VybH0vbWVzc2FnZXMvJHtzZWxlY3RlZEtleX1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=