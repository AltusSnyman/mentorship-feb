import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleSphere(props: any) {
    const ref = useRef<any>();

    // Generate particles on a sphere surface
    const sphere = useMemo(() => {
        return random.inSphere(new Float32Array(4000 * 3), { radius: 1.5 });
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3B82F6"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function ThreeCanvas() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <ParticleSphere />
                </Suspense>
                <fog attach="fog" args={['#050505', 0.5, 2.5]} />
            </Canvas>
        </div>
    );
}
