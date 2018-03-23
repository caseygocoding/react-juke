'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

ReactDOM.render(
  <div>
    <Sidebar />
    <Main />
    <Footer />
  </div>,
  document.getElementById('app')
)





