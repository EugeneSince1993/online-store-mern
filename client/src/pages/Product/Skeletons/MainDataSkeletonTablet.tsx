import ContentLoader from "react-content-loader";

export const MainDataSkeletonTablet = (props: any) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={414}
    viewBox="0 0 300 414"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="5" rx="10" ry="10" width="295" height="27" /> 
    <rect x="1" y="60" rx="10" ry="10" width="295" height="15" /> 
    <rect x="1" y="79" rx="10" ry="10" width="295" height="15" /> 
    <rect x="1" y="116" rx="10" ry="10" width="130" height="15" /> 
    <rect x="1" y="155" rx="10" ry="10" width="61" height="15" /> 
    <rect x="1" y="198" rx="10" ry="10" width="106" height="21" /> 
    <rect x="0" y="244" rx="10" ry="10" width="117" height="34" /> 
    <circle cx="157" cy="262" r="15" />
  </ContentLoader>
);
