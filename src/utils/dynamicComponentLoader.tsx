import { Suspense, lazy } from "react";

export const dynamicThumbnailLoader = (thumbnail: number) => {
  const MarkdownPreview = lazy(
    () => import(`../assets/account-thumbnails/color-${thumbnail}.svg?react`)
  );
  return (
    <Suspense fallback={<></>}>
      <MarkdownPreview />
    </Suspense>
  );
};
