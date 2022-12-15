import { FC } from "react";
import ContentLoader from "react-content-loader";

export const ProductItemSkeletonTablet: FC<any> = props => (
  <ContentLoader 
    speed={2}
    width={185}
    height={298}
    viewBox="0 0 185 298"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="12" rx="10" ry="10" width="157" height="132" /> 
    <rect x="14" y="158" rx="10" ry="10" width="50" height="25" /> 
    <circle cx="153" cy="171" r="12" /> 
    <rect x="13" y="198" rx="10" ry="10" width="153" height="17" /> 
    <rect x="13" y="219" rx="10" ry="10" width="153" height="17" /> 
    <rect x="13" y="254" rx="10" ry="10" width="96" height="22" /> 
    <rect x="131" y="248" rx="10" ry="10" width="36" height="35" />
  </ContentLoader>
);
