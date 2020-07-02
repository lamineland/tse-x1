import React from 'react'
import Swiper from 'react-id-swiper';
import imgOff from '../datas/image.data'
// import Skeleton from '@material-ui/lab/Skeleton'


function Dev() {
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
                <div><img src={imgOff.archi[1]} alt="" /></div>
                <div><img src={imgOff.archi[2]} alt="" /></div>
                <div><img src={imgOff.archi[0]} alt="" /></div>
            </Swiper>
        </div>
    )
}

export default Dev
