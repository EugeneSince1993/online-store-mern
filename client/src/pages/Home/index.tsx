import React, { FC, useCallback, useEffect, useMemo } from "react";
import MediaQuery from 'react-responsive';
import { Filters, Sorting, Pagination, Collapse } from "../../components";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/product/asyncActions";
import { getRangeExtremes } from "../../redux/filter/asyncActions";
import spinner from '../../assets/img/Spinner-1s-200px.gif';
import { ProductItem } from "../../components/ProductItem";
import { selectProduct } from "../../redux/product/selectors";
import { setBrands, setColors, setCpuCores, setCurrentPage, setMemory, setRam } from "../../redux/filter/filterSlice";
import { IProduct } from "../../types/IProduct";
import emptyCart from "../../assets/img/empty-cart-2-400x400.png";
import styles from "./Home.module.scss";
import { IRange } from "../../redux/filter/types";

type filterFunc = (object: IProduct) => boolean;
type filterFuncArr = filterFunc[];
type sourceArr = boolean[] | filterFuncArr;

let pageSize = 8;

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { products, isLoading } = useAppSelector(selectProduct);
  const { sort, types, searchValue, currentPage, rangeExtremes } = useAppSelector(selectFilter);
  const { brands, memory, ram, cpuCores, colors, 
    priceRange, screenSizeRange, batteryCapacityRange } = types;

  let finalProducts: IProduct[] = products;
  const showFinalProducts = (value: any[]) => {
    finalProducts = value;
  };

  const setFirstPage = () => {
    dispatch(setCurrentPage(1));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    actionCreator: Function,
    entityName: any) => {
      const { name } = e.target;
      dispatch(actionCreator({
        ...entityName,
        [name]: !entityName[name]
      }));
      setFirstPage();
  };

  const getProducts = () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';

    dispatch(fetchProducts({sortBy, order}));
    setFirstPage();
  };

  useEffect(() => {
    getProducts();
  }, [sort.sortProperty]);

  useEffect(() => {
    dispatch(getRangeExtremes());
  }, []);

  const setCheckedItems = (itemList: any) => {
    return Object.entries(itemList).filter(item => item[1]).map(item => item[0]);
  };

  const setFilteredItems = (checkedItemList: any[], item: string) => {
    return products.filter(({ [item]: itemName }: any) => {
      if (itemName === "brand" || itemName === "color") {
        return checkedItemList.includes(itemName);
      } else {
        return checkedItemList.includes(itemName.toString());
      }
    });
  };

  const checkedBrands: any[] = setCheckedItems(brands);
  const filteredBrands: IProduct[] = setFilteredItems(checkedBrands, "brand");

  const checkedMemory: any[] = setCheckedItems(memory);
  const filteredMemory: IProduct[] = setFilteredItems(checkedMemory, "memory");

  const checkedRam: any[] = setCheckedItems(ram);
  const filteredRam: IProduct[] = setFilteredItems(checkedRam, "ram");

  const checkedCpuCores: any[] = setCheckedItems(cpuCores);
  const filteredCpuCores: IProduct[] = setFilteredItems(checkedCpuCores, "cpuCores");

  const checkedColors: any[] = setCheckedItems(colors);
  const filteredColors: IProduct[] = setFilteredItems(checkedColors, "color");

  const setFilteredRange = (rangeType: IRange, item: string) => {
    return products.filter(({[item]: itemName}: any) => {
      return itemName >= rangeType.min && itemName <= rangeType.max;
    });
  };
  const filteredPrice: IProduct[] = setFilteredRange(priceRange, "price");
  const filteredScreenSize: IProduct[] = setFilteredRange(screenSizeRange, "screenSize");
  const filteredbatteryCapacity: IProduct[] = setFilteredRange(batteryCapacityRange, "batteryCapacity");

  const filteredSearchItems = products.filter(({name}: IProduct) => {
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

  const filterBrands = ({ brand }: IProduct) => {
    return checkedBrands.includes(brand);
  };
  const filterColors = ({ color }: IProduct) => {
    return checkedColors.includes(color);
  };
  const filterMemory = ({ memory }: IProduct) => {
    return checkedMemory.includes(memory.toString());
  };
  const filterRam = ({ ram }: IProduct) => {
    return checkedRam.includes(ram.toString());
  };
  const filterCpuCores = ({ cpuCores }: IProduct) => {
    return checkedCpuCores.includes(cpuCores.toString());
  };
  const filterPrice = ({ price }: IProduct) => {
    return price >= priceRange.min && price <= priceRange.max;
  };
  const filterScreenSize = ({ screenSize }: IProduct) => {
    return screenSize >= screenSizeRange.min && screenSize <= screenSizeRange.max;
  };
  const filterBatteryCapacity = ({ batteryCapacity }: IProduct) => {
    return batteryCapacity >= batteryCapacityRange.min && batteryCapacity <= batteryCapacityRange.max;
  };
  const filterSearchItems = ({ name }: IProduct) => {
    return name.toLocaleLowerCase().includes(searchValue);
  };

  const existingItems: boolean[] = [brandsExist, memoryExists, ramExists, cpuCoresExist, priceExists, screenSizeExists, batteryCapacityExists, colorsExist, searchItemsExist];
  const filterFunctions: filterFuncArr = [filterBrands, filterMemory, filterRam, filterCpuCores, filterPrice, filterScreenSize, filterBatteryCapacity, filterColors, filterSearchItems];

  const filterProducts = (filterFuncArr: filterFuncArr) => {
    return filterFuncArr.reduce((totalArr: any[], filterFunc) => {
      return totalArr.filter(filterFunc);
    }, products);
  };
  let setFilteredFinalProducts = (filterFuncArr: filterFuncArr) => {
    showFinalProducts(filterProducts(filterFuncArr));
  };
  let filterArrItemsByIdx = (srcArr: any[], indexes: number[]) => {
    return srcArr.filter((el, i) => indexes.some(j => i === j));
  };
  let makeFinalProducts = (srcArr: sourceArr, indexes: number[]) => {
    setFilteredFinalProducts(filterArrItemsByIdx(srcArr, indexes));
  };

  let indexes: number[] = [];
  const setIndexes = useCallback(() => {
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

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return finalProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, finalProducts]);

  const brandsArr = [setBrands, brands];
  const memoryArr = [setMemory, memory];
  const ramArr = [setRam, ram];
  const cpuCoresArr = [setCpuCores, cpuCores];
  const colorsArr = [setColors, colors];
  
  return (
    <div className={styles.homeContainer}>
      <div className={styles.filtersColumn}>
        <MediaQuery maxWidth={699}>
          <div className={styles.filtersCollapse}>
            <Collapse filterName="Фильтры" elementType="h5" collapsed={true}>
              <Filters 
                handleChange={handleChange}
                setFirstPage={setFirstPage}
                brandsArr={brandsArr}
                memoryArr={memoryArr}
                ramArr={ramArr}
                cpuCoresArr={cpuCoresArr}
                colorsArr={colorsArr}
                rangeExtremes={rangeExtremes}
              />
            </Collapse>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={700}>
          <Filters 
            handleChange={handleChange}
            setFirstPage={setFirstPage}
            brandsArr={brandsArr}
            memoryArr={memoryArr}
            ramArr={ramArr}
            cpuCoresArr={cpuCoresArr}
            colorsArr={colorsArr}
            rangeExtremes={rangeExtremes}
          />
        </MediaQuery>
      </div>
      <div className={styles.productsColumn}>
        <Sorting />
        <div className={styles.productListContainer}>
          {isLoading ? (
            <div className={styles.loadingBlock}>
              <img src={spinner} />
            </div>
          ) : (currentData.length ? (
            <>
              <div className={styles.productListWrapper}>
                <div className={styles.productList}>
                  {currentData.map((item: any, index: number) => {
                    return (
                      <ProductItem
                        productId={item._id}
                        phoneImage={item.imageUrl}
                        rating={item.rating}
                        testimonials={item.testimonials}
                        productName={item.name}
                        priceValue={item.price}
                        productCode={item.productCode}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={styles.productsPagination}>
                <Pagination 
                  className={styles.paginationBar}
                  currentPage={currentPage}
                  totalCount={finalProducts.length}
                  pageSize={pageSize}
                  onPageChange={(page: number) => dispatch(setCurrentPage(page))}
                />
              </div>
            </>
          ) : (
            <div className={styles.productsNotFound}>
              <div className={styles.emptyCart}>
                <img src={emptyCart} alt="empty cart" />
              </div>
              <div>
                <h5>Товары не найдены</h5>
                <p>Попробуйте изменить критерии поиска</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
