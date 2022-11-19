import ContentLoader from "react-content-loader";

export const GallerySkeleton320 = (props: any) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={295}
    viewBox="0 0 300 295"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="32" y="4" rx="10" ry="10" width="234" height="194" /> 
    <rect x="19" y="218" rx="10" ry="10" width="78" height="70" /> 
    <rect x="106" y="218" rx="10" ry="10" width="78" height="70" /> 
    <rect x="192" y="218" rx="10" ry="10" width="78" height="70" /> 
    <circle cx="283" cy="101" r="13" />
  </ContentLoader>
);
