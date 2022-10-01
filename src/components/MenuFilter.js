import { useState, useContext } from 'react';
import Map from './Map';
import '../styles/MenuFilter.sass';
import { LocalizationContext, languages } from './LocalizationContext';

function MenuFilter() {

  const {lang, setLang} = useContext(LocalizationContext);

  /* LANGUAGE STATE */
  const handleChangeLang = (languageId) => {
    setLang(languageId);
    // 0 English
    // 1 German
  }

  /* FORM STATE - FILTERING WITHPARKING */
  const [withparking, setWithParking] = useState('');
  function handleChangeParking(event){
    return (
      event.target.checked ?
      setWithParking('x')
      : setWithParking('')
    );
  }
  /* FORM STATE - FILTERING typeOfBuilding */
  const arrTypeOfBuilding=
    {'Residential': true,
    'Offices': true,
    'Commercial': true,
    'Industrial': true,
    'Mixeduse': true}   
  ;
  const [typeOfBuilding, setTypeOfBuilding] = useState(arrTypeOfBuilding);
  const handleChangeTypeOfBuilding = (event) => {
    const selectedType = event.target.value;
    const boolPrevious = typeOfBuilding[selectedType];
    console.log('PRIMER' + JSON.stringify(typeOfBuilding));
    console.log('DATO ' + typeOfBuilding[selectedType]);
    return(
      setTypeOfBuilding(prevState => ({
        ...prevState, 
        [selectedType] : 
          (
            boolPrevious ? false : true
          )
      }))
    );
  }

  /* FORM STATE - FILTERING PRICE RANGE */
  // MINIMUM
  const [minRange, setMinRange] = useState(0)
  const handleChangeMinPriceRange = (e) => {
    setMinRange(e.target.value)
  }
  //MAXIMUM
  const [maxRange, setMaxRange] = useState(0)
  const handleChangeMaxPriceRange = (e) => {
    setMaxRange(e.target.value)
  }

  // CHANGE THE CLASS of BUTTONS
  // For hover, unhover in CSS
  function setClassName(clss){
    // If the typeofBuilding was selected as true
    // Button will be unhovered
    return(
      typeOfBuilding[clss] === true ?
        ('hovered')
        :
        ('unhovered')
    )
  }

  return(
    <>
    {/* MAP RENDER */}
    <div id='map-div-container'>
      <Map
        minRange = {minRange}
        maxRange = {maxRange}
        typeOfBuilding = {typeOfBuilding}
        withparking = {withparking}
      />
    </div>

    {/* LANG MENU RENDER */}
    <div className='menu-lang'>
      <button type='button' onClick={() => {handleChangeLang(0)}}>ENGLISH</button>
      <button type='button' onClick={() => {handleChangeLang(1)}}>DEUTSCH</button>
    </div>
    

    {/* MENU RENDER */}
    <div className='menu-left-container'>
      <h2>{languages[lang]['menu-title']}</h2>
      
      <div className='form-wrapper'>
        <form>
          <div className='form-parking'>
            <input
              type='checkbox'
              name='parking'
              value='widthParking'
              onChange={handleChangeParking}
            />
            <label htmlFor='parking'>{languages[lang]['menu-titleparking']}</label>
          </div>
          <div className='form-building'>
            <h3>{languages[lang]['menu-titlebuildingtype']}</h3>
            <div className='form-building-buttons'>
              <button type="button" id='residential-button'
                  className={setClassName('Residential')}
                  onClick={(e) => handleChangeTypeOfBuilding(e) } value='Residential'>
                  <img className='btn-img' src={require('../images/Residential.png')} alt='' />
                  {languages[lang]['menu-bt-Residential']}</button>
              <button type="button" id='offices-button'
                  className={setClassName('Offices')}
                  onClick={(e) => handleChangeTypeOfBuilding(e)} value='Offices'>
                  <img className='btn-img' src={require('../images/Offices.png')} alt='' />
                  {languages[lang]['menu-bt-Offices']}</button>
              <button type="button" id='commercial-button'
                  className={setClassName('Commercial')}
                  onClick={(e) => handleChangeTypeOfBuilding(e)} value='Commercial'>
                  <img className='btn-img' src={require('../images/Commercial.png')} alt='' />
                  {languages[lang]['menu-bt-Commercial']}</button>
              <button type="button" id='industrial-button'
                  className={setClassName('Industrial')}
                  onClick={(e) => handleChangeTypeOfBuilding(e)} value='Industrial'>
                  <img className='btn-img' src={require('../images/Industrial.png')} alt='' />
                  {languages[lang]['menu-bt-Industrial']}</button>
              <button type="button" id='mixeduse-button'
                  className={setClassName('Mixeduse')}
                  onClick={(e) => handleChangeTypeOfBuilding(e)} value='Mixeduse'>
                  <img className='btn-img' src={require('../images/Mixeduse.png')} alt='' />
                  {languages[lang]['menu-bt-Mixeduse']}</button>
            </div>

          </div>
          <div className='form-price'>
            <h3>{languages.Price}</h3>
            <label forhtml='price-range-min'>{languages[lang]['menu-minimum']} - {minRange} €/m2</label>
            <input type='range' id='price-range-min' name='price-range-min' min='500' max='5000' onChange={(e) => handleChangeMinPriceRange(e)}></input>
            <label forhtml='price-range-max'>{languages[lang]['menu-maximum']} - {maxRange} €/m2</label>
            <input type='range' id='price-range-max' name='price-range-max' min='500' max='5000' onChange={(e) => handleChangeMaxPriceRange(e)}></input>
          
          </div>

        </form>
      </div>

    </div>
    </>
  );
}

export default MenuFilter;