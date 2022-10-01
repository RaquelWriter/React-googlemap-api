import '../styles/PopUpInfo.sass';
import houseIMG from '../images/house.png';
import { useContext } from 'react';
import { LocalizationContext, languages } from './LocalizationContext';

function PopUpInfo({ openInfoWindowId, center, buildingtypeInfoWindow, hasParkingInfoWindow, priceInfoWindow }){
  
  const { lang } = useContext(LocalizationContext);
  
  return(
    <div className='container-popupinfo'>
      <h3>{languages[lang]['infowindow-title']}</h3>
      <img src={houseIMG} alt='House' width='200px'/>
      <h2>{languages[lang]['infowindow-propID']} #{JSON.stringify(openInfoWindowId)}</h2>
      <h2>{languages[lang]['infowindow-typeofproperty']} {JSON.stringify(buildingtypeInfoWindow)}</h2>
      
      {hasParkingInfoWindow !== 'x'? 
        <h2>{languages[lang]['infowindow-parking']}: {languages[lang].No}</h2>
        : <h2>{languages[lang]['infowindow-parking']}: {languages[lang].Yes}</h2>

      }
      <h2>{languages[lang].Price}: {JSON.stringify(priceInfoWindow)} €/m2</h2>
      
      <h2>{JSON.stringify(center)}</h2>
    </div>
  );
}

export default PopUpInfo;