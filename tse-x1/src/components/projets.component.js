import React from 'react'
import Swiper from 'react-id-swiper';
import imgOff from '../datas/image.data'


function Projets(props) {
    const params = {
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
          },
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
                <div style={{ backgroundColor: '' }}><h2>A propos de Teranga Skills !</h2></div>
                <div><img src={imgOff.prefab[0]} alt="" /></div>
                <div><img src={imgOff.prefab[2]} alt="" /></div>
            </Swiper>
        </div>
    )
}

export default Projets
