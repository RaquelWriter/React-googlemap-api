# React app to show and filter directions in a Google Map - Raquel Sánchez Ventero

(https://www.linkedin.com/in/raquelsanchezventero/)


Creating a Google Map using MAP API with REACT, WEBPACK, NODEJS, and SASS.
Localized in english and german. Clickable custom markers with filtered data.

## INSTRUCTIONS

Download the zip and unzip. Open the folder in Visual Code Studio or your preferred code editor.
For installing the node modules, open the Terminal and type: npm install.
Then type npm start.

## CONSIDERATIONS

* **FLOW:**  App -> LocalizationContext -> MenuFilter -> Map -> GoogleMap -> Marks / InfoBox / InfoWindow
* **Localization:** I opted for using the last React Context, with useContext Hook. The language is stored locally in JSON format in components/LocalizationContext.js. The language is selected in the MenuFilter component.
* **Loading the map:** I registered a new Google API of my own for the map. For testing purposes, it's not protected,
so please take care of it.
* **Filtering:** I use useState for storing the data through the MenuFiltering component to the Map component.
The filtering is mostly using map and filter methods.
* **Map:** I took a new CSS for the map from snazzymaps.com. The map re-centers itself when a marker is clicked.
After much testing, I opted for using the Google API Infobox for the price labels, instead of installing third-party modules. I was thinking to use SVG, as I can render them with a background color, but I am not sure if they are reliable in all devices.
* **Comments:** The comments and the variables I used are both in English. All the code is fully commented on.
* **Vulnerabilities:** About the 6 vulnerabilities shown by npm when installing, they can be ignored. More info: https://stackoverflow.com/questions/72489256/6-high-severity-vulnerabilities-in-react-icons-4-4-0

## FILES AND COMPONENTS

### DOCS FOLDER 

**docs/properties.csv** The CSV provided for the test. It's not used in the app.

**docs/properties.json** The properties.csv in JSON format. This is imported and used for the app in components/menufilter.js

### SRC FOLDER

**App.js** -> Load the Google API and renders the MenuFilter component within the LocalizationContext.Provider (which stores the state of the language selected. By default, it's in English.)

### COMPONENTS FOLDER

**Components/LocalizationContext.js** -> Stores the language texts for the localization inside the constant 'language' in JSON format. This component creates the context for the App with the createContext method from  react. Its default value is null.
export const LocalizationContext = createContext(
  null // default value
);
**Components/MenuFilter.js** -> Renders the left menu, the language menu, and calls the Map component. Also filters the data and passes the data selected through props to the Map component.

**Components/Map.js** -> Map component renders the Google Map. Inside this, renders the Markers components using iteration (map and filter methods) to show only the markers and data which match the props received. Renders the markers component of Google Map. Also renders the Infobox comp. (for the prices labels) and only one InfoWindow comp. outside the loop. This InfoWindow also has a child component: PopUpInfo.

**Components/PopUpInfo.js** -> This component inherit from InfoWindow. Shows the texts for the 'basic information about the property as required in the test. Also has some styling with SASS.

### STYLES

**SASS** -> The stylesheest are in SASS format.


