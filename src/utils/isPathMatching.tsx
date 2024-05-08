export const isPathMatching = (template: string, path: string): boolean => {
  const templateParts = template.split("/");
  const pathParts = path.split("/");

  if (templateParts.length !== pathParts.length) {
    return false;
  }

  return templateParts.every((templatePart, index) => {
    return templatePart.startsWith("$") || templatePart === pathParts[index];
  });
};
