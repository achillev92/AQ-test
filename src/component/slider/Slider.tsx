import './Slider.css';
import photo1 from '../../images/slide/photo1.jpeg';
import photo2 from '../../images/slide/photo2.jpeg';
import photo3 from '../../images/slide/photo3.jpeg';
import photo4 from '../../images/slide/photo4.jpeg';
import photo5 from '../../images/slide/photo5.jpeg';
import CSS from 'csstype';
import { AnimationControls, motion, TargetAndTransition, VariantLabels } from 'framer-motion';
import { useState } from 'react';
import { TAnimationsType } from '../../App';

type TSliderProps = {
    expandMode: TAnimationsType,
    setExpandMode: (value: TAnimationsType) => void
}

const Slider = (props: TSliderProps) => {

    const [selectedImage, setSelectedImage] = useState<number>()

    const getStyleContainerComponent = (level: number): CSS.Properties => {
        return {
            width: 500 + 'px',
            marginLeft: level == 1 ? 106 + 'px' : -310 + 'px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 5 - level
        }
    }

    const getStyleImgComponent = (level: number): CSS.Properties => {
        return {
            width: 500 - 20 * level + 'px',
            height: 700 - 70 * level + 'px',
            borderRadius: 250 - 20 * level + 'px'
        }
    }

    const expandedImageListAnimationsStyles = {
        div: {
            width: '500px',
            marginLeft: '106px'
        },
        image: {
            y: -100,
            height: 450,
            width: 350
        },
        label: {
            y: -300
        }
    }

    const photoDetailAnimationsStyles = {
        div: {
            x: 1100,
            y: 350
        },
        image: {
            height: '1300px',
            width: '1100px',
            borderRadius: '500px'
        }
    }

    const handleImageClick = (selectedImage: number) => {
        setSelectedImage(selectedImage);
        props.setExpandMode('DETAILS');
    }

    const transition = { default: { duration: 1 } }

    type TAnimatedStyle = boolean | AnimationControls | TargetAndTransition | VariantLabels | undefined

    const renderImages = (
        containerStyle: TAnimatedStyle,
        animatedStyle?: any
    ) => {

        const divStyle = animatedStyle?.div;
        const imgStyle = animatedStyle?.image;
        const labelStyle = animatedStyle?.label;

        const getDetailAnimationDivStyle = (imageId: number) => {
            if( selectedImage === imageId ){
                return {
                    ...divStyle,
                    x: 1100 - imageId * 150
                }
            } else {
                if(selectedImage && selectedImage > imageId) {
                    return {
                        x: -2000
                    }
                } else {
                    return {
                        x: 2000,
                        overflow: 'none'
                    }
                }
            }
        }

        const getDetailAnimationImgStyle = (imageId: number) => {
            if( selectedImage === imageId ){
                return imgStyle
            }
        }

        return <motion.div animate={containerStyle} transition={transition} className='slider-container'>
            <motion.div animate={ props.expandMode === 'DETAILS'? getDetailAnimationDivStyle(1) : divStyle} transition={transition} style={getStyleContainerComponent(1)}>
                <motion.img animate={props.expandMode === 'DETAILS' ? getDetailAnimationImgStyle(1) : imgStyle} transition={transition} src={photo2} style={getStyleImgComponent(1)} onClick={() => { props.expandMode === 'EXTEND' && handleImageClick(1)}} />
                {labelStyle && <motion.div animate={labelStyle} transition={transition} className='photo-label'>Photo 1</motion.div>}
            </motion.div>
            <motion.div animate={ props.expandMode === 'DETAILS'? getDetailAnimationDivStyle(2) : divStyle} transition={transition} style={getStyleContainerComponent(2)} >
                <motion.img animate={props.expandMode === 'DETAILS' ? getDetailAnimationImgStyle(2) : imgStyle} transition={transition} src={photo4} style={getStyleImgComponent(2)} onClick={() => { props.expandMode === 'EXTEND' && handleImageClick(2)}} />
                {labelStyle && <motion.div animate={labelStyle} transition={transition} className='photo-label'>Photo 2</motion.div>}
            </motion.div>
            <motion.div animate={ props.expandMode === 'DETAILS'? getDetailAnimationDivStyle(3) : divStyle} transition={transition} style={getStyleContainerComponent(3)} >
                <motion.img animate={props.expandMode === 'DETAILS' ? getDetailAnimationImgStyle(3) : imgStyle} transition={transition} src={photo3} style={getStyleImgComponent(3)} onClick={() => { props.expandMode === 'EXTEND' && handleImageClick(3)}} />
                {labelStyle && <motion.div animate={labelStyle} transition={transition} className='photo-label'>Photo 3</motion.div>}
            </motion.div>
            <motion.div animate={ props.expandMode === 'DETAILS'? getDetailAnimationDivStyle(4) : divStyle} transition={transition} style={getStyleContainerComponent(4)} >
                <motion.img animate={props.expandMode === 'DETAILS' ? getDetailAnimationImgStyle(4) : imgStyle} transition={transition} src={photo5} style={getStyleImgComponent(4)} onClick={() => { props.expandMode === 'EXTEND' && handleImageClick(4)}} />
                {labelStyle && <motion.div animate={labelStyle} transition={transition} className='photo-label'>Photo 4</motion.div>}
            </motion.div>
            <motion.div animate={ props.expandMode === 'DETAILS'? getDetailAnimationDivStyle(5) : divStyle} transition={transition} style={getStyleContainerComponent(5)} >
                <motion.img animate={props.expandMode === 'DETAILS' ? getDetailAnimationImgStyle(5) : imgStyle} transition={transition} src={photo1} style={getStyleImgComponent(5)} onClick={() => { props.expandMode === 'EXTEND' && handleImageClick(5)}} />
                {labelStyle && <motion.div animate={labelStyle} transition={transition} className='photo-label'>Photo 5</motion.div>}
            </motion.div>
        </motion.div>
    }

    const switchAnimationType = () => {
        switch (props.expandMode) {
            case 'DEFAULT':
                return renderImages({ x: 0 });
            case 'EXTEND':
                return renderImages({ x: -700}, expandedImageListAnimationsStyles)
            case 'DETAILS':
                return renderImages({x: -700}, photoDetailAnimationsStyles)
    }}

    return (
        <>
            {switchAnimationType()}
        </>
    )
}

export default Slider;