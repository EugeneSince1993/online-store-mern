"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutsideAlerter = void 0;
const react_1 = require("react");
const useOutsideAlerter = (ref) => {
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        };
    }, [ref]);
};
exports.useOutsideAlerter = useOutsideAlerter;
//# sourceMappingURL=useOutsideAlerter.js.map