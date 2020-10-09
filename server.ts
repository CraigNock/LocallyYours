export {}
import express, { RequestHandler } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import request from 'request-promise';
import * as path from 'path';
import opencage from 'opencage-api-client';

const app: express.Application = express();
const PORT: string | number = process.env.PORT || 8000;


const addressCoordHandler: RequestHandler = async (req, res) => {
  const { address } = req.params;
  console.log('address', address);

  try {
    console.log('process.env.GEOCODE_KEY', process.env.GEOCODE_KEY);
    let data = await opencage.geocode({
      q: address, 
      countrycode: 'ca,us', 
      key:process.env.GEOCODE_KEY
    });
    console.log('BEdata.status', data.status);
    // console.log('BEdata', data);
    if(data.results[0] === undefined){
      // console.log('NAH');
      res.json({
        status: 404,
        coords: 'No results found.',
        fullAddress: null,
      });
    } else {
      res.json({
        status: 200,
        coords: data.results[0].geometry,
        fullAddress: data.results[0].formatted,
      });
    }
  } catch (err) { () => {
    console.log('addressCoordHandler err', err);
    res.json({
      status: 404,
      coords: err,
      fullAddress: null,
    });
  }}
  
}


app.use(express.static(path.join(__dirname, '/client/build')));
app.use(bodyParser.json()); 
app.use(cors());

app.get('/findAddress/:address', addressCoordHandler);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, ()=>{console.log(`Listening on Porto ${PORT}`);});