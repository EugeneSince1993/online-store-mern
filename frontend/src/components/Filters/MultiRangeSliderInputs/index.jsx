import { useEffect, useState } from 'react';
import styles from './MultiRangeSliderInputs.module.scss';
import { MultiRangeSlider } from '../MultiRangeSlider';
import classNames from 'classnames';
import { useAppDispatch } from '../../../redux/hooks';
import { 
	setMaxBatteryCapacity,
	setMaxPrice, 
	setMaxScreenSize, 
	setMinBatteryCapacity, 
	setMinPrice, 
	setMinScreenSize } from '../../../redux/filter/filterSlice';
import { debounce } from 'lodash';

export const MultiRangeSliderInputs = ({ min, max, step, inputType, setFirstPage }) => {
	const dispatch = useAppDispatch();

  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);

	useEffect(() => {
		set_minValue(min);
	}, [min]);

	useEffect(() => {
		set_maxValue(max);
	}, [max]);

	const handleInput = (e) => {
		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
	};

	const handleMinChange = (e) => {
		set_minValue(e.target.value);
	};
	const handleMaxChange = (e) => {
		set_maxValue(e.target.value);
	};

	const dispatchMin = () => {
		if (inputType === "price") {
			dispatch(setMinPrice(minValue));
		}
		if (inputType === "screenSize") {
			dispatch(setMinScreenSize(minValue));
		}
		if (inputType === "batteryCapacity") {
			dispatch(setMinBatteryCapacity(minValue));
		}
	};

	const dispatchMax = () => {
		if (inputType === "price") {
			dispatch(setMaxPrice(maxValue));
		}
		if (inputType === "screenSize") {
			dispatch(setMaxScreenSize(maxValue));
		}
		if (inputType === "batteryCapacity") {
			dispatch(setMaxBatteryCapacity(maxValue));
		}
	};

	const dispatchExtremes = debounce(() => {
		dispatchMin();
		dispatchMax();
	}, 400);

	useEffect(() => {
		dispatchExtremes();
		setFirstPage();
	}, [minValue, maxValue]);

  return (
    <div className={styles.multiRangeSliderInputs}>
			<div className={styles.multiRangeSliderContainer}>
				<MultiRangeSlider
					inputType={inputType}
					min={min}
					max={max}
					step={step}
					ruler={false}
					label={false}
					preventWheel={false}
					minValue={minValue}
					maxValue={maxValue}
					onInput={handleInput}
				/>
			</div>
			<div className={styles.rangeFields}>
				<div className={classNames(styles.rangeFieldsContainer, styles.left)}>
          <div className={styles.from}>
						<span>от</span>
					</div>
					<div className={styles.rangeFieldsInput}>
						<input 
							type="number" 
							value={minValue} 
							onChange={handleMinChange} 
						/>
					</div>
				</div>
				<div className={classNames(styles.rangeFieldsContainer, styles.right)}>
					<div className={styles.to}>
						<span>до</span>
					</div>
					<div className={styles.rangeFieldsInput}>	
						<input 
							type="number" 
							value={maxValue} 
							onChange={handleMaxChange}
						/>
					</div>
				</div>
			</div>
    </div>
  );
};
