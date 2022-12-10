"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const StarBorderIcon_1 = require("../Icons/StarBorderIcon");
const StarIcon_1 = require("../Icons/StarIcon");
const Rating = ({ precision = 1, totalStars = 5, emptyIcon = StarBorderIcon_1.StarBorderIcon, filledIcon = StarIcon_1.StarIcon }) => {
    const [activeStar, setActiveStar] = (0, react_1.useState)(-1);
    const [hoverActiveStar, setHoverActiveStar] = (0, react_1.useState)(-1);
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const ratingContainerRef = (0, react_1.useRef)(null);
    const calculateRating = (e) => {
        var _a;
        const { width, left } = ratingContainerRef.current.getBoundingClientRect();
        let percent = (e.clientX - left) / width;
        const numberInStars = percent * totalStars;
        const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;
        return Number(nearestNumber.toFixed(((_a = precision.toString().split('.')[1]) === null || _a === void 0 ? void 0 : _a.length) || 0));
    };
    const handleClick = (e) => {
        setIsHovered(false);
        setActiveStar(calculateRating(e));
    };
    const handleMouseMove = (e) => {
        setIsHovered(true);
        setHoverActiveStar(calculateRating(e));
    };
    const handleMouseLeave = (e) => {
        setHoverActiveStar(-1);
        setIsHovered(false);
    };
    const EmptyIcon = emptyIcon;
    const FilledIcon = filledIcon;
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "rating", onClick: handleClick, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, ref: ratingContainerRef, style: {
            display: 'inline-flex',
            position: 'relative',
            cursor: 'pointer',
            textAlign: 'left'
        } }, { children: [...new Array(totalStars)].map((arr, index) => {
            const activeState = isHovered ? hoverActiveStar : activeStar;
            const showEmptyIcon = activeState === -1 || activeState < index + 1;
            const isActiveRating = activeState !== 1;
            const isRatingWithPrecision = activeState % 1 !== 0;
            const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
            const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;
            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "rating__star-container", style: {
                    cursor: 'pointer'
                } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "rating__star-basic", style: {
                            width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%',
                            overflow: 'hidden',
                            position: 'absolute'
                        } }, { children: (0, jsx_runtime_1.jsx)(FilledIcon, {}) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "rating__star-additional", style: {
                            color: showEmptyIcon ? 'gray' : 'inherit'
                        } }, { children: showEmptyIcon ? (0, jsx_runtime_1.jsx)(EmptyIcon, {}) : (0, jsx_runtime_1.jsx)(FilledIcon, {}) }))] }), index));
        }) })));
};
exports.Rating = Rating;
//# sourceMappingURL=index.js.map