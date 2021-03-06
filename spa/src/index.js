import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { MainComponent } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainComponent />, document.getElementById('root'));

serviceWorker.unregister();
