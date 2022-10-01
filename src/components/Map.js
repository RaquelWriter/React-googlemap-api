import { useState } from 'react';
import '../styles/App.sass';
import dataProperties from '../docs/properties.json';
import { GoogleMap, Marker, InfoWindow, InfoBox} from "@react-google-maps/api";
import mapStyles from '../styles/MapStyles.js';
import PopUpInfo from './PopUpInfo'; // The InfoWindow when click on Marker

/* MAP FUNCTION */
export default function Map({ minRange, maxRange, typeOfBuilding, withparking }){

  //* STATE - INITIAL COORS
  const [center, setCenter] = useState({
    lat: 47.3836514,
    lng: 8.5482374
  });

  //* HANDLE - handleClickOnMarker - SET CENTER TO THE MARKER *//
  //* and OPEN a InfoWindow with ID and data *//
  const [openInfoWindowId, setOpenInfoWindowId] = useState(-1);
  const [buildingtypeInfoWindow, setBuildingtypeInfoWindow] = useState('');
  const [hasParkingInfoWindow, sethasParkingInfoWindow] = useState('');
  const [priceInfoWindow, setpriceInfoWindow] = useState('');
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  function handleClickOnMarker (coor, ID, buildingtype, parking, price) {
    console.log('1 openInfoWindowId inside handleClickOnMarker ' + ID);
    setOpenInfoWindowId(ID);
    sethasParkingInfoWindow(parking);
    setpriceInfoWindow(price);
    setBuildingtypeInfoWindow(buildingtype);
    setCenter(coor);
    setInfoWindowOpen(true);
    console.log('2 openInfoWindowId inside handleClickOnMarker ' + ID);
  };
  
  /* MARKERS RENDERING with FILTERS*/
  const InitialMarkers = () => {
    return(
      dataProperties.filter (
        (item) => withparking === 'x' ? item.Parking === withparking  : item === item // Filter only with Parking
        
        ).filter((item) => 
          typeOfBuilding[item.BuildingType.replace(' ', '')] === true //Filter TypeOfBuiding remove spaces

        ).filter((item) =>
          item['Price/m^2'] < maxRange && item['Price/m^2'] > minRange
          
        ).map((item, id) => {                
                const latitude = Number(item.Coordinates.slice(6, -1).split(" ")[0]);
                const longitude = Number(item.Coordinates.slice(6, -1).split(" ")[1]);
                // Remove the spaces in the typeOfBuilding for the icon image
                const iconImage = item.BuildingType.replace(" ", "");
                
                return (    
                  <div key={id}>
                  
                  <Marker
                    id={item.id}
                    name={item.id}
                    position={{lat: latitude, lng: longitude}}
                    onClick={(marker) => {handleClickOnMarker(marker.latLng, id.valueOf(), item.BuildingType.valueOf(), item.Parking.valueOf(), item['Price/m^2'].valueOf())}}
                    icon = {{url: require('../images/' + iconImage + '.png'), scaledSize: {width: 40, height: 40}}}
                  >
                    <InfoBox
                      options={{ pixelOffset: new window.google.maps.Size(-50, -60) }}
                      position={{lat: latitude, lng: longitude}}
                    >
                      <div style={{ backgroundColor: '#0C8288', width: 100, opacity: 0.75, padding: 3, borderRadius: 5,}}>
                        <div style={{ fontSize: 14, fontWeight: 'bolder',  fontColor: `#08233B`, color: 'white'}}>
                          <span>{item['Price/m^2'] + ' €/m2'}</span>
                        </div>
                      </div>
                    </InfoBox>                

                    {/*
                    // SAMPLE CODE FOR INFOBOX OPTIONS
                        var myOptions = {
                          content: boxText
                          ,disableAutoPan: false
                          ,maxWidth: 0
                          ,pixelOffset: new google.maps.Size(-140, 0)
                          ,zIndex: null
                          ,boxStyle: { 
                            background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/tags/infobox/1.1.12/examples/tipbox.gif') no-repeat"
                            ,opacity: 0.75
                            ,width: "280px"
                          }
                          ,closeBoxMargin: "10px 2px 2px 2px"
                          ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
                          ,infoBoxClearance: new google.maps.Size(1, 1)
                          ,isHidden: false
                          ,pane: "floatPane"
                          ,enableEventPropagation: false
                  };
                  // end example code for custom infobox
                    */}
                      
                  </Marker>
                  </div>
                );
                })
    )
  }

  /* END MARKS RENDERING */

  /* MAP RENDERING */
  /* INITIAL STYLE OF THE MAP */
  const containerStyle = {
    width: '100%',
    height: '100%',
    overflow: 'visible',
    position: 'absolute'
  };

  /* INITIAL MAP OPTIONS */
  const mapOptions = {  
    disableDefaultUI: true, // hide all controls
    styles: mapStyles,
    zoomControl: true // show zoom control
  };
  
  return (
      <GoogleMap
        language='en'
        region='en'
        visible='true'
        center={center}
        zoom={13}
        /* UI CONTROLS
        disableDefaultUI= 'true'
        mapTypeControl='false'
        panControl= 'false'
        zoomControl= 'false'
        scaleControl= 'false'
        streetViewControl= 'false'
        overviewMapControl= 'false'
        rotateControl= 'false'
        */
        mapContainerStyle={containerStyle}
        mapContainerClassName = 'map-container'
        options = {mapOptions}
      >

        {InitialMarkers()}

        { infoWindowOpen ? (
          <InfoWindow
          zIndex={100}
          marker={openInfoWindowId}
          position={center}
          onCloseClick={() => setInfoWindowOpen(false)}
          options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
        >
          
          <PopUpInfo
            priceInfoWindow={priceInfoWindow}
            hasParkingInfoWindow={hasParkingInfoWindow}
            buildingtypeInfoWindow={buildingtypeInfoWindow}
            openInfoWindowId={openInfoWindowId}
            center={center}
          />
          
        </InfoWindow>
        ): null }
        

      </GoogleMap>
  );
}
