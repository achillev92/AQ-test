import { useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import InfoSection from './component/info/InfoSection';
import Slider from './component/slider/Slider';
import Switch from './component/switch/Switch';
import { motion } from 'framer-motion';

export type TAnimationsType = 'DEFAULT' | 'EXTEND' | 'DETAILS';

function App() {
  const [expandMode, setExpandMode] = useState<TAnimationsType>('DEFAULT')

  const getAnimation = () => {
    if (expandMode === 'EXTEND') {
      return { overflow: 'auto', marginInline: '0px', width: '100vw' }
    } else if (expandMode === 'DETAILS') {
      return { overflow: 'hidden', marginRight: '0px', width: window.innerWidth - 123 + 'px' }
    } else {
      return ''
    }
  }

  return (
    <motion.div animate={expandMode === 'DETAILS' ? { overflow: 'hidden', paddingRight: '0px' } : {}} className="App">
      <Header />
      <motion.div animate={getAnimation()} className='home'>
        <InfoSection expandMode={expandMode} setExpandMode={(value: TAnimationsType) => setExpandMode(value)} />
        <Slider expandMode={expandMode} setExpandMode={(value: TAnimationsType) => setExpandMode(value)} />
      </motion.div>
      <Switch expandMode={expandMode} setExpandMode={(value: TAnimationsType) => setExpandMode(value)} />
    </motion.div>
  );
}

export default App;
