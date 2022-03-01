import { TAnimationsType } from '../../App'
import './Switch.css'
import { motion } from 'framer-motion';

type TSwitchProps = {
    expandMode: TAnimationsType,
    setExpandMode: (value: TAnimationsType) => void
}

const Switch = (props: TSwitchProps) => {
    return(
        <motion.div animate={props.expandMode === 'DETAILS' ? {opacity: 0} : {opacity: 1}} transition={ { default: { duration: 0.8 } }} className='switch-rectangle'>
             <motion.div animate={props.expandMode === 'DEFAULT' ? {opacity: 1} : {opacity: 0.3}} transition={ { default: { duration: 0.8 } }} className='switch-first-group' onClick={() => props.setExpandMode('DEFAULT')}/>
             <div className='switch-line'/>
             <motion.div animate={props.expandMode === 'EXTEND' ? {opacity: 1} : {opacity: 0.3}} transition={ { default: { duration: 0.8 } }} className='switch-second-group'  onClick={() => props.setExpandMode('EXTEND')}/>
        </motion.div>
    )
}

export default Switch;