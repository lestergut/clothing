import React from 'react';

import Directory from '../../components/directory/directory';

import './homepage.scss';

const HomePage = ({ history }) => {
   return (
      <div className="homepage">
         <Directory />
      </div>
   );
};

export default HomePage;
