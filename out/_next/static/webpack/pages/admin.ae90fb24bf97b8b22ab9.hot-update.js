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
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
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
              console.log(selectedRow); // await axios.delete(`${backUrl}/messages/${selectedRow}`, { withCredentials: true });
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
      lineNumber: 62,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Table"], {
      rowSelection: _objectSpread({
        type: 'checkbox'
      }, rowSelection),
      columns: columns,
      dataSource: dataSource
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: onDelete,
      children: "Delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk1lc3NhZ2VMaXN0IiwidXNlU1dSIiwiYmFja1VybCIsImVycm9yIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwiZGF0YVNvdXJjZSIsIm1hcCIsInYiLCJrZXkiLCJpZCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUm93S2V5cyIsInNldFNlbGVjdGVkUm93S2V5cyIsIm9uU2VsZWN0Q2hhbmdlIiwiY29uc29sZSIsImxvZyIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwib25EZWxldGUiLCJ1c2VDYWxsYmFjayIsInNlbGVjdGVkUm93IiwiZXJyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGdCQUNFQyxtREFBTSxXQUFJQyxtREFBSixnQkFBd0JWLE9BQXhCLENBRFI7QUFBQSxNQUNkTyxJQURjLFdBQ2RBLElBRGM7QUFBQSxNQUNSSSxLQURRLFdBQ1JBLEtBRFE7O0FBSXRCLE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQ0lDLFNBQUssRUFBRSxJQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBRFksRUFLWjtBQUNJRCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQUxZLEVBU1o7QUFDSUQsU0FBSyxFQUFFLE9BRFg7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FUWSxFQWFaO0FBQ0lELFNBQUssRUFBRSxTQURYO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBYlksQ0FBaEI7QUFrQkEsTUFBTUMsVUFBVSxHQUFHUixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRVMsR0FBTixDQUFVLFVBQUFDLENBQUM7QUFBQSxXQUFLO0FBQy9CQyxTQUFHLEVBQUVELENBQUMsQ0FBQ0UsRUFEd0I7QUFFL0JDLFVBQUksRUFBRUgsQ0FBQyxDQUFDRyxJQUZ1QjtBQUcvQkMsV0FBSyxFQUFFSixDQUFDLENBQUNJLEtBSHNCO0FBSS9CQyxhQUFPLEVBQUVMLENBQUMsQ0FBQ0s7QUFKb0IsS0FBTDtBQUFBLEdBQVgsQ0FBbkI7O0FBdEJzQixrQkE2QndCQyxzREFBUSxDQUFDLEVBQUQsQ0E3QmhDO0FBQUEsTUE2QmZDLGVBN0JlO0FBQUEsTUE2QkVDLGtCQTdCRjs7QUE4QnRCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUYsZUFBZSxFQUFJO0FBQ3RDRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q0osZUFBekM7QUFDQUMsc0JBQWtCLENBQUNELGVBQUQsQ0FBbEI7QUFDSCxHQUhEOztBQUlBLE1BQU1LLFlBQVksR0FBRztBQUNqQkwsbUJBQWUsRUFBZkEsZUFEaUI7QUFFakJNLFlBQVEsRUFBRUosY0FGTztBQUdqQkssb0JBQWdCLEVBQUUsMEJBQUNDLE1BQUQ7QUFBQSxhQUFhO0FBQzNCQyxnQkFBUSxFQUFFRCxNQUFNLENBQUNaLElBQVAsS0FBZ0IsZUFEQztBQUUzQjtBQUNBQSxZQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFIYyxPQUFiO0FBQUE7QUFIRCxHQUFyQjtBQVVBLE1BQU1jLFFBQVEsR0FBR0MseURBQVcsMFJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QixnQkFBSTtBQUNBUixxQkFBTyxDQUFDQyxHQUFSLENBQVlRLFdBQVosRUFEQSxDQUVBO0FBQ0gsYUFIRCxDQUlBLE9BQU9DLEdBQVAsRUFBWTtBQUNSVixxQkFBTyxDQUFDaEIsS0FBUixDQUFjMEIsR0FBZDtBQUNIOztBQVB3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBUXpCLEVBUnlCLENBQTVCO0FBU0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQywwQ0FBRDtBQUNJLGtCQUFZO0FBQ1JDLFlBQUksRUFBRTtBQURFLFNBRUxULFlBRkssQ0FEaEI7QUFLSSxhQUFPLEVBQUVqQixPQUxiO0FBTUksZ0JBQVUsRUFBRUc7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBV0kscUVBQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVtQixRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBdkVEOztHQUFNMUIsVztVQUNzQkMsMkM7OztLQUR0QkQsVztBQXlFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uYWU5MGZiMjRiZjk3YjhiMjJhYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgVGFibGUsIERpdmlkZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL3VybCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuY29uc3QgTWVzc2FnZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vbWVzc2FnZXNgLCBmZXRjaGVyKTtcclxuXHJcblxyXG4gICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSWQnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdpZCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmFtZScsXHJcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VtYWlsJyxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAnZW1haWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01lc3NhZ2UnLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICdtZXNzYWdlJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhPy5tYXAodiA9PiAoe1xyXG4gICAgICAgIGtleTogdi5pZCxcclxuICAgICAgICBuYW1lOiB2Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHYuZW1haWwsXHJcbiAgICAgICAgbWVzc2FnZTogdi5tZXNzYWdlLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZFJvd0tleXMsIHNldFNlbGVjdGVkUm93S2V5c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBvblNlbGVjdENoYW5nZSA9IHNlbGVjdGVkUm93S2V5cyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkUm93S2V5cyBjaGFuZ2VkOiAnLCBzZWxlY3RlZFJvd0tleXMpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkUm93S2V5cyhzZWxlY3RlZFJvd0tleXMpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBzZWxlY3RlZFJvd0tleXMsXHJcbiAgICAgICAgb25DaGFuZ2U6IG9uU2VsZWN0Q2hhbmdlLFxyXG4gICAgICAgIGdldENoZWNrYm94UHJvcHM6IChyZWNvcmQpID0+ICh7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ0Rpc2FibGVkIFVzZXInLFxyXG4gICAgICAgICAgICAvLyBDb2x1bW4gY29uZmlndXJhdGlvbiBub3QgdG8gYmUgY2hlY2tlZFxyXG4gICAgICAgICAgICBuYW1lOiByZWNvcmQubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRSb3cpO1xyXG4gICAgICAgICAgICAvLyBhd2FpdCBheGlvcy5kZWxldGUoYCR7YmFja1VybH0vbWVzc2FnZXMvJHtzZWxlY3RlZFJvd31gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9