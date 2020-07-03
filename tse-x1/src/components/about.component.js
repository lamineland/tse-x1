import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Swiper from 'react-id-swiper';
import imgOff from '../datas/image.data'

const useStyles = makeStyles((theme) => ({
  
    style: {
       color: 'white'
    }
    
  }));

function About(props) {

    const classes = useStyles()
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
                <div className={classes.style}><h2>A propos de Teranga Skills !</h2></div>
                <div><img src={imgOff.prefab[0]} alt="" /></div>
                <div><img src={imgOff.prefab[2]} alt="" /></div>
            </Swiper>
        </div>
    )
}

export default About
