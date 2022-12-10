import { FC, MouseEvent, useRef, useState } from "react";
import { StarBorderIcon } from "../Icons/StarBorderIcon";
import { StarIcon } from "../Icons/StarIcon";

interface IRatingProps {
  precision?: number;
  totalStars?: number;
  emptyIcon?: FC;
  filledIcon?: FC;
}

export const Rating: FC<IRatingProps> = ({
  precision = 1,
  totalStars = 5,
  emptyIcon = StarBorderIcon,
  filledIcon = StarIcon
}) => {
  const [activeStar, setActiveStar] = useState(-1);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef<HTMLDivElement>(null);

  const calculateRating = (e: MouseEvent<HTMLElement>) => {
    const { width, left } = ratingContainerRef.current!.getBoundingClientRect();
    let percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setIsHovered(false);
    setActiveStar(calculateRating(e));
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e));
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    setHoverActiveStar(-1);
    setIsHovered(false);
  };

  const EmptyIcon = emptyIcon;
  const FilledIcon = filledIcon;

  return (
    <div 
      className="rating"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ratingContainerRef}
      style={{
        display: 'inline-flex',
        position: 'relative',
        cursor: 'pointer',
        textAlign: 'left'
      }}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        const activeState = isHovered ? hoverActiveStar : activeStar;

        const showEmptyIcon = activeState === -1 || activeState < index + 1;

        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <div 
            className="rating__star-container"
            key={index}
            style={{
              cursor: 'pointer'
            }}
          >
            <div 
              className="rating__star-basic"
              style={{
                width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%',
                overflow: 'hidden',
                position: 'absolute'
              }}
            >
              <FilledIcon />
            </div>
            <div
              className="rating__star-additional"
              style={{
                color: showEmptyIcon ? 'gray' : 'inherit'
              }}
            >
              {showEmptyIcon ? <EmptyIcon /> : <FilledIcon />}
            </div>
          </div>
        );
      })}
    </div>
  );
};
