import { motion } from 'framer-motion';
import { TAnimationsType } from '../../App';
import './InfoSection.css'
import arrow from '../../images/arrow-left.png';

type TInfoSectionProps = {
    expandMode: TAnimationsType,
    setExpandMode: (value: TAnimationsType) => void
}

const InfoSection = (props: TInfoSectionProps) => {

    const animateStyle = {
        width: "35%",
        x: -700
    }

    return (
        props.expandMode === 'EXTEND' ?
            <motion.div id='info-section-div' animate={animateStyle} transition={{ default: { duration: 1 } }} className='container'>
                <motion.div className='title'>The Abstract design</motion.div>
                <motion.div className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, eligendi. Perferendis, quasi necessitatibus rerum repudiandae aliquam culpa asperiores optio aspernatur eveniet excepturi sequi ut! In iure eius praesentium aspernatur neque.</motion.div>
            </motion.div>
            :
            <motion.div animate={{ x: 0 }} transition={{ default: { duration: 1 } }} className='container'>
                <motion.div className='title'>The Abstract design</motion.div>
                <motion.div className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, eligendi. Perferendis, quasi necessitatibus rerum repudiandae aliquam culpa asperiores optio aspernatur eveniet excepturi sequi ut! In iure eius praesentium aspernatur neque.</motion.div>
                { props.expandMode === 'DETAILS' && <motion.div className='label-back-container' onClick={() => props.setExpandMode('EXTEND') } >
                    <img src={arrow} alt="logo" />
                    <label className='label-back'>BACK</label>
                </motion.div>}
            </motion.div>
    )
}

export default InfoSection;