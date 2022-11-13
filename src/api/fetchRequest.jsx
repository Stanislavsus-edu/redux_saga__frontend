export const fetchRequest = async (id = null) => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVICES}${id ? `/${id}` : ""}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};