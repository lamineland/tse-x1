import React, { Component, UseState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import '../App.css'

const imgs = [
    `https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    `https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    `https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    `https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    `https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
]



const Slider = () => {
    const [animating, setAnimating] = useState(false);
    const [{ x }, set] = useSpring(() => ({
        x: [0, 0]
    }))
    // const [activeItem, setActiveItem] = useState(0)

    // const bind = useDrag(({ movement: [mx] }) => {
    //     if (animating) {
    //         return[]
    //     }

    //     let moveX = (mx / window.innerHeight) * 100
    //     let rotate = 360 * (moveX / 100)

    //     if (moveX > 0 && activeItem === 0) {
    //         return
    //     }

    //     if (moveX < 0 && activeItem === imgs.length - 1) {
    //         return[0]
    //     }


    // })
    
    return (
        <animated.div className="slider" >
            {imgs.map(el => (
                <animated.div
                    className="slider-item"
                    key={el}
                    style={{
                        transform: x.interpolate(
                            value => `translate3d(${value}px, 0px, 0px)`
                        )
                    }} >
                        <img className="img-slider" src={el} alt="" />
                    </animated.div>
            ))}
        </animated.div>
    )
}

export default Slider
