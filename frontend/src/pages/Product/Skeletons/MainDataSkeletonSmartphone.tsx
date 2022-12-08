import ContentLoader from "react-content-loader";

export const MainDataSkeletonSmartphone = (props: any) => (
  <ContentLoader 
    speed={2}
    width={290}
    height={320}
    viewBox="0 0 290 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="35" rx="10" ry="10" width="285" height="26" /> 
    <rect x="1" y="93" rx="10" ry="10" width="285" height="16" /> 
    <rect x="1" y="118" rx="10" ry="10" width="285" height="16" /> 
    <rect x="1" y="157" rx="10" ry="10" width="158" height="16" /> 
    <rect x="1" y="196" rx="10" ry="10" width="58" height="16" /> 
    <rect x="1" y="242" rx="10" ry="10" width="128" height="23" /> 
    <rect x="1" y="288" rx="10" ry="10" width="118" height="30" /> 
    <circle cx="158" cy="303" r="14" /> 
    <rect x="1" y="3" rx="10" ry="10" width="285" height="26" />
  </ContentLoader>
);
