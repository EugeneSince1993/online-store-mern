import ContentLoader from "react-content-loader";

export const MainDataSkeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={610}
    height={270}
    viewBox="0 0 610 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="1" rx="10" ry="10" width="585" height="33" /> 
    <rect x="1" y="57" rx="10" ry="10" width="585" height="21" /> 
    <rect x="1" y="98" rx="10" ry="10" width="187" height="21" /> 
    <rect x="0" y="134" rx="10" ry="10" width="94" height="21" /> 
    <rect x="1" y="171" rx="10" ry="10" width="150" height="34" /> 
    <rect x="0" y="224" rx="10" ry="10" width="117" height="34" /> 
    <circle cx="155" cy="240" r="14" />
  </ContentLoader>
);
