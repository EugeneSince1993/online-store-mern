import { FC } from "react";
import ContentLoader from "react-content-loader";

export const ProductItemSkeletonAbove700: FC<any> = (props) => (
  <ContentLoader 
    speed={2}
    width={203}
    height={318}
    viewBox="0 0 203 318"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="404" cy="96" r="118" /> 
    <rect x="-12" y="486" rx="3" ry="3" width="276" height="35" /> 
    <rect x="13" y="20" rx="10" ry="10" width="176" height="149" /> 
    <rect x="13" y="181" rx="10" ry="10" width="51" height="26" /> 
    <circle cx="175" cy="194" r="13" /> 
    <rect x="13" y="220" rx="10" ry="10" width="176" height="46" /> 
    <rect x="13" y="278" rx="10" ry="10" width="99" height="27" /> 
    <rect x="151" y="273" rx="6" ry="6" width="37" height="34" />
  </ContentLoader>
);
