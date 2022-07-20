import React from 'react';
import * as loading from '../../asset/json/loading.json';
import * as done from '../../asset/json/done.json';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions2 = {
    loop: false,
    autoplay: true, 
    animationData: done.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Loading = ({loading}) => {
  return (
    <div>
      
    </div>
  )
}

export default Loading;