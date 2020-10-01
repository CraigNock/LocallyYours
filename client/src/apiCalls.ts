

export const fetchCoords = async (address: string): Promise<any> => {
  if (!address) return;

  return fetch(`/findAddress/${address}`)
  .then(data => data.json())
  .then(data => {
    console.log('FEdata', data);
    return data;
// ALSO ADD A NORTH AMERICA ONLY FILTER
  })
  .catch(err=>{
    console.log('fetchCoordsERR', err);
    return 'An error has occured';
  })
}