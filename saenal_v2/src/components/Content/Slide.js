import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

function    
Slide({item, changeIdx}) {

    const [curItem, setCurItem] = useState({});

    useEffect(() => {
        if (typeof item === 'object'){
            setCurItem(item);
        }
    }, [item]);

    return (
        <div className="slide active">
            <div className="content">
                <img src="images/content-img-1.png" alt="" />
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
                <img src={curItem.mainImg} alt="" />
            </div>
        </div>
    )
}

export default Slide;