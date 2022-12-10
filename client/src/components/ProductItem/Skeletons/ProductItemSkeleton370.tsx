import { FC } from "react";
import ContentLoader from "react-content-loader";

export const ProductItemSkeleton370: FC<any> = props => (
  <ContentLoader 
    speed={2}
    width={161}
    height={306}
    viewBox="0 0 161 306"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="13" rx="10" ry="10" width="132" height="130" /> 
    <rect x="12" y="160" rx="10" ry="10" width="55" height="20" /> 
    <circle cx="135" cy="170" r="12" /> 
    <rect x="11" y="199" rx="10" ry="10" width="140" height="16" /> 
    <rect x="11" y="219" rx="10" ry="10" width="140" height="16" /> 
    <rect x="11" y="239" rx="10" ry="10" width="140" height="16" /> 
    <rect x="11" y="265" rx="10" ry="10" width="90" height="20" /> 
    <rect x="114" y="258" rx="7" ry="7" width="37" height="37" />
  </ContentLoader>
);
