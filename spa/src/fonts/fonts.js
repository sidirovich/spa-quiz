import { createGlobalStyle } from 'styled-components';

//Light
import opensanslight from './opensanslight.woff';
import opensanslightTwo from './opensanslight.woff2';
//import opensanslightTtf from './opensanslight.ttf';
//Default
import opensans from './opensans.woff';
import opensansTwo from './opensans.woff2';
import opensansTtf from './opensans.ttf';

//Semibold
//import opensanssemibold from './opensanssemibold.woff';
//import opensanssemiboldTwo from './opensanssemibold.woff2';
//import opensanssemiboldTtf from './opensanssemibold.ttf';

//Bold
import opensansbold from './opensansbold.woff';
import opensansboldTwo from './opensansbold.woff2';
import opensansboldTtf from './opensansbold.ttf';

//Extra Bold
import opensansextrabold from './opensansextrabold.woff';
import opensansextrabold2 from './opensansextrabold.woff2';
import opensansextraboldTtf from './opensansextrabold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'OpenSans';
        src: local('Open Sans Light'), local('OpenSans-Light'), url(${opensanslightTwo}) format('woff2'), url(${opensanslight}) format('woff'), url('opensanslightTtf.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: local('Open Sans'), local('OpenSans'), url(${opensansTwo}) format('woff2'), url(${opensans}) format('woff'), url(${opensansTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url('./opensanssemibold.woff2') format('woff2'), url('opensanssemibold.woff') format('woff'), url('opensanssemibold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: local('OpenSansBold'), local('OpenSans-Bold'), url(${opensansboldTwo}) format('woff2'), url(${opensansbold}) format('woff'), url(${opensansboldTtf}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: local('OpenSansExtraBold'), local('OpenSans-Extrabold'), url(${opensansextrabold2}) format('woff2'), url(${opensansextrabold}) format('woff'), url(${opensansextraboldTtf}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }
`;