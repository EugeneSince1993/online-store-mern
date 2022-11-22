import ContentLoader from "react-content-loader";

export const GallerySkeletonTablet = (props: any) => (
  <ContentLoader 
    speed={2}
    width={298}
    height={414}
    viewBox="0 0 298 414"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="36" y="19" rx="10" ry="10" width="222" height="267" /> 
    <circle cx="277" cy="152" r="15" /> 
    <rect x="20" y="322" rx="10" ry="10" width="80" height="71" /> 
    <rect x="112" y="322" rx="10" ry="10" width="80" height="71" /> 
    <rect x="203" y="322" rx="10" ry="10" width="80" height="71" />
  </ContentLoader>
);
