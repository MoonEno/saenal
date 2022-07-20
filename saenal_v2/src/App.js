import { Fragment, useEffect, useRef, useState } from 'react';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Head';





function App() {

  const [enterFlag, setEndterFlag] = useState(false);

  const videoRef = useRef();
  
  useEffect(() => {
    let v = document.getElementById("randingVideo");
    if (v) {
      v.playbackRate = 0.5;
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
      : <div className='randingZone'>
            <div className='randingBackDiv'>
            </div>

            <video ref={videoRef} id="randingVideo" src='/video/randing.mp4' autoPlay muted ></video>

            <div className='randingButton'><button className="glow-on-hover" type="button" onClick={()=> goEnter()}>들어가기</button></div>
        </div>
      }
    
   
    </Fragment>
  );
}

export default App;
