# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




import {PerspectiveCamera, View } from "@react-three/drei"
import Lights from './Lights';
import { Suspense } from "react";

const ModelView = ({index,groupRef,gsapType,controlRef,setRotationSize,size,item}) => {
  return (
    <div>
     <view
     index={index}
     id={gsapType}
     className={`border-2 border-red 500 w-full h-full
     ${index===2}? 'right-[-100%]:''`}>
    <ambientLight intensity={0.3}/>

    <PerspectiveCamera makeDefault positon={[0,0,4]}/>
    <Lights/>

    <Suspense fallback={
      <div>
      Loading
      </div>

    }
     </view>
    </div>
  )
}

export default ModelView
