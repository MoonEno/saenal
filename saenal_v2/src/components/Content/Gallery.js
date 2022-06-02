import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react'
import ModalImage  from "react-modal-image";

function Gallery({item}) {

    const [subImgs, setSubImgs] = useState([]);

    useEffect(() => {
        let tmpList = [];
        if (typeof item === 'object') {
            _.times(item.subLength, (i) =>{
                let imgStr = "/images/product/";
                imgStr += item.category + "-" + (i+1) + item.imgType;
                tmpList.push(imgStr);
            });
            setSubImgs(tmpList);
        }
       
    }, [item])

    

    return (
        <Fragment>
            <div className="heading">
                <h1>세부사진</h1>
                <p></p>
            </div>

            <div className="lightbox">
                {subImgs.map((subImg, idx) => (
                    <div className="modal" key={idx}>
                        <ModalImage 
                                    small={subImg}
                                    medium={subImg}
                                    large={subImg}
                        />
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Gallery;