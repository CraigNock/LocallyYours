

export const fetchCoords = async (address: string): Promise<any> => {
  if (!address) return;

  return fetch(`/address/${address}`)
  .then(data => data.json())
  .then(data => {
    if(data.status === 200){
// ALSO ADD A NORTH AMERICA ONLY FILTER
      return data;
    } else {
      return (data.Error? data.Error : 'An error has occured');
    }
  })
  .catch(err=>{
    console.log('fetchCoordsERR', err);
    return 'An error has occured';
  })
}