import { BreadcrumbItem } from "./Breadcrumb";

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathSegments = pathname.split("/").filter((segment) => segment);

  if (pathSegments.length === 1) {
    return [{ text: "Projects overview" }];
  }

  const breadcrumbs: (BreadcrumbItem | null)[] = pathSegments.map(
    (segment, index) => {
      const decodedSegment = decodeURIComponent(segment);

      if (index === 1) {
        return { text: decodedSegment, isDropdown: true };
      } else if (index === 3) {
        return { text: decodedSegment, shouldAddDivider: true };
      }
      return null;
    }
  );
  return breadcrumbs.filter(
    (breadcrumb): breadcrumb is BreadcrumbItem => breadcrumb !== null
  );
};
