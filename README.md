# [NOMOKO - Map Test - Raquel Sánchez Ventero]

(https://www.linkedin.com/in/raquelsanchezventero/) [![Linkedin]


Creating a Google Map using MAP API with REACT, WEBPACK, NODEJS and SASS.

* **FLOW:** App with Context -> MenuFilter -> Map -> GoogleMap -> Marks / InfoBox / InfoWindow
* **Localization:** I opted for using the last React Context, with useContext Hook. The language is store locally in JSON format in components/LocalizationContext.js. The language is selected in the MenuFilter component.
* **Loading the map:** I registered a new Google API for the map. For testing purposes, it's not protected,
so please take care of it.
* **Filtering:** I use useState for storing the data through the MenuFiltering component to the Map component.
The filtering is mostly using map and filter methods.
* **Map:** I took a new CSS for the map from snazzymaps.com. The map re-center itself when a marker is clicked.
After many testing, I opted for using the Google API Infobox for the price labels, instead of installing third party modules. I was thinking to use SVG, as I can render them with a background color, but I am not sure if they are totally reliable in all devices.
* **Comments:** The comments and the variables I used are both in english. All the code is fully commented.

## FILES AND COMPONENTS



## CHALLENGES - GOOGLE MAP

I never rendered a google map like this before. So, for me it's the first time. It took me two days to understand fully the concept of the Google Map itself. The most difficult part was to beautify all the thing together. For example, Google Maps doesn't let you disable to click on the Landmarks. Of course there are some modules over there, but for the test I was thinking you prefer to watch my coding.

## CHALLENGES - REACT CONTEXT

Also, I never did a React context with useContext. It was a great experience. I like this way very much.
