import React, { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Loading from './Loading';


function Slide({item, changeIdx}) {

    const [curItem, setCurItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (typeof item === 'object'){
            setLoading(true);
            setDone(true);
            setCurItem(item);
        }
    }, [item]);

    const callCompleteImg  = (flag) => {
        setLoading(!flag);
        setDone(flag);
    }

    return (
        <div className="slide active">
        { !done ? (
            <Loading loading={loading} />
        ) : (
            <Fragment>
                <div className="content">
                    <img src={curItem.mobileMainImg} alt="이미지 없음" onLoad={() => callCompleteImg(true)} />
                    <h3>{curItem.category}</h3>
                    <span>{curItem.desc}</span>

                    {/* <a href="#" className="btn">read more</a> */}
                    <div className="controls" style={{display: 'flex'}}>
                        <div onClick={() => changeIdx(-1)}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div onClick={() => changeIdx(1)}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        
                    </div>
                </div>
                <div className="image">
                    <img src={curItem.mainImg} alt="" onLoad={() => callCompleteImg(true)} />
                </div>
            </Fragment>
        )}
      </div>
    )
}

export default Slide;