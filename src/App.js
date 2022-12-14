import { React, useState } from 'react';
import './styles/App.sass';
import MenuFilter from './components/MenuFilter';
import { useLoadScript } from '@react-google-maps/api';
import { LocalizationContext } from './components/LocalizationContext';

function App(){

  const [lang, setLang] = useState(0);

  // LOADING THE GOOGLE API KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBX1z5nvjcjzyxSMT-QCVS3ERu6Y3iNSb0',
  });
  if (!isLoaded) return <div>Loading...</div>
    return (
      <>
        <LocalizationContext.Provider value={{ lang, setLang }}>
          <MenuFilter /> {/*Render the menu */}
        </LocalizationContext.Provider>

      </>
    );
}
export default App;
