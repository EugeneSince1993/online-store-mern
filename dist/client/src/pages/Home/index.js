"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const react_1 = __importStar(require("react"));
const react_responsive_1 = __importDefault(require("react-responsive"));
const components_1 = require("../../components");
const selectors_1 = require("../../redux/filter/selectors");
const hooks_1 = require("../../redux/hooks");
const asyncActions_1 = require("../../redux/product/asyncActions");
const Spinner_1s_200px_gif_1 = __importDefault(require("../../assets/img/Spinner-1s-200px.gif"));
const ProductItem_1 = require("../../components/ProductItem");
const selectors_2 = require("../../redux/product/selectors");
const filterSlice_1 = require("../../redux/filter/filterSlice");
const empty_cart_2_400x400_png_1 = __importDefault(require("../../assets/img/empty-cart-2-400x400.png"));
const Home_module_scss_1 = __importDefault(require("./Home.module.scss"));
;
let pageSize = 8;
const Home = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { products, isLoading } = (0, hooks_1.useAppSelector)(selectors_2.selectProduct);
    const { sort, types, searchValue, currentPage } = (0, hooks_1.useAppSelector)(selectors_1.selectFilter);
    const { brands, memory, ram, cpuCores, colors, priceRange, screenSizeRange, batteryCapacityRange } = types;
    let finalProducts = products;
    const showFinalProducts = (value) => {
        finalProducts = value;
    };
    const setFirstPage = () => {
        dispatch((0, filterSlice_1.setCurrentPage)(1));
    };
    const handleChange = (e, actionCreator, entityName) => {
        const { name } = e.target;
        dispatch(actionCreator(Object.assign(Object.assign({}, entityName), { [name]: !entityName[name] })));
        setFirstPage();
    };
    const getProducts = () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        dispatch((0, asyncActions_1.fetchProducts)({ sortBy, order }));
        setFirstPage();
    };
    (0, react_1.useEffect)(() => {
        getProducts();
    }, [sort.sortProperty]);
    const setCheckedItems = (itemList) => {
        return Object.entries(itemList).filter(item => item[1]).map(item => item[0]);
    };
    const setFilteredItems = (checkedItemList, item) => {
        return products.filter(({ [item]: itemName }) => {
            if (itemName === "brand" || itemName === "color") {
                return checkedItemList.includes(itemName);
            }
            else {
                return checkedItemList.includes(itemName.toString());
            }
        });
    };
    const checkedBrands = setCheckedItems(brands);
    const filteredBrands = setFilteredItems(checkedBrands, "brand");
    const checkedMemory = setCheckedItems(memory);
    const filteredMemory = setFilteredItems(checkedMemory, "memory");
    const checkedRam = setCheckedItems(ram);
    const filteredRam = setFilteredItems(checkedRam, "ram");
    const checkedCpuCores = setCheckedItems(cpuCores);
    const filteredCpuCores = setFilteredItems(checkedCpuCores, "cpuCores");
    const checkedColors = setCheckedItems(colors);
    const filteredColors = setFilteredItems(checkedColors, "color");
    const setFilteredRange = (rangeType, item) => {
        return products.filter(({ [item]: itemName }) => {
            return itemName >= rangeType.min && itemName <= rangeType.max;
        });
    };
    const filteredPrice = setFilteredRange(priceRange, "price");
    const filteredScreenSize = setFilteredRange(screenSizeRange, "screenSize");
    const filteredbatteryCapacity = setFilteredRange(batteryCapacityRange, "batteryCapacity");
    const filteredSearchItems = products.filter(({ name }) => {
        return name.toLocaleLowerCase().includes(searchValue);
    });
    const brandsExist = filteredBrands.length ? true : false;
    const memoryExists = filteredMemory.length ? true : false;
    const ramExists = filteredRam.length ? true : false;
    const cpuCoresExist = filteredCpuCores.length ? true : false;
    const priceExists = filteredPrice.length ? true : false;
    const screenSizeExists = filteredScreenSize.length ? true : false;
    const batteryCapacityExists = filteredbatteryCapacity.length ? true : false;
    const colorsExist = filteredColors.length ? true : false;
    const searchItemsExist = filteredSearchItems.length ? true : false;
    const brandsChecked = checkedBrands.length ? true : false;
    const memoryChecked = checkedMemory.length ? true : false;
    const ramChecked = checkedRam.length ? true : false;
    const cpuCoresChecked = checkedCpuCores.length ? true : false;
    const colorsChecked = checkedColors.length ? true : false;
    const brandsNotFiltered = filteredBrands.length === 0;
    const memoryNotFiltered = filteredMemory.length === 0;
    const ramNotFiltered = filteredRam.length === 0;
    const cpuCoresNotFiltered = filteredCpuCores.length === 0;
    const colorsNotFiltered = filteredColors.length === 0;
    const brandsDontExist = (brandsChecked && brandsNotFiltered) ? true : false;
    const memoryDoesntExist = (memoryChecked && memoryNotFiltered) ? true : false;
    const ramDoesntExist = (ramChecked && ramNotFiltered) ? true : false;
    const cpuCoresDontExist = (cpuCoresChecked && cpuCoresNotFiltered) ? true : false;
    const colorsDontExist = (colorsChecked && colorsNotFiltered) ? true : false;
    const filterBrands = ({ brand }) => {
        return checkedBrands.includes(brand);
    };
    const filterColors = ({ color }) => {
        return checkedColors.includes(color);
    };
    const filterMemory = ({ memory }) => {
        return checkedMemory.includes(memory.toString());
    };
    const filterRam = ({ ram }) => {
        return checkedRam.includes(ram.toString());
    };
    const filterCpuCores = ({ cpuCores }) => {
        return checkedCpuCores.includes(cpuCores.toString());
    };
    const filterPrice = ({ price }) => {
        return price >= priceRange.min && price <= priceRange.max;
    };
    const filterScreenSize = ({ screenSize }) => {
        return screenSize >= screenSizeRange.min && screenSize <= screenSizeRange.max;
    };
    const filterBatteryCapacity = ({ batteryCapacity }) => {
        return batteryCapacity >= batteryCapacityRange.min && batteryCapacity <= batteryCapacityRange.max;
    };
    const filterSearchItems = ({ name }) => {
        return name.toLocaleLowerCase().includes(searchValue);
    };
    const existingItems = [brandsExist, memoryExists, ramExists, cpuCoresExist, priceExists, screenSizeExists, batteryCapacityExists, colorsExist, searchItemsExist];
    const filterFunctions = [filterBrands, filterMemory, filterRam, filterCpuCores, filterPrice, filterScreenSize, filterBatteryCapacity, filterColors, filterSearchItems];
    const filterProducts = (filterFuncArr) => {
        return filterFuncArr.reduce((totalArr, filterFunc) => {
            return totalArr.filter(filterFunc);
        }, products);
    };
    let setFilteredFinalProducts = (filterFuncArr) => {
        showFinalProducts(filterProducts(filterFuncArr));
    };
    let filterArrItemsByIdx = (srcArr, indexes) => {
        return srcArr.filter((el, i) => indexes.some(j => i === j));
    };
    let makeFinalProducts = (srcArr, indexes) => {
        setFilteredFinalProducts(filterArrItemsByIdx(srcArr, indexes));
    };
    let indexes = [];
    const setIndexes = (0, react_1.useCallback)(() => {
        indexes = existingItems.map((el, i) => {
            if (el === true) {
                return i;
            }
        }).filter(item => {
            return item || item === 0;
        }).map(item => {
            return Number(item);
        });
        if (indexes.length) {
            makeFinalProducts(filterFunctions, indexes);
        }
    }, [existingItems]);
    setIndexes();
    if (brandsDontExist || memoryDoesntExist || ramDoesntExist || cpuCoresDontExist || colorsDontExist || !priceExists || !screenSizeExists || !batteryCapacityExists || !searchItemsExist) {
        showFinalProducts([]);
    }
    const currentData = (0, react_1.useMemo)(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return finalProducts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, finalProducts]);
    const brandsArr = [filterSlice_1.setBrands, brands];
    const memoryArr = [filterSlice_1.setMemory, memory];
    const ramArr = [filterSlice_1.setRam, ram];
    const cpuCoresArr = [filterSlice_1.setCpuCores, cpuCores];
    const colorsArr = [filterSlice_1.setColors, colors];
    return (<div className={Home_module_scss_1.default.homeContainer}>
      <div className={Home_module_scss_1.default.filtersColumn}>
        <react_responsive_1.default maxWidth={699}>
          <div className={Home_module_scss_1.default.filtersCollapse}>
            <components_1.Collapse filterName="Фильтры" elementType="h5" collapsed={true}>
              <components_1.Filters handleChange={handleChange} setFirstPage={setFirstPage} brandsArr={brandsArr} memoryArr={memoryArr} ramArr={ramArr} cpuCoresArr={cpuCoresArr} colorsArr={colorsArr}/>
            </components_1.Collapse>
          </div>
        </react_responsive_1.default>
        <react_responsive_1.default minWidth={700}>
          <components_1.Filters handleChange={handleChange} setFirstPage={setFirstPage} brandsArr={brandsArr} memoryArr={memoryArr} ramArr={ramArr} cpuCoresArr={cpuCoresArr} colorsArr={colorsArr}/>
        </react_responsive_1.default>
      </div>
      <div className={Home_module_scss_1.default.productsColumn}>
        <components_1.Sorting />
        <div className={Home_module_scss_1.default.productListContainer}>
          {isLoading ? (<div className={Home_module_scss_1.default.loadingBlock}>
              <img src={Spinner_1s_200px_gif_1.default}/>
            </div>) : (currentData.length ? (<>
              <div className={Home_module_scss_1.default.productListWrapper}>
                <div className={Home_module_scss_1.default.productList}>
                  {currentData.map((item, index) => {
                return (<ProductItem_1.ProductItem productId={item.id} phoneImage={item.imageUrl} rating={item.rating} testimonials={item.testimonials} productName={item.name} priceValue={item.price} productCode={item.productCode} key={index}/>);
            })}
                </div>
              </div>
              <div className={Home_module_scss_1.default.productsPagination}>
                <components_1.Pagination className={Home_module_scss_1.default.paginationBar} currentPage={currentPage} totalCount={finalProducts.length} pageSize={pageSize} onPageChange={(page) => dispatch((0, filterSlice_1.setCurrentPage)(page))}/>
              </div>
            </>) : (<div className={Home_module_scss_1.default.productsNotFound}>
              <div className={Home_module_scss_1.default.emptyCart}>
                <img src={empty_cart_2_400x400_png_1.default} alt="empty cart"/>
              </div>
              <div>
                <h5>Товары не найдены</h5>
                <p>Попробуйте изменить критерии поиска</p>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
};
exports.Home = Home;
//# sourceMappingURL=index.js.map