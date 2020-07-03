import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Swiper from 'react-id-swiper';
import imgOff from '../datas/image.data'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    serenguetti: {
        backgroundColor: '#1A1D45',
    }
}))

function Home() {

    const classes = useStyles()

    const params = {
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: true
        //   },
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
            {/* <video width="320" height="240" autoplay src="https://www.youtube.com/watch?v=x4r7af2Lcmw" autoplay /> */}
            <Swiper {...params}>
                <div className={classes.serenguetti}>
                    <Box display="flex" justifyContent="flex-start" m={1} p={1}>
                        <Box color="white">
                            <h3>Une nouvelle manière d'accomplir vos projets !</h3>
                        </Box>
                    </Box>
                </div>
                <div><img src={imgOff.prefab[1]} alt="" /></div>
                <div><img src={imgOff.prefab[2]} alt="" /></div>
            </Swiper>
        </div>
    )
}

export default Home
