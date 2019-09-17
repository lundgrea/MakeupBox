export const fetchMakeup = async (search) => {
  const url = `http://makeup-api.herokuapp.com/api/v1/${search}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error retreiving your makeup suggestions')
  };
  const makeup = await response.json();
  return makeup;
}