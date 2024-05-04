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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"a\");\n    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lastWordIndex, setLastWordIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            if (event.key === \"F1\") {\n                handleAutocomplete();\n            } else if (event.key === \"F2\") {\n                handleNextWordSuggestion();\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, [\n        inputValue\n    ]);\n    const handleInputChange = async (event)=>{\n        const value = event.target.value;\n        console.log(value, \"set this value\");\n        setInputValue(value);\n        // Split the input value into words\n        const words = value.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        // Fetch suggestions based on the incomplete word\n        fetchSuggestions(incompleteWord);\n        // Track the index of the last incomplete word\n        setLastWordIndex(words.length - 1);\n    };\n    const fetchSuggestions = async (input)=>{\n        // Mocking suggestions for demo purposes\n        // const mockSuggestions: string[] = ['apple', 'banana', 'orange', 'pear'];\n        // setSuggestions(mockSuggestions.filter(suggestion => suggestion.startsWith(input)));\n        // use axios to fetch data from the backend\n        console.log(input);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:8080/autoCompletionSuggestions?currentWord=\".concat(input));\n        // console.log(response.data)\n        const suggestions = response.data;\n        setSuggestions(suggestions.split(\" \"));\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setInputValue((prevValue)=>{\n            // Replace the incomplete word with the suggestion\n            const words = prevValue.split(\" \");\n            words[lastWordIndex] = suggestion;\n            return words.join(\" \");\n        });\n        setSuggestions([]); // Clear suggestions after selecting one\n    };\n    const handleSubmit = ()=>{\n        // Send the input value to the backend\n        console.log(\"Sending input to the backend:\", inputValue);\n    };\n    const handleAutocomplete = ()=>{\n        // console.log(inputValue, \"Autocomp\")\n        const words = inputValue.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        fetchSuggestions(incompleteWord);\n    };\n    const handleNextWordSuggestion = ()=>{\n        console.log(inputValue, \"next\");\n        const words = inputValue.split(\" \");\n        const incompleteWord = words[words.length - 1];\n        const previousWord = words.length > 1 ? words[words.length - 2] : \"\";\n        fetchNextWordSuggestions(incompleteWord, previousWord);\n    };\n    const fetchNextWordSuggestions = async (input, previousWord)=>{\n        // Mocking suggestions for demo purposes\n        // const mockSuggestions: string[] = ['apples', 'bananas', 'oranges', 'pears'];\n        // setSuggestions(mockSuggestions.filter(suggestion => suggestion.startsWith(previousWord + input)));\n        // use axios to fetch data from the backend\n        console.log(input, previousWord);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white shadow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between h-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-shrink-0 flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold text-gray-800\",\n                                    children: \"AutoComplete Project\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-shrink-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-800\",\n                                        children: \"Hello, User\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-lg mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: inputValue,\n                            onChange: handleInputChange,\n                            placeholder: \"Type here...\",\n                            className: \"w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: suggestions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border border-gray-300 rounded-md max-h-48 overflow-y-auto\",\n                                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"px-4 py-2 bg-white hover:bg-blue-200 cursor-pointer text-black\",\n                                        onClick: ()=>handleSuggestionClick(suggestion),\n                                        children: suggestion\n                                    }, index, false, {\n                                        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 37\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadsaad/Library/CloudStorage/OneDrive-HabibUniversity/Sem4/DS2/Project/AutoComplete_Editor/code/frontend/app/Home/page.tsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Index, \"4GVB9yroKAt0e1XtEtcg7hBYfaQ=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUMsV0FBVTs7MEJBRVgsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0U7b0NBQUdGLFdBQVU7OENBQW1DOzs7Ozs7Ozs7OzswQ0FFckQsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0c7d0NBQUtILFdBQVU7a0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPcEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNaOzRCQUNHZ0IsTUFBSzs0QkFDTHpCLE9BQU9mOzRCQUNQeUMsVUFBVTNCOzRCQUNWNEIsYUFBWTs0QkFDWk4sV0FBVTs7Ozs7O3NDQUVkLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDVmxDLFlBQVlvQixNQUFNLEdBQUcsbUJBQ2xCLDhEQUFDYTtnQ0FBSUMsV0FBVTswQ0FDVmxDLFlBQVl5QyxHQUFHLENBQUMsQ0FBQ2QsWUFBWWUsc0JBQzFCLDhEQUFDVDt3Q0FFR0MsV0FBVTt3Q0FDVlMsU0FBUyxJQUFNakIsc0JBQXNCQztrREFFcENBO3VDQUpJZTs7Ozs7Ozs7Ozs7Ozs7O3NDQVV6Qiw4REFBQ0U7NEJBQ0dELFNBQVNiOzRCQUNUSSxXQUFVO3NDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQTlJTXJDO0tBQUFBO0FBZ0pOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Ib21lL3BhZ2UudHN4P2Y3MDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCdhJyk7XG4gICAgY29uc3QgW3N1Z2dlc3Rpb25zLCBzZXRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtsYXN0V29yZEluZGV4LCBzZXRMYXN0V29yZEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRjEnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0YyJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZU5leHRXb3JkU3VnZ2VzdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICAgIH07XG4gICAgfSwgW2lucHV0VmFsdWVdKTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUsIFwic2V0IHRoaXMgdmFsdWVcIilcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gU3BsaXQgdGhlIGlucHV0IHZhbHVlIGludG8gd29yZHNcbiAgICAgICAgY29uc3Qgd29yZHMgPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBpbmNvbXBsZXRlV29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIC8vIEZldGNoIHN1Z2dlc3Rpb25zIGJhc2VkIG9uIHRoZSBpbmNvbXBsZXRlIHdvcmRcbiAgICAgICAgZmV0Y2hTdWdnZXN0aW9ucyhpbmNvbXBsZXRlV29yZCk7XG5cbiAgICAgICAgLy8gVHJhY2sgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGluY29tcGxldGUgd29yZFxuICAgICAgICBzZXRMYXN0V29yZEluZGV4KHdvcmRzLmxlbmd0aCAtIDEpO1xuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaFN1Z2dlc3Rpb25zID0gYXN5bmMgKGlucHV0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gTW9ja2luZyBzdWdnZXN0aW9ucyBmb3IgZGVtbyBwdXJwb3Nlc1xuICAgICAgICAvLyBjb25zdCBtb2NrU3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gWydhcHBsZScsICdiYW5hbmEnLCAnb3JhbmdlJywgJ3BlYXInXTtcbiAgICAgICAgLy8gc2V0U3VnZ2VzdGlvbnMobW9ja1N1Z2dlc3Rpb25zLmZpbHRlcihzdWdnZXN0aW9uID0+IHN1Z2dlc3Rpb24uc3RhcnRzV2l0aChpbnB1dCkpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHVzZSBheGlvcyB0byBmZXRjaCBkYXRhIGZyb20gdGhlIGJhY2tlbmRcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXQpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0b0NvbXBsZXRpb25TdWdnZXN0aW9ucz9jdXJyZW50V29yZD0ke2lucHV0fWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zdCBzdWdnZXN0aW9uczogc3RyaW5nID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgc2V0U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbnMuc3BsaXQoJyAnKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Z2dlc3Rpb25DbGljayA9IChzdWdnZXN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgaW5jb21wbGV0ZSB3b3JkIHdpdGggdGhlIHN1Z2dlc3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gcHJldlZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB3b3Jkc1tsYXN0V29yZEluZGV4XSA9IHN1Z2dlc3Rpb247XG4gICAgICAgICAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3VnZ2VzdGlvbnMoW10pOyAvLyBDbGVhciBzdWdnZXN0aW9ucyBhZnRlciBzZWxlY3Rpbmcgb25lXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgLy8gU2VuZCB0aGUgaW5wdXQgdmFsdWUgdG8gdGhlIGJhY2tlbmRcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgaW5wdXQgdG8gdGhlIGJhY2tlbmQ6JywgaW5wdXRWYWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUF1dG9jb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5wdXRWYWx1ZSwgXCJBdXRvY29tcFwiKVxuICAgICAgICBjb25zdCB3b3JkcyA9IGlucHV0VmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgaW5jb21wbGV0ZVdvcmQgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgZmV0Y2hTdWdnZXN0aW9ucyhpbmNvbXBsZXRlV29yZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU5leHRXb3JkU3VnZ2VzdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSwgXCJuZXh0XCIpXG4gICAgICAgIGNvbnN0IHdvcmRzID0gaW5wdXRWYWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBpbmNvbXBsZXRlV29yZCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwcmV2aW91c1dvcmQgPSB3b3Jkcy5sZW5ndGggPiAxID8gd29yZHNbd29yZHMubGVuZ3RoIC0gMl0gOiAnJztcbiAgICAgICAgZmV0Y2hOZXh0V29yZFN1Z2dlc3Rpb25zKGluY29tcGxldGVXb3JkLCBwcmV2aW91c1dvcmQpO1xuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaE5leHRXb3JkU3VnZ2VzdGlvbnMgPSBhc3luYyAoaW5wdXQ6IHN0cmluZywgcHJldmlvdXNXb3JkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gTW9ja2luZyBzdWdnZXN0aW9ucyBmb3IgZGVtbyBwdXJwb3Nlc1xuICAgICAgICAvLyBjb25zdCBtb2NrU3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gWydhcHBsZXMnLCAnYmFuYW5hcycsICdvcmFuZ2VzJywgJ3BlYXJzJ107XG4gICAgICAgIC8vIHNldFN1Z2dlc3Rpb25zKG1vY2tTdWdnZXN0aW9ucy5maWx0ZXIoc3VnZ2VzdGlvbiA9PiBzdWdnZXN0aW9uLnN0YXJ0c1dpdGgocHJldmlvdXNXb3JkICsgaW5wdXQpKSk7XG5cbiAgICAgICAgLy8gdXNlIGF4aW9zIHRvIGZldGNoIGRhdGEgZnJvbSB0aGUgYmFja2VuZFxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dCwgcHJldmlvdXNXb3JkKVxuICAgICAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIGJhciAqL31cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPkF1dG9Db21wbGV0ZSBQcm9qZWN0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwXCI+SGVsbG8sIFVzZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIHsvKiBNYWluIGNvbnRlbnQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB5LTEyIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC00IHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgbWF4LWgtNDggb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctd2hpdGUgaG92ZXI6YmctYmx1ZS0yMDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKHN1Z2dlc3Rpb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBtdC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkluZGV4IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJzdWdnZXN0aW9ucyIsInNldFN1Z2dlc3Rpb25zIiwibGFzdFdvcmRJbmRleCIsInNldExhc3RXb3JkSW5kZXgiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJoYW5kbGVBdXRvY29tcGxldGUiLCJoYW5kbGVOZXh0V29yZFN1Z2dlc3Rpb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwid29yZHMiLCJzcGxpdCIsImluY29tcGxldGVXb3JkIiwibGVuZ3RoIiwiZmV0Y2hTdWdnZXN0aW9ucyIsImlucHV0IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiaGFuZGxlU3VnZ2VzdGlvbkNsaWNrIiwic3VnZ2VzdGlvbiIsInByZXZWYWx1ZSIsImpvaW4iLCJoYW5kbGVTdWJtaXQiLCJwcmV2aW91c1dvcmQiLCJmZXRjaE5leHRXb3JkU3VnZ2VzdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJoMSIsInNwYW4iLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm1hcCIsImluZGV4Iiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/page.tsx\n"));

/***/ })

});