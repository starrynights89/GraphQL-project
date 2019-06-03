/* eslint-disable react/prop-types */
/* eslint-disable no-var */
import React from 'react';

export default ({ color, size }) => {
  var style = {
    backgroundColor: '#6ca6fd',
    width: 40,
    height: 40,
  };

  if (typeof color !== typeof undefined) {
    style.color = color;
  }
  if (typeof size !== typeof undefined) {
    style.width = size;
    style.heigh = size;
  }

  return <dev className="bouncer" style={style} />;
};
