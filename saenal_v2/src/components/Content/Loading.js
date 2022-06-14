import React from 'react';
import Lottie from 'react-lottie';
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
        {!loading ? 
         (<Lottie options={defaultOptions} height={100} width= {100} />) :
         (<Lottie options={defaultOptions2} height={100} width= {100} />)}
        
    </div>
  )
}

export default Loading;