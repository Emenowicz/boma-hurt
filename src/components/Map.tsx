import React from 'react';

const Map: React.FC = () => {
  return (
      <iframe width="100%" height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?hl=pl&amp;q=Boma%20Hurt&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
  );
};

export default Map;