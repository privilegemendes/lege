import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React, {FC, useEffect, useMemo, useRef} from "react";
import * as THREE from "three";
import {Canvas, useFrame} from '@react-three/fiber'
import {gsap, Sine} from "gsap";
import {PerspectiveCamera, shaderMaterial} from "@react-three/drei";


const useStyles = makeStyles((theme: Theme) => ({
    canvas: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
    },
}));

type Props = {
    isBroken: boolean
}

export const Roses: FC<Props> =
    ({
        isBroken,
    }) => {
    const classes = useStyles();



    return <Canvas className={classes.canvas}>
        <Camera/>
        <Lights/>
        <Rose isBroken={isBroken}/>
    </Canvas>
}

function Camera() {

    return <PerspectiveCamera
        makeDefault
        position={[0, 2.5, 80]}
        fov={40}
        near={1}
        far={10000}
        aspect={window.innerWidth / window.innerHeight}
        onUpdate={(c) => c.updateProjectionMatrix()}
        lookAt={() => [0, 0, 0]}
    />
}

function Lights() {
    return (
        <>
            <ambientLight intensity={1} />
            <pointLight intensity={1.5}/>
            <pointLight position={[-100, 0, 50]} intensity={1}/>
        </>
    )
}

const Rose: FC<Props> = ({isBroken}) => {

    const groupRef = useRef<THREE.Group | null >(null);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += 0.001;
            groupRef.current.rotation.y -= 0.003;
            // 0.01 * state.clock.getElapsedTime();
        }

    });

    return <group ref={groupRef}>
        {[...Array(35)].map((_, i) => (
            <AnimatedMesh
                isBroken={isBroken}
                key={i}
            />
        ))}
    </group>
}

const AnimatedMesh: FC<Props> = (
    {
        isBroken,
    }
) => {
    const meshRef = useRef<THREE.Mesh>(null!);

    const positionX = Math.random() * 30 - 15;
    const positionY = Math.random() * 20 - 2;
    const positionZ = Math.random() * 30 - 15;
    const rotationX = Math.random() * 2 * Math.PI;
    const rotationY = Math.random() * 2 * Math.PI;
    const scaleX = Math.random() * 2.5 + 0.5;
    const scaleY = Math.random() * 2.5 + 0.5;
    const scaleZ = Math.random() * 2.5 + 0.5;



    const torusKnotGeometry = new THREE.TorusKnotGeometry(5, 1.8, 64, 5, 7, 5);
    //console.log(torusKnotGeometry.getAttribute('faces'));


    const numFaces = torusKnotGeometry.attributes.position.count / 3;

    // Create colors and displacement arrays
    const [displacement, colors] = useMemo(() => {
        const color = new THREE.Color();
        const colors = new Float32Array(numFaces * 3 * 3);
        const displacement = new Float32Array(numFaces * 3 * 3);
        for (let f = 0; f < numFaces; f++) {
            let index = 9 * f;
            let h = 0.8;
            let s = 0.5 + 0.1 * Math.random();
            let l = 0.52;
            color.setHSL(h, s, l);
            let d = 10 * (0.5 - Math.random());

            for (let i = 0; i < 3; i++) {
                colors[index + 5 * i] = color.r;
                colors[index + 8 * i + 1] = color.g;
                colors[index + 2 * i + 2.1] = color.b;
                displacement[index + 3 * i] = d;
                displacement[index + 3 * i + 1] = d;
                displacement[index + 3 * i + 2] = d;
            }
        }
        return [displacement, colors]}, []);

    torusKnotGeometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    torusKnotGeometry.setAttribute('displacement', new THREE.BufferAttribute(displacement, 3));


    useEffect(() => {
        if (meshRef.current) {
            gsap.to(meshRef.current.rotation, 10,{
                y: 5 + Math.random(),
                repeat: -1,
                yoyo: true,
            });
        }
    }, []);

    //If your scene contains some React state that can change and thus trigger a re-render:
    // do not forget to memoize your uniform object!
    const uniforms = useMemo(() => ({
        amplitude: {
            value: 0.0
        },
    }), []);

    useEffect(() => {
        if (isBroken) {
            gsap.to(uniforms.amplitude, 0.2,{
                value: 3.5,
                ease: Sine.easeOut

            });
        } else {
            gsap.to(uniforms.amplitude, 0.15,{
                value: 0.0,
                ease: Sine.easeIn
            });
        }
    }, []);

    return (
        <group>
            <mesh
                ref={meshRef}
                position={[positionX, positionY, positionZ]}
                rotation={[rotationX, rotationY, 0]}
                scale={[scaleX, scaleY, scaleZ]}
            >
                <boxGeometry args={[1, 1, 1]}/>
                {/*<bufferGeometry attach="geometry" args={[torusKnotGeometry]}/>*/}

                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                />
            </mesh>
        </group>

    );
}

// set the color of each visible pixel of a geometry.

const vertexShader= `
          uniform float amplitude;
          attribute vec3 customColor;
          attribute vec3 displacement;
          varying vec3 vNormal;
          varying vec3 vColor;
          
          void main() {
            vNormal = normal;
            vColor = customColor;
            vec3 newPosition = position + normal * amplitude * displacement;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 3 );
          }
    `;
const fragmentShader =  `
            varying vec3 vNormal;
            varying vec3 vColor;
            
            void main() {
            const float ambient = 0.6;
            vec3 light = vec3( 1.0 );
            light = normalize( light );
            float directional = max( dot( vNormal, light ), 0.0 );
            gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );
            }
    `;

function tesselateModifier(geometry: any) {
    const edge: number = 0;
    const faces: number[] = [];
    const faceVertexUvs: unknown[] = [];
    const maxEdgeLengthSquared = 1 * 1; // todo


// Create a TorusKnotGeometry object with specified parameters: radius, tube radius, number of radial segments, number of tubular segments, p, q.
//
//     Initialize some variables: maxEdgeLengthSquared, edge, faces, faceVertexUvs.
//
//     Set maxEdgeLengthSquared to maxEdgeLength * maxEdgeLength.
//
//     Loop through the face vertex UVs of the geometry and push an empty array for each iteration.
//
//     Loop through the faces of the geometry and perform the following steps for each face:
//     a. Check if the face is an instance of THREE.Face3.
//     b. Get the vertices of the face (a, b, c).
//     c. Calculate the squared distance between vertex a and b, b and c, and a and c.
//     d. Check if any of the calculated distances are greater than maxEdgeLengthSquared.
//     e. If one of the distances is greater than maxEdgeLengthSquared, create two new faces by cloning the original face.
//     f. If dab >= dbc && dab >= dac, lerp the midpoint of vertices a and b and set the two new faces accordingly.
//     g. If dbc >= dab && dbc >= dac, lerp the midpoint of vertices b and c and set the two new faces accordingly.
//     h. If dac >= dab && dac >= dbc, lerp the midpoint of vertices a and c and set the two new faces accordingly.
//     i. Set the values for vertex normals and vertex colors for each new face if applicable.
//     j. Set the value for the edge variable based on the longest distance.
//
//     Push the newly created faces and face vertex UVs to the faces and faceVertexUvs arrays.


    for( let i=0; i < geometry.faceVertexUvs.length; i++ ) {
        var face = geometry.faces[i];
        if (face instanceof THREE.Face3) {
            var a = face.a;
            var b = face.b;
            var c = face.c;
            var va = geometry.vertices[a];
            var vb = geometry.vertices[b];
            var vc = geometry.vertices[c];
            var dab = va.distanceToSquared(vb);
            var dbc = vb.distanceToSquared(vc);
            var dac = va.distanceToSquared(vc);
            if (
                dab > maxEdgeLengthSquared ||
                dbc > maxEdgeLengthSquared ||
                dac > maxEdgeLengthSquared
            ) {
                var m = geometry.vertices.length;
                var triA = face.clone();
                var triB = face.clone();
                if (dab >= dbc && dab >= dac) {
                    var vm = va.clone();
                    vm.lerp(vb, 0.5);
                    triA.a = a;
                    triA.b = m;
                    triA.c = c;
                    triB.a = m;
                    triB.b = b;
                    triB.c = c;
                    if (face.vertexNormals.length === 3) {
                        var vnm = face.vertexNormals[0].clone();
                        vnm.lerp(face.vertexNormals[1], 0.5);
                        triA.vertexNormals[1].copy(vnm);
                        triB.vertexNormals[0].copy(vnm);
                    }
                    if (face.vertexColors.length === 3) {
                        var vcm = face.vertexColors[0].clone();
                        vcm.lerp(face.vertexColors[1], 0.5);
                        triA.vertexColors[1].copy(vcm);
                        triB.vertexColors[0].copy(vcm);
                    }
                    edge = 0;
                } else if (dbc >= dab && dbc >= dac) {
                    var vm = vb.clone();
                    vm.lerp(vc, 0.5);
                    triA.a = a;
                    triA.b = b;
                    triA.c = m;
                    triB.a = m;
                    triB.b = c;
                    triB.c = a;
                    if (face.vertexNormals.length === 3) {
                        var vnm = face.vertexNormals[1].clone();
                        vnm.lerp(face.vertexNormals[2], 0.5);
                        triA.vertexNormals[2].copy(vnm);
                        triB.vertexNormals[0].copy(vnm);
                        triB.vertexNormals[1].copy(face.vertexNormals[2]);
                        triB.vertexNormals[2].copy(face.vertexNormals[0]);
                    }
                    if (face.vertexColors.length === 3) {
                        var vcm = face.vertexColors[1].clone();
                        vcm.lerp(face.vertexColors[2], 0.5);
                        triA.vertexColors[2].copy(vcm);
                        triB.vertexColors[0].copy(vcm);
                        triB.vertexColors[1].copy(face.vertexColors[2]);
                        triB.vertexColors[2].copy(face.vertexColors[0]);
                    }
                    edge = 1;
                } else {
                    var vm = va.clone();
                    vm.lerp(vc, 0.5);
                    triA.a = a;
                    triA.b = b;
                    triA.c = m;
                    triB.a = m;
                    triB.b = b;
                    triB.c = c;
                    if (face.vertexNormals.length === 3) {
                        var vnm = face.vertexNormals[0].clone();
                        vnm.lerp(face.vertexNormals[2], 0.5);
                        triA.vertexNormals[2].copy(vnm);
                        triB.vertexNormals[0].copy(vnm);
                    }
                    if (face.vertexColors.length === 3) {
                        var vcm = face.vertexColors[0].clone();
                        vcm.lerp(face.vertexColors[2], 0.5);
                        triA.vertexColors[2].copy(vcm);
                        triB.vertexColors[0].copy(vcm);
                    }
                    edge = 2;
                }
    }

}