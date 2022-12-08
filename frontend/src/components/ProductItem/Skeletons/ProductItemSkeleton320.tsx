import { FC } from "react";
import ContentLoader from "react-content-loader";

export const ProductItemSkeleton320: FC<any> = props => (
  <ContentLoader 
    speed={2}
    width={146}
    height={298}
    viewBox="0 0 146 298"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="13" y="15" rx="10" ry="10" width="114" height="109" /> 
    <rect x="8" y="139" rx="10" ry="10" width="51" height="24" /> 
    <circle cx="121" cy="151" r="12" /> 
    <rect x="8" y="179" rx="10" ry="10" width="126" height="16" /> 
    <rect x="8" y="199" rx="10" ry="10" width="126" height="16" /> 
    <rect x="8" y="219" rx="10" ry="10" width="126" height="16" /> 
    <rect x="8" y="253" rx="10" ry="10" width="83" height="20" /> 
    <rect x="97" y="245" rx="7" ry="7" width="37" height="37" />
  </ContentLoader>
);
