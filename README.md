# NOMOKO - Map Test - Raquel Sánchez Ventero

(https://www.linkedin.com/in/raquelsanchezventero/)


Creating a Google Map using MAP API with REACT, WEBPACK, NODEJS, and SASS.
Localized in english and german. Clickable custom markers with filtering data.

## INSTRUCTIONS

Download the zip and unzip. Open the folder in Visual Code Studio.
For installing the node modules, open the Terminal and type: npm install.
Then type npm start.

## CONSIDERATIONS

* **FLOW:** LocalizationContext -> App -> MenuFilter -> Map -> GoogleMap -> Marks / InfoBox / InfoWindow
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

**SASS** -> As I am not very experienced with SASS, I created the CSS, and then they were converted to SASS, fixing some differences by hand.

## CHALLENGES - GOOGLE MAP

I've never rendered a google map like this before. So, for me, it's the first time. It took me two days to understand fully the concept of the Google Map itself. The most difficult part was to beautify all the things together. For example, Google Maps doesn't let you disable clicking on the Landmarks. Of course, there are some modules over there, but for the test, I was thinking you prefer to watch my coding.

## NEXT STEPS

The code could be separated into small components to make it more readable, for example. And more improves.
But as a **Minimum Viable Product, I think the work is done.**
I hope you can take my test as a proficient Jr. FrontEnd developer, who can learn very quickly.
