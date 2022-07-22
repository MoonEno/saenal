import { Fragment, useEffect, useRef, useState } from 'react';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Head';
import Typed from "react-typed";
import { Button } from '@mui/material';





function App() {

  const [enterFlag, setEndterFlag] = useState(false);

  const videoRef = useRef();
  
  useEffect(() => {
    let v = document.getElementById("randingVideo");
    if (v) {
      v.playbackRate = 0.7;
    }
    if (!enterFlag) {
      setTimeout(()=>{ setEndterFlag(true) }, 20000);
    }
    
  }, []);

  const goEnter = () => {
    setEndterFlag(true);
  }

  
  return (

    <Fragment>
      {enterFlag ? 
      <div className="App">
            <Header />
            <Content />
            <Footer />
      </div>
      : <div className='randingZone' onClick={()=> goEnter()}>
            <div className='randingBackDiv'>
            </div>

            <video ref={videoRef} id="randingVideo" src='/video/randing.mp4' autoPlay muted loop></video>

            <div className='randingButton'>
              <Typed
                    strings={[
                      "pursue for Together",
                      "pursue for Trust",
                      "pursue for Quality",
                      "pursue for Design",
                      "SAENAL DESIGN",
                    ]}
                    typeSpeed={130}
                    backSpeed={80}
                  >
                </Typed>
             </div>
            {/* <button className="glow-on-hover" type="button" onClick={()=> goEnter()}>들어가기</button> */}
        </div>
      }
    
   
    </Fragment>
  );
}

export default App;
