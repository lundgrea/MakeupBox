export const fetchAllMakeup = async () => {
  const url = 'http://makeup-api.herokuapp.com/api/v1/products.json'
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('There was an error getting makeup')
  }
  const allMakeup = await response.json();
  return allMakeup
}

// export const fetchQuestionOne = async (answer1) => {
//   const url = ``;
//   const response = await fetch(url)
// }

