import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

document.documentElement.lang = 'en';

ReactDOM.render(<App />, document.getElementById('app'));

export default ReactDOM.render;
