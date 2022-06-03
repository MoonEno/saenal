import React, { Fragment, useEffect, useState } from 'react'

import list from  '../../CONSTANT/data';
import CategoryBox from './CategoryBox';
import Gallery from './Gallery';
import Slide from './Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapLocation, faPhone} from '@fortawesome/free-solid-svg-icons'
import Partners from './Partners';
import ContactUs from './ContactUs';
import Chart from './Chart';


export default function Home() {

    const [dataList, setDataList] = useState([]);
    const [item, setItem] = useState('');
    const [curIdx, setCurIdx] = useState(0);


    useEffect(() => {
        if (list.length > 0) {
            setDataList(list);
        }
    }, []);

    useEffect(() => {
        setItem(dataList[curIdx]);
    }, [dataList]);

    useEffect(() => {
        setItem(dataList[curIdx])
    }, [curIdx]);

    useEffect(() => {
        if (typeof item === 'object') {
            // object가 있음
        }
    }, [item]);

    const changeIdx = (type) => {

        if (curIdx === 0 && type < 0) {
            setCurIdx(dataList.length-1);
        } else if (curIdx === (dataList.length-1) && type > 0 ) {
            setCurIdx(0);
        } else {
            let cur = curIdx + type;
            setCurIdx(cur);
        }
    }

    const clickCategoryBox = (num) => {
        setCurIdx(num-1);
    }

    const companyLocate = () => {
        console.log("locate");
    }

    const companyCall = () => {
        console.log("call");
    }

    return (
        <Fragment>
            <section id="home" className='home'>
                <Slide item={item} changeIdx={changeIdx} />
            </section>
            <section className="category" style={{paddingLeft: '5%', paddingRight: '5%'}}>
                {dataList.map((content, idx) => (
                    <CategoryBox content={content} key={idx} clickCategoryBox={clickCategoryBox} curIdx = {curIdx}/>
                ))}
            </section>
            <section className="gallery" id="gallery">
                <Gallery item={item} />
            </section>
            <section className="about" id="about" style={{backgroundImage: `url('/images/about-bg.jpg')`}}>
                <div className="content">
                    <span>
                        <b style={{fontSize:'8rem' , color:'white'}}>SAENAL</b>  <br></br> 
                        <b style={{color:'#0CB8A5'}}>D</b><font style={{color:'white'}}>ESIGN &</font>  <b style={{color:'#0CB8A5'}}>P</b><font style={{color:'white'}}>RINTING</font>
                     </span>
                    {/* <h3>협업의 가치</h3> 
                    <p> 처음에는 우리가 습관을 만들지만 <br/> 그 다음에는 습관이 우리를 만듭니다</p> */}
                    {/* <a href="#" className="btn">read more</a> */}
                </div>
            </section>
            
            <section className="partners" id="partners">
                <Partners />
            </section>

            <section className="aboutUs" id="aboutUs">
                <div className="heading">
                    <h1><b style={{color:'#0CB8A5'}}>A</b>bout <b style={{color:'#0CB8A5'}}>U</b>s</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur officia beatae distinctio minus optio?</p>
                </div>
                <div className="box-container">
                    <div className="box"  style={{border: '0rem'}}>
                       <Chart />
                    </div>
                    <div className="box" style={{border: '0rem'}}>
                        <div className="image">
                            <img src="/images/map.png" alt=""/>
                            <div className="share">
                                <a href="tel:010-8877-4577"onClick={() => companyCall()}>
                                    <FontAwesomeIcon icon={faPhone} size="lg" />
                                </a>
                                
                                <a onClick={() => companyLocate()}>
                                    <FontAwesomeIcon icon={faMapLocation} size="lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contactUs" id="contactUs">
                 <ContactUs />
            </section>

            {/* <section className="service">
                <div className="box">
                    <img src="images/service-1.png" alt="" />
                    <h3>free shipping</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugit?</p>
                </div>

                <div className="box">
                    <img src="images/service-2.png" alt="" />
                    <h3>secure payment</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugit?</p>
                </div>

                <div className="box">
                    <img src="images/service-3.png" alt="" />
                    <h3>2/4 support</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugit?</p>
                </div>
            </section> */}
        </Fragment>
    )
}
