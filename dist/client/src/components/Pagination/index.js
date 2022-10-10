"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const classnames_1 = __importDefault(require("classnames"));
const usePagination_1 = require("./usePagination");
const Pagination_module_scss_1 = __importDefault(require("./Pagination.module.scss"));
const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className }) => {
    const paginationRange = (0, usePagination_1.usePagination)({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }
    const onNext = () => {
        onPageChange(currentPage + 1);
    };
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange.length - 1];
    return (<ul className={(0, classnames_1.default)(Pagination_module_scss_1.default.paginationContainer, { [className]: className })}>
      <li className={(0, classnames_1.default)(Pagination_module_scss_1.default.paginationItem, {
            [Pagination_module_scss_1.default.disabled]: currentPage === 1
        })} onClick={onPrevious}>
        <div className={(0, classnames_1.default)(Pagination_module_scss_1.default.arrow, Pagination_module_scss_1.default.left)}></div>
      </li>
      {paginationRange.map((pageNumber, index) => {
            if (pageNumber === usePagination_1.DOTS) {
                return (<li key={index} className={(0, classnames_1.default)(Pagination_module_scss_1.default.paginationItem, Pagination_module_scss_1.default.dots)}>
              &#8230;
            </li>);
            }
            return (<li key={index} className={(0, classnames_1.default)(Pagination_module_scss_1.default.paginationItem, {
                    [Pagination_module_scss_1.default.selected]: pageNumber == currentPage
                })} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>);
        })}
      <li className={(0, classnames_1.default)(Pagination_module_scss_1.default.paginationItem, {
            [Pagination_module_scss_1.default.disabled]: currentPage === lastPage
        })} onClick={onNext}>
        <div className={(0, classnames_1.default)(Pagination_module_scss_1.default.arrow, Pagination_module_scss_1.default.right)}></div>
      </li>
    </ul>);
};
exports.Pagination = Pagination;
//# sourceMappingURL=index.js.map