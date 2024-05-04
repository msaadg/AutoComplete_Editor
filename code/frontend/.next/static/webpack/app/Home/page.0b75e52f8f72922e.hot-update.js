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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"a\");\n    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastWordIndex, setLastWordIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            if (event.key === \"F1\") {\n                handleAutocomplete();\n            } else if (event.key === \"F2\") {\n                handleNextWordSuggestion();\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, [\n        inputValue\n    ]);\n    const handleInputChange = async (event)=>{\n        const value = event.target.value;\n        console.log(value, \"set this value\");\n        setInputValue(value);\n        // Split the input value into words\n        const words = value.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        // Fetch suggestions based on the incomplete word\n        fetchSuggestions(incompleteWord);\n        // Track the index of the last incomplete word\n        setLastWordIndex(words.length - 1);\n    };\n    const fetchSuggestions = async (input)=>{\n        // Mocking suggestions for demo purposes\n        // const mockSuggestions: string[] = ['apple', 'banana', 'orange', 'pear'];\n        // setSuggestions(mockSuggestions.filter(suggestion => suggestion.startsWith(input)));\n        // use axios to fetch data from the backend\n        console.log(input);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:8080/autoCompletionSuggestions?currentWord=\".concat(input));\n        // console.log(response.data)\n        const suggestions = response.data;\n        setSuggestions(suggestions);\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue((prevValue)=>{\n            // Replace the incomplete word with the suggestion\n            const words = prevValue.split(\" \");\n            words[lastWordIndex] = suggestion;\n            return words.join(\" \");\n        });\n        setSuggestions([]); // Clear suggestions after selecting one\n    };\n    const handleSubmit = ()=>{\n        // Send the input value to the backend\n        console.log(\"Sending input to the backend:\", inputValue);\n    };\n    const handleAutocomplete = ()=>{\n        // console.log(inputValue, \"Autocomp\")\n        const words = inputValue.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        fetchSuggestions(incompleteWord);\n    };\n    const handleNextWordSuggestion = ()=>{\n        console.log(inputValue, \"next\");\n        const words = inputValue.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        const previousWord = words.length > 1 ? words[words.length - 2] : \"\";\n        fetchNextWordSuggestions(incompleteWord, previousWord);\n    };\n    const fetchNextWordSuggestions = async (input, previousWord)=>{\n        // Mocking suggestions for demo purposes\n        const mockSuggestions = [\n            \"apples\",\n            \"bananas\",\n            \"oranges\",\n            \"pears\"\n        ];\n        setSuggestions(mockSuggestions.filter((suggestion)=>suggestion.startsWith(previousWord + input)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white shadow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between h-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-shrink-0 flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold text-gray-800\",\n                                    children: \"AutoComplete Project\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-shrink-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-800\",\n                                        children: \"Hello, User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-lg mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: inputValue,\n                            onChange: handleInputChange,\n                            placeholder: \"Type here...\",\n                            className: \"w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: suggestions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border border-gray-300 rounded-md max-h-48 overflow-y-auto\",\n                                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-4 py-2 bg-white hover:bg-blue-200 cursor-pointer text-black\",\n                                        onClick: ()=>handleSuggestionClick(suggestion),\n                                        children: suggestion\n                                    }, index, false, {\n                                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 37\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Index, \"4GVB9yroKAt0e1XtEtcg7hBYfaQ=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDN0Y7SUFFQSxxQkFDSSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0U7b0NBQUdGLFdBQVU7OENBQW1DOzs7Ozs7Ozs7OzswQ0FFckQsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0c7d0NBQUtILFdBQVU7a0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPcEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNmOzRCQUNHbUIsTUFBSzs0QkFDTDVCLE9BQU9mOzRCQUNQNEMsVUFBVTlCOzRCQUNWK0IsYUFBWTs0QkFDWk4sV0FBVTs7Ozs7O3NDQUVkLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDVnJDLFlBQVlvQixNQUFNLEdBQUcsbUJBQ2xCLDhEQUFDZ0I7Z0NBQUlDLFdBQVU7MENBQ1ZyQyxZQUFZNEMsR0FBRyxDQUFDLENBQUNqQixZQUFZa0Isc0JBQzFCLDhEQUFDVDt3Q0FFR0MsV0FBVTt3Q0FDVlMsU0FBUyxJQUFNcEIsc0JBQXNCQztrREFFcENBO3VDQUpJa0I7Ozs7Ozs7Ozs7Ozs7OztzQ0FVekIsOERBQUNFOzRCQUNHRCxTQUFTaEI7NEJBQ1RPLFdBQVU7c0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBMUlNeEM7S0FBQUE7QUE0SU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0hvbWUvcGFnZS50c3g/ZjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJ2EnKTtcbiAgICBjb25zdCBbc3VnZ2VzdGlvbnMsIHNldFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW2xhc3RXb3JkSW5kZXgsIHNldExhc3RXb3JkSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdGMScpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRvY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRjInKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmV4dFdvcmRTdWdnZXN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaW5wdXRWYWx1ZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSwgXCJzZXQgdGhpcyB2YWx1ZVwiKVxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcblxuICAgICAgICAvLyBTcGxpdCB0aGUgaW5wdXQgdmFsdWUgaW50byB3b3Jkc1xuICAgICAgICBjb25zdCB3b3JkcyA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IGluY29tcGxldGVXb3JkID0gd29yZHNbd29yZHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgLy8gRmV0Y2ggc3VnZ2VzdGlvbnMgYmFzZWQgb24gdGhlIGluY29tcGxldGUgd29yZFxuICAgICAgICBmZXRjaFN1Z2dlc3Rpb25zKGluY29tcGxldGVXb3JkKTtcblxuICAgICAgICAvLyBUcmFjayB0aGUgaW5kZXggb2YgdGhlIGxhc3QgaW5jb21wbGV0ZSB3b3JkXG4gICAgICAgIHNldExhc3RXb3JkSW5kZXgod29yZHMubGVuZ3RoIC0gMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoU3VnZ2VzdGlvbnMgPSBhc3luYyAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBNb2NraW5nIHN1Z2dlc3Rpb25zIGZvciBkZW1vIHB1cnBvc2VzXG4gICAgICAgIC8vIGNvbnN0IG1vY2tTdWdnZXN0aW9uczogc3RyaW5nW10gPSBbJ2FwcGxlJywgJ2JhbmFuYScsICdvcmFuZ2UnLCAncGVhciddO1xuICAgICAgICAvLyBzZXRTdWdnZXN0aW9ucyhtb2NrU3VnZ2VzdGlvbnMuZmlsdGVyKHN1Z2dlc3Rpb24gPT4gc3VnZ2VzdGlvbi5zdGFydHNXaXRoKGlucHV0KSkpO1xuICAgICAgICBcbiAgICAgICAgLy8gdXNlIGF4aW9zIHRvIGZldGNoIGRhdGEgZnJvbSB0aGUgYmFja2VuZFxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRvQ29tcGxldGlvblN1Z2dlc3Rpb25zP2N1cnJlbnRXb3JkPSR7aW5wdXR9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zOiBzdHJpbmcgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBzZXRTdWdnZXN0aW9ucyhzdWdnZXN0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Z2dlc3Rpb25DbGljayA9IChzdWdnZXN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgaW5jb21wbGV0ZSB3b3JkIHdpdGggdGhlIHN1Z2dlc3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gcHJldlZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB3b3Jkc1tsYXN0V29yZEluZGV4XSA9IHN1Z2dlc3Rpb247XG4gICAgICAgICAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3VnZ2VzdGlvbnMoW10pOyAvLyBDbGVhciBzdWdnZXN0aW9ucyBhZnRlciBzZWxlY3Rpbmcgb25lXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgLy8gU2VuZCB0aGUgaW5wdXQgdmFsdWUgdG8gdGhlIGJhY2tlbmRcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgaW5wdXQgdG8gdGhlIGJhY2tlbmQ6JywgaW5wdXRWYWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUF1dG9jb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5wdXRWYWx1ZSwgXCJBdXRvY29tcFwiKVxuICAgICAgICBjb25zdCB3b3JkcyA9IGlucHV0VmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgaW5jb21wbGV0ZVdvcmQgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgZmV0Y2hTdWdnZXN0aW9ucyhpbmNvbXBsZXRlV29yZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU5leHRXb3JkU3VnZ2VzdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSwgXCJuZXh0XCIpXG4gICAgICAgIGNvbnN0IHdvcmRzID0gaW5wdXRWYWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBpbmNvbXBsZXRlV29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwcmV2aW91c1dvcmQgPSB3b3Jkcy5sZW5ndGggPiAxID8gd29yZHNbd29yZHMubGVuZ3RoIC0gMl0gOiAnJztcbiAgICAgICAgZmV0Y2hOZXh0V29yZFN1Z2dlc3Rpb25zKGluY29tcGxldGVXb3JkLCBwcmV2aW91c1dvcmQpO1xuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaE5leHRXb3JkU3VnZ2VzdGlvbnMgPSBhc3luYyAoaW5wdXQ6IHN0cmluZywgcHJldmlvdXNXb3JkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gTW9ja2luZyBzdWdnZXN0aW9ucyBmb3IgZGVtbyBwdXJwb3Nlc1xuICAgICAgICBjb25zdCBtb2NrU3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gWydhcHBsZXMnLCAnYmFuYW5hcycsICdvcmFuZ2VzJywgJ3BlYXJzJ107XG4gICAgICAgIHNldFN1Z2dlc3Rpb25zKG1vY2tTdWdnZXN0aW9ucy5maWx0ZXIoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnN0YXJ0c1dpdGgocHJldmlvdXNXb3JkICsgaW5wdXQpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBiYXIgKi99XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5BdXRvQ29tcGxldGUgUHJvamVjdDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMFwiPkhlbGxvLCBVc2VyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICB7LyogTWFpbiBjb250ZW50ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweS0xMiBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtNCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDAgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIG1heC1oLTQ4IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLXdoaXRlIGhvdmVyOmJnLWJsdWUtMjAwIGN1cnNvci1wb2ludGVyIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Z2dlc3Rpb25DbGljayhzdWdnZXN0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgbXQtNCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbmRleCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic3VnZ2VzdGlvbnMiLCJzZXRTdWdnZXN0aW9ucyIsImxhc3RXb3JkSW5kZXgiLCJzZXRMYXN0V29yZEluZGV4IiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwiaGFuZGxlQXV0b2NvbXBsZXRlIiwiaGFuZGxlTmV4dFdvcmRTdWdnZXN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIndvcmRzIiwic3BsaXQiLCJpbmNvbXBsZXRlV29yZCIsImxlbmd0aCIsImZldGNoU3VnZ2VzdGlvbnMiLCJpbnB1dCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImhhbmRsZVN1Z2dlc3Rpb25DbGljayIsInN1Z2dlc3Rpb24iLCJwcmV2VmFsdWUiLCJqb2luIiwiaGFuZGxlU3VibWl0IiwicHJldmlvdXNXb3JkIiwiZmV0Y2hOZXh0V29yZFN1Z2dlc3Rpb25zIiwibW9ja1N1Z2dlc3Rpb25zIiwiZmlsdGVyIiwic3RhcnRzV2l0aCIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImgxIiwic3BhbiIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaW5kZXgiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/page.tsx\n"));

/***/ })

});