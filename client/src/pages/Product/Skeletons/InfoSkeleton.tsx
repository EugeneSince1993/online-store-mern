import ContentLoader from "react-content-loader";

export const InfoSkeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={310}
    height={235}
    viewBox="0 0 310 235"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="11" rx="10" ry="10" width="128" height="26" /> 
    <rect x="165" y="11" rx="10" ry="10" width="77" height="26" /> 
    <rect x="14" y="65" rx="10" ry="10" width="173" height="19" /> 
    <rect x="14" y="92" rx="10" ry="10" width="202" height="19" /> 
    <rect x="14" y="119" rx="10" ry="10" width="208" height="19" /> 
    <rect x="14" y="146" rx="10" ry="10" width="121" height="19" /> 
    <rect x="14" y="172" rx="10" ry="10" width="185" height="19" /> 
    <rect x="14" y="199" rx="10" ry="10" width="44" height="19" /> 
    <rect x="242" y="65" rx="10" ry="10" width="29" height="19" /> 
    <rect x="242" y="92" rx="10" ry="10" width="37" height="19" /> 
    <rect x="242" y="119" rx="10" ry="10" width="21" height="19" /> 
    <rect x="242" y="146" rx="10" ry="10" width="21" height="19" /> 
    <rect x="242" y="172" rx="10" ry="10" width="37" height="19" /> 
    <rect x="242" y="199" rx="10" ry="10" width="62" height="19" />
  </ContentLoader>
);
