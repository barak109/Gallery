export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const convertUser = (user: any) => {
  const {name, picture, email, location} = user.data.results[0];
  return {
    id: uid(),
    name: `${name.first} ${name.last}`,
    email,
    image: picture.large,
    address: `${location.street.number}, ${location.street.name}, ${location.city}`
  };
};

export const longString3Dots = (item: any, limit: number) => {
  return item.length > limit ? `${item.slice(0, limit - 3)}...` : item;
};
