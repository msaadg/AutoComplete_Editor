"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Home/page",{

/***/ "(app-pages-browser)/./app/Home/page.tsx":
/*!***************************!*\
  !*** ./app/Home/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"a\");\n    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastWordIndex, setLastWordIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            if (event.key === \"F1\") {\n                handleAutocomplete();\n            } else if (event.key === \"F2\") {\n                handleNextWordSuggestion();\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, [\n        inputValue\n    ]);\n    const handleInputChange = async (event)=>{\n        const value = event.target.value;\n        console.log(value, \"set this value\");\n        setInputValue(value);\n        // Split the input value into words\n        const words = value.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        // Fetch suggestions based on the incomplete word\n        fetchSuggestions(incompleteWord);\n        // Track the index of the last incomplete word\n        setLastWordIndex(words.length - 1);\n    };\n    const fetchSuggestions = async (input)=>{\n        // Mocking suggestions for demo purposes\n        // const mockSuggestions: string[] = ['apple', 'banana', 'orange', 'pear'];\n        // setSuggestions(mockSuggestions.filter(suggestion => suggestion.startsWith(input)));\n        // use axios to fetch data from the backend\n        console.log(input);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:8080/autoCompletionSuggestions?currentWord=\".concat(input));\n        // console.log(response.data)\n        const suggestions = response.data;\n        setSuggestions(suggestions.split(\" \"));\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue((prevValue)=>{\n            // Replace the incomplete word with the suggestion\n            const words = prevValue.split(\" \");\n            words[lastWordIndex] = suggestion;\n            return words.join(\" \");\n        });\n        setSuggestions([]); // Clear suggestions after selecting one\n    };\n    const handleSubmit = ()=>{\n        // Send the input value to the backend\n        console.log(\"Sending input to the backend:\", inputValue);\n    };\n    const handleAutocomplete = ()=>{\n        // console.log(inputValue, \"Autocomp\")\n        const words = inputValue.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        fetchSuggestions(incompleteWord);\n    };\n    const handleNextWordSuggestion = ()=>{\n        console.log(inputValue, \"next\");\n        const words = inputValue.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        const previousWord = words.length > 1 ? words[words.length - 2] : \"\";\n        fetchNextWordSuggestions(incompleteWord, previousWord);\n    };\n    const fetchNextWordSuggestions = async (input, previousWord)=>{\n    // Mocking suggestions for demo purposes\n    // const mockSuggestions: string[] = ['apples', 'bananas', 'oranges', 'pears'];\n    // setSuggestions(mockSuggestions.filter(suggestion => suggestion.startsWith(previousWord + input)));\n    // use axios to fetch data from the backend\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white shadow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between h-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-shrink-0 flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold text-gray-800\",\n                                    children: \"AutoComplete Project\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-shrink-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-800\",\n                                        children: \"Hello, User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-lg mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: inputValue,\n                            onChange: handleInputChange,\n                            placeholder: \"Type here...\",\n                            className: \"w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: suggestions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border border-gray-300 rounded-md max-h-48 overflow-y-auto\",\n                                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-4 py-2 bg-white hover:bg-blue-200 cursor-pointer text-black\",\n                                        onClick: ()=>handleSuggestionClick(suggestion),\n                                        children: suggestion\n                                    }, index, false, {\n                                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 37\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Index, \"4GVB9yroKAt0e1XtEtcg7hBYfaQ=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBbUM7Ozs7Ozs7Ozs7OzBDQUVyRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNEO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDRzt3Q0FBS0gsV0FBVTtrREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9wRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ1o7NEJBQ0dnQixNQUFLOzRCQUNMekIsT0FBT2Y7NEJBQ1B5QyxVQUFVM0I7NEJBQ1Y0QixhQUFZOzRCQUNaTixXQUFVOzs7Ozs7c0NBRWQsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNWbEMsWUFBWW9CLE1BQU0sR0FBRyxtQkFDbEIsOERBQUNhO2dDQUFJQyxXQUFVOzBDQUNWbEMsWUFBWXlDLEdBQUcsQ0FBQyxDQUFDZCxZQUFZZSxzQkFDMUIsOERBQUNUO3dDQUVHQyxXQUFVO3dDQUNWUyxTQUFTLElBQU1qQixzQkFBc0JDO2tEQUVwQ0E7dUNBSkllOzs7Ozs7Ozs7Ozs7Ozs7c0NBVXpCLDhEQUFDRTs0QkFDR0QsU0FBU2I7NEJBQ1RJLFdBQVU7c0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBN0lNckM7S0FBQUE7QUErSU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0hvbWUvcGFnZS50c3g/ZjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJ2EnKTtcbiAgICBjb25zdCBbc3VnZ2VzdGlvbnMsIHNldFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW2xhc3RXb3JkSW5kZXgsIHNldExhc3RXb3JkSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdGMScpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRvY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRjInKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmV4dFdvcmRTdWdnZXN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaW5wdXRWYWx1ZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSwgXCJzZXQgdGhpcyB2YWx1ZVwiKVxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcblxuICAgICAgICAvLyBTcGxpdCB0aGUgaW5wdXQgdmFsdWUgaW50byB3b3Jkc1xuICAgICAgICBjb25zdCB3b3JkcyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IGluY29tcGxldGVXb3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgLy8gRmV0Y2ggc3VnZ2VzdGlvbnMgYmFzZWQgb24gdGhlIGluY29tcGxldGUgd29yZFxuICAgICAgICBmZXRjaFN1Z2dlc3Rpb25zKGluY29tcGxldGVXb3JkKTtcblxuICAgICAgICAvLyBUcmFjayB0aGUgaW5kZXggb2YgdGhlIGxhc3QgaW5jb21wbGV0ZSB3b3JkXG4gICAgICAgIHNldExhc3RXb3JkSW5kZXgod29yZHMubGVuZ3RoIC0gMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoU3VnZ2VzdGlvbnMgPSBhc3luYyAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBNb2NraW5nIHN1Z2dlc3Rpb25zIGZvciBkZW1vIHB1cnBvc2VzXG4gICAgICAgIC8vIGNvbnN0IG1vY2tTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbJ2FwcGxlJywgJ2JhbmFuYScsICdvcmFuZ2UnLCAncGVhciddO1xuICAgICAgICAvLyBzZXRTdWdnZXN0aW9ucyhtb2NrU3VnZ2VzdGlvbnMuZmlsdGVyKHN1Z2dlc3Rpb24gPT4gc3VnZ2VzdGlvbi5zdGFydHNXaXRoKGlucHV0KSkpO1xuICAgICAgICBcbiAgICAgICAgLy8gdXNlIGF4aW9zIHRvIGZldGNoIGRhdGEgZnJvbSB0aGUgYmFja2VuZFxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRvQ29tcGxldGlvblN1Z2dlc3Rpb25zP2N1cnJlbnRXb3JkPSR7aW5wdXR9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zOiBzdHJpbmcgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBzZXRTdWdnZXN0aW9ucyhzdWdnZXN0aW9ucy5zcGxpdCgnICcpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrID0gKHN1Z2dlc3Rpb246IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKHByZXZWYWx1ZSA9PiB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBpbmNvbXBsZXRlIHdvcmQgd2l0aCB0aGUgc3VnZ2VzdGlvblxuICAgICAgICAgICAgY29uc3Qgd29yZHMgPSBwcmV2VmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHdvcmRzW2xhc3RXb3JkSW5kZXhdID0gc3VnZ2VzdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdWdnZXN0aW9ucyhbXSk7IC8vIENsZWFyIHN1Z2dlc3Rpb25zIGFmdGVyIHNlbGVjdGluZyBvbmVcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICAvLyBTZW5kIHRoZSBpbnB1dCB2YWx1ZSB0byB0aGUgYmFja2VuZFxuICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZyBpbnB1dCB0byB0aGUgYmFja2VuZDonLCBpbnB1dFZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQXV0b2NvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbnB1dFZhbHVlLCBcIkF1dG9jb21wXCIpXG4gICAgICAgIGNvbnN0IHdvcmRzID0gaW5wdXRWYWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBpbmNvbXBsZXRlV29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBmZXRjaFN1Z2dlc3Rpb25zKGluY29tcGxldGVXb3JkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTmV4dFdvcmRTdWdnZXN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dFZhbHVlLCBcIm5leHRcIilcbiAgICAgICAgY29uc3Qgd29yZHMgPSBpbnB1dFZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IGluY29tcGxldGVXb3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzV29yZCA9IHdvcmRzLmxlbmd0aCA+IDEgPyB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAyXSA6ICcnO1xuICAgICAgICBmZXRjaE5leHRXb3JkU3VnZ2VzdGlvbnMoaW5jb21wbGV0ZVdvcmQsIHByZXZpb3VzV29yZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoTmV4dFdvcmRTdWdnZXN0aW9ucyA9IGFzeW5jIChpbnB1dDogc3RyaW5nLCBwcmV2aW91c1dvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBNb2NraW5nIHN1Z2dlc3Rpb25zIGZvciBkZW1vIHB1cnBvc2VzXG4gICAgICAgIC8vIGNvbnN0IG1vY2tTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbJ2FwcGxlcycsICdiYW5hbmFzJywgJ29yYW5nZXMnLCAncGVhcnMnXTtcbiAgICAgICAgLy8gc2V0U3VnZ2VzdGlvbnMobW9ja1N1Z2dlc3Rpb25zLmZpbHRlcihzdWdnZXN0aW9uID0+IHN1Z2dlc3Rpb24uc3RhcnRzV2l0aChwcmV2aW91c1dvcmQgKyBpbnB1dCkpKTtcblxuICAgICAgICAvLyB1c2UgYXhpb3MgdG8gZmV0Y2ggZGF0YSBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICAgIFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gYmFyICovfVxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+QXV0b0NvbXBsZXRlIFByb2plY3Q8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDBcIj5IZWxsbywgVXNlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgey8qIE1haW4gY29udGVudCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTQgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBtYXgtaC00OCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy13aGl0ZSBob3ZlcjpiZy1ibHVlLTIwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWdnZXN0aW9uQ2xpY2soc3VnZ2VzdGlvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IG10LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5kZXgiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInN1Z2dlc3Rpb25zIiwic2V0U3VnZ2VzdGlvbnMiLCJsYXN0V29yZEluZGV4Iiwic2V0TGFzdFdvcmRJbmRleCIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsImhhbmRsZUF1dG9jb21wbGV0ZSIsImhhbmRsZU5leHRXb3JkU3VnZ2VzdGlvbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWx1ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkcyIsInNwbGl0IiwiaW5jb21wbGV0ZVdvcmQiLCJsZW5ndGgiLCJmZXRjaFN1Z2dlc3Rpb25zIiwiaW5wdXQiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJoYW5kbGVTdWdnZXN0aW9uQ2xpY2siLCJzdWdnZXN0aW9uIiwicHJldlZhbHVlIiwiam9pbiIsImhhbmRsZVN1Ym1pdCIsInByZXZpb3VzV29yZCIsImZldGNoTmV4dFdvcmRTdWdnZXN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImgxIiwic3BhbiIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaW5kZXgiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/page.tsx\n"));

/***/ })

});