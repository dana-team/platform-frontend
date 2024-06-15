import { BreadcrumbItem } from "./Breadcrumb";

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathSegments = pathname.split("/").filter((segment) => segment);

  if (pathSegments.length === 1) {
    return [{ text: "Projects overview" }];
  }

  const breadcrumbs: (BreadcrumbItem | null)[] = pathSegments.map(
    (segment, index) => {
      if (index === 1) {
        return { text: segment, isDropdown: true };
      } else if (index === 3) {
        return { text: segment, shouldAddDivider: true };
      }
      return null;
    }
  );

  return breadcrumbs.filter(
    (breadcrumb): breadcrumb is BreadcrumbItem => breadcrumb !== null
  );
};
