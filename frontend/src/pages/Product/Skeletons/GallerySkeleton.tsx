import ContentLoader from "react-content-loader";

export const GallerySkeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={415}
    height={415}
    viewBox="0 0 415 415"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="232" y="123" rx="0" ry="0" width="1" height="0" /> 
    <rect x="52" y="2" rx="10" ry="10" width="311" height="297" /> 
    <circle cx="396" cy="149" r="18" /> 
    <rect x="27" y="322" rx="10" ry="10" width="66" height="62" /> 
    <rect x="113" y="322" rx="10" ry="10" width="66" height="62" /> 
    <rect x="197" y="322" rx="10" ry="10" width="66" height="62" /> 
    <rect x="280" y="322" rx="10" ry="10" width="66" height="62" />
  </ContentLoader>
);
