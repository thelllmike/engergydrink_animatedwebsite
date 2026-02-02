'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture, Center, Environment } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

// GLB Model Component (for bottle2)
function GLBModel({ modelPath, scale = 1 }) {
    const { scene } = useGLTF(modelPath)
    const modelRef = useRef()

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005
        }
    })

    return (
        <Center>
            <primitive
                ref={modelRef}
                object={scene.clone()}
                scale={scale}
            />
        </Center>
    )
}

// OBJ Model Component (for bottle1)
function OBJModel({ modelPath, texturePath, scale = 1 }) {
    const obj = useLoader(OBJLoader, modelPath)
    const texture = useTexture(texturePath)
    const modelRef = useRef()

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005
        }
    })

    // Apply texture to all meshes in the OBJ
    obj.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
                map: texture,
                metalness: 0.3,
                roughness: 0.4
            })
        }
    })

    return (
        <Center>
            <primitive
                ref={modelRef}
                object={obj.clone()}
                scale={scale}
            />
        </Center>
    )
}

// Loading placeholder
function LoadingFallback() {
    return (
        <mesh>
            <boxGeometry args={[1, 2, 1]} />
            <meshStandardMaterial color="#ff6b35" wireframe />
        </mesh>
    )
}

// Main Bottle3D component
export default function Bottle3D({
    modelType = 'glb', // 'glb' or 'obj'
    modelPath,
    texturePath,
    scale = 2,
    className = ''
}) {
    return (
        <div className={`bottle-3d-container ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'transparent'
                }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Suspense fallback={<LoadingFallback />}>
                    {modelType === 'glb' ? (
                        <GLBModel modelPath={modelPath} scale={scale} />
                    ) : (
                        <OBJModel
                            modelPath={modelPath}
                            texturePath={texturePath}
                            scale={scale}
                        />
                    )}
                    <Environment preset="city" />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={2}
                />
            </Canvas>
        </div>
    )
}
