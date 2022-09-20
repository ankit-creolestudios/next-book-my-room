"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./config/dbConnect.js":
/*!*****************************!*\
  !*** ./config/dbConnect.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst dbConnect = ()=>{\n    if (mongoose.connection.readyState >= 1) {\n        return;\n    }\n    mongoose.connect(\"mongodb+srv://root:root@cluster0.jlttbja.mongodb.net/rooms?retryWrites=true&w=majority\", {\n        useNewUrlParser: true\n    }).then((res)=>console.log(\"database connect\", res));\n};\nmodule.exports = dbConnect;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGJDb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFVLENBQUM7QUFDcEMsTUFBTUMsU0FBUyxHQUFHLElBQU07SUFDdEIsSUFBSUYsUUFBUSxDQUFDRyxVQUFVLENBQUNDLFVBQVUsSUFBSSxDQUFDLEVBQUU7UUFDdkMsT0FBTztLQUNSO0lBQ0RKLFFBQVEsQ0FDTEssT0FBTyxDQUFDQyx3RkFBd0IsRUFBRTtRQUNqQ0csZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FBQyxDQUNEQyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRUYsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUN4RDtBQUVERyxNQUFNLENBQUNDLE9BQU8sR0FBR2IsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1teS1yb29tLy4vY29uZmlnL2RiQ29ubmVjdC5qcz83NzlhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuY29uc3QgZGJDb25uZWN0ID0gKCkgPT4ge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID49IDEpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbW9uZ29vc2VcbiAgICAuY29ubmVjdChwcm9jZXNzLmVudi5EQl9MT0NBTF9VUkksIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICB9KVxuICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKFwiZGF0YWJhc2UgY29ubmVjdFwiLCByZXMpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImRiQ29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9MT0NBTF9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/dbConnect.js\n");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please enter your name\"\n        ],\n        maxLength: [\n            50,\n            \"Your name cant exceed 50 characters\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter your email\"\n        ],\n        unique: true,\n        validate: [\n            (validator__WEBPACK_IMPORTED_MODULE_2___default().isEmail),\n            \"Please enter valid email address\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: [\n            true,\n            \"Please enter your mobile number\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please enter your password\"\n        ],\n        minLength: [\n            6,\n            \"Your password must longer than 6 characters\"\n        ]\n    },\n    avatar: {\n        public_id: {\n            type: String,\n            required: true\n        },\n        url: {\n            type: String,\n            required: true\n        }\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    resetPasswordToken: String,\n    resetPasswordExpire: Date\n});\nuserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) {\n        next();\n    }\n    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(this.password, 10);\n});\nuserSchema.methods.comparePassword = async function(enterPassword) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(enterPassword, this.password);\n};\n// reset password token\nuserSchema.methods.getResetPasswordToken = function() {\n    const resetToken = crypto__WEBPACK_IMPORTED_MODULE_1___default().randomBytes(20).toString(\"hex\");\n    // console.log(typeof resetToken, \"token\");\n    this.resetPasswordToken = crypto__WEBPACK_IMPORTED_MODULE_1___default().createHash(\"sha256\").update(resetToken).digest(\"hex\");\n    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;\n    return resetToken;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLW15LXJvb20vLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJdLFxuICAgIG1heExlbmd0aDogWzUwLCBcIllvdXIgbmFtZSBjYW50IGV4Y2VlZCA1MCBjaGFyYWN0ZXJzXCJdLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIl0sXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIHZhbGlkYXRlOiBbdmFsaWRhdG9yLmlzRW1haWwsIFwiUGxlYXNlIGVudGVyIHZhbGlkIGVtYWlsIGFkZHJlc3NcIl0sXG4gIH0sXG4gIHBob25lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyXCJdLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHlvdXIgcGFzc3dvcmRcIl0sXG4gICAgbWluTGVuZ3RoOiBbNiwgXCJZb3VyIHBhc3N3b3JkIG11c3QgbG9uZ2VyIHRoYW4gNiBjaGFyYWN0ZXJzXCJdLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBwdWJsaWNfaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdXJsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICByb2xlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwidXNlclwiLFxuICB9LFxuICBjcmVhdGVkQXQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxuICByZXNldFBhc3N3b3JkVG9rZW46IFN0cmluZyxcbiAgcmVzZXRQYXNzd29yZEV4cGlyZTogRGF0ZSxcbn0pO1xudXNlclNjaGVtYS5wcmUoXCJzYXZlXCIsIGFzeW5jIGZ1bmN0aW9uIChuZXh0KSB7XG4gIGlmICghdGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpIHtcbiAgICBuZXh0KCk7XG4gIH1cbiAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDEwKTtcbn0pO1xudXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChlbnRlclBhc3N3b3JkKSB7XG4gIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShlbnRlclBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbn07XG4vLyByZXNldCBwYXNzd29yZCB0b2tlblxudXNlclNjaGVtYS5tZXRob2RzLmdldFJlc2V0UGFzc3dvcmRUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzZXRUb2tlbiA9IGNyeXB0by5yYW5kb21CeXRlcygyMCkudG9TdHJpbmcoXCJoZXhcIik7XG4gIC8vIGNvbnNvbGUubG9nKHR5cGVvZiByZXNldFRva2VuLCBcInRva2VuXCIpO1xuICB0aGlzLnJlc2V0UGFzc3dvcmRUb2tlbiA9IGNyeXB0b1xuICAgIC5jcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgLnVwZGF0ZShyZXNldFRva2VuKVxuICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gIHRoaXMucmVzZXRQYXNzd29yZEV4cGlyZSA9IERhdGUubm93KCkgKyAzMCAqIDYwICogMTAwMDtcbiAgcmV0dXJuIHJlc2V0VG9rZW47XG59O1xuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY3J5cHRvIiwidmFsaWRhdG9yIiwiYmNyeXB0IiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJlbWFpbCIsInVuaXF1ZSIsInZhbGlkYXRlIiwiaXNFbWFpbCIsInBob25lIiwicGFzc3dvcmQiLCJtaW5MZW5ndGgiLCJhdmF0YXIiLCJwdWJsaWNfaWQiLCJ1cmwiLCJyb2xlIiwiZGVmYXVsdCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJyZXNldFBhc3N3b3JkVG9rZW4iLCJyZXNldFBhc3N3b3JkRXhwaXJlIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJoYXNoIiwibWV0aG9kcyIsImNvbXBhcmVQYXNzd29yZCIsImVudGVyUGFzc3dvcmQiLCJjb21wYXJlIiwiZ2V0UmVzZXRQYXNzd29yZFRva2VuIiwicmVzZXRUb2tlbiIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _config_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/dbConnect */ \"(api)/./config/dbConnect.js\");\n/* harmony import */ var _config_dbConnect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_dbConnect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/** @format */ \n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true,\n        maxAge: 30 * 60\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            async authorize (credentials) {\n                _config_dbConnect__WEBPACK_IMPORTED_MODULE_2___default()();\n                const { email , password  } = credentials;\n                // Check if email and password is entered\n                if (!email || !password) {\n                    throw new Error(\"Please enter email or password\");\n                }\n                // Find user in the database\n                const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                    email\n                }).select(\"+password\");\n                if (!user) {\n                    throw new Error(\"Invalid Email or Password\");\n                }\n                // Check if password is correct or not\n                const isPasswordMatched = await user.comparePassword(password);\n                if (!isPasswordMatched) {\n                    throw new Error(\"Invalid Email or Password\");\n                }\n                return Promise.resolve(user);\n            }\n        }), \n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                token.user = user;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Add property to session, like an access_token from a provider.\n            session.token = token;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsWUFBWSxHQUVxQjtBQUNPO0FBQ1U7QUFDUTtBQUUxRCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QkksT0FBTyxFQUFFO1FBQ1BDLEdBQUcsRUFBRSxJQUFJO1FBQ1RDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRTtLQUNoQjtJQUNEQyxTQUFTLEVBQUU7UUFDVEosc0VBQVcsQ0FBQztZQUNWLE1BQU1LLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQlAsd0RBQVMsRUFBRSxDQUFDO2dCQUVaLE1BQU0sRUFBRVEsS0FBSyxHQUFFQyxRQUFRLEdBQUUsR0FBR0YsV0FBVztnQkFFdkMseUNBQXlDO2dCQUN6QyxJQUFJLENBQUNDLEtBQUssSUFBSSxDQUFDQyxRQUFRLEVBQUU7b0JBQ3ZCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7aUJBQ25EO2dCQUVELDRCQUE0QjtnQkFDNUIsTUFBTUMsSUFBSSxHQUFHLE1BQU1aLDREQUFZLENBQUM7b0JBQUVTLEtBQUs7aUJBQUUsQ0FBQyxDQUFDSyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUM5RCxJQUFJLENBQUNGLElBQUksRUFBRTtvQkFDVCxNQUFNLElBQUlELEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxzQ0FBc0M7Z0JBQ3RDLE1BQU1JLGlCQUFpQixHQUFHLE1BQU1ILElBQUksQ0FBQ0ksZUFBZSxDQUFDTixRQUFRLENBQUM7Z0JBRTlELElBQUksQ0FBQ0ssaUJBQWlCLEVBQUU7b0JBQ3RCLE1BQU0sSUFBSUosS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7aUJBQzlDO2dCQUVELE9BQU9NLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDTixJQUFJLENBQUMsQ0FBQzthQUM5QjtTQUNGLENBQUM7S0FDSDtJQUNETyxTQUFTLEVBQUU7UUFDVCxNQUFNZixHQUFHLEVBQUMsRUFBRWdCLEtBQUssR0FBRVIsSUFBSSxHQUFFLEVBQUU7WUFDekIsSUFBSUEsSUFBSSxFQUFFO2dCQUNSUSxLQUFLLENBQUNSLElBQUksR0FBR0EsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsT0FBT1EsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNakIsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRWlCLEtBQUssR0FBRVIsSUFBSSxHQUFFLEVBQUU7WUFDdEMsaUVBQWlFO1lBQ2pFVCxPQUFPLENBQUNpQixLQUFLLEdBQUdBLEtBQUssQ0FBQztZQUN0QixPQUFPakIsT0FBTyxDQUFDO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLW15LXJvb20vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2RiQ29ubmVjdFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgICBtYXhBZ2U6IDMwICogNjAsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBkYkNvbm5lY3QoKTtcblxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgZW1haWwgYW5kIHBhc3N3b3JkIGlzIGVudGVyZWRcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZW50ZXIgZW1haWwgb3IgcGFzc3dvcmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIHVzZXIgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KS5zZWxlY3QoXCIrcGFzc3dvcmRcIik7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRW1haWwgb3IgUGFzc3dvcmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBwYXNzd29yZCBpcyBjb3JyZWN0IG9yIG5vdFxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkTWF0Y2hlZCA9IGF3YWl0IHVzZXIuY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgICAgICBpZiAoIWlzUGFzc3dvcmRNYXRjaGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlcik7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi51c2VyID0gdXNlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAvLyBBZGQgcHJvcGVydHkgdG8gc2Vzc2lvbiwgbGlrZSBhbiBhY2Nlc3NfdG9rZW4gZnJvbSBhIHByb3ZpZGVyLlxuICAgICAgc2Vzc2lvbi50b2tlbiA9IHRva2VuO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiVXNlciIsImRiQ29ubmVjdCIsIkNyZWRlbnRpYWxzIiwic2Vzc2lvbiIsImp3dCIsIm1heEFnZSIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsIkVycm9yIiwidXNlciIsImZpbmRPbmUiLCJzZWxlY3QiLCJpc1Bhc3N3b3JkTWF0Y2hlZCIsImNvbXBhcmVQYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsbGJhY2tzIiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();