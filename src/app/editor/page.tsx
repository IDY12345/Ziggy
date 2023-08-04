import React from 'react'
import  Three  from 'three'
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'

import {OrbitControls,Preload,SpotLight,useGLTF} from '@react-three/drei'

const page = () => {


    // const renderer=new Three.WebGL1Renderer();

    // renderer.setSize(window.innerWidth,window.innerHeight);

    // document.body.appendChild(renderer.domElement)

  return (
    <div>
      <h1>Welcome to the 3-D Editor</h1>
    </div>
  )
}

// createRoot(document.getElementById('root')).render(<page />)
export default page