
import Commercial from '../images/Commercial.png';
import Residential from '../images/Residential.png';
import Industrial from '../images/Industrial.png';
import Mixeduse from '../images/Mixeduse.png';
import Offices from '../images/Offices.png';

function CustomMarker({ typeOfBuilding }){
    switch (typeOfBuilding){
      case ('Commercial') : return {Commercial};
      case ('Offices') : return {Offices};
      case ('Industrial') : return {Industrial};
      case ('Residential') : return {Residential};
      case ('Mixeduse') : return {Mixeduse};
      default : return {Residential};
    }
}
export default CustomMarker;