const getFirstLetter = (user: string): string => {
  const match = user.match(/([a-zA-Z])/);
  return match ? match[1].toUpperCase() : "";
};

export default getFirstLetter;
