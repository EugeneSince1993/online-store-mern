"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsAuth = exports.selectAuth = void 0;
const selectAuth = (state) => state.auth;
exports.selectAuth = selectAuth;
const selectIsAuth = (state) => Boolean(state.auth.data);
exports.selectIsAuth = selectIsAuth;
//# sourceMappingURL=selectors.js.map