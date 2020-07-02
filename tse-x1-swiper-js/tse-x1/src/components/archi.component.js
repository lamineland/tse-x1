import React from 'react'
import Swiper from 'react-id-swiper';
import imgOff from '../datas/image.data'


function Archi() {
    const params = {
        pagination: {
            el: '.swiper-pagination.swiper-pagination-h',
            clickable: true
          },
          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
    }
    
    return (
        <div>
            <Swiper {...params}>
                <div data-hash="slide3"><img src={imgOff.prefab[0]} alt="" /></div>
                <div><img src={imgOff.prefab[1]} alt="" /></div>
                <div><img src={imgOff.prefab[2]} alt="" /></div>
            </Swiper>
        </div>
    )
}

export default Archi