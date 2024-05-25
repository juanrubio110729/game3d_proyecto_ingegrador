import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useAvatar } from "../../../../context/AvatarContext";

export default function WorldS2(props) {
  const verticalMovePlatformRef = useRef();
  const { nodes, materials } = useGLTF("/assets/models/level_2/worldS2.glb");
  const { avatar } = useAvatar();
  const [actived, setActive] = useState(false);

  let time = 0;

  function Idle(time, actived) {
    if (actived) {
      const y = 19 * (Math.sin(time / 3.5) + 1) - 0.5;
      verticalMovePlatformRef.current?.setNextKinematicTranslation({
        x: 0,
        y,
        z: 0,
      });
    }
  }
  

  useEffect(() => {
    if (avatar.keyUtily >= 2){
      setActive(true);
    } else {
      setActive(false);
    }
  }, [avatar.keyUtily])

  useFrame((state) => {
    time = state.clock.elapsedTime;
    Idle(time, actived);
  })

  return (
    <>
      <group {...props} dispose={null}>
        <Html position={[-61, 2, 34.5]} style={{ pointerEvents: 'none' }}>
          <text>{avatar.keyUtily}/3</text>
        </Html>
        {/*Elementos de Mundo (Rocas, planeta y montaña*/}
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock1.geometry}
            material={materials.rock_moss_set_01}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock2.geometry}
            material={materials.rock_moss_set_01}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock3.geometry}
            material={materials.rock_moss_set_01}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock4.geometry}
            material={materials.rock_moss_set_01}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock5.geometry}
            material={materials.rock_moss_set_01}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock6.geometry}
            material={materials.rock_moss_set_01}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock7.geometry}
            material={materials["rock_moss_set_01.001"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock8.geometry}
            material={materials["rock_moss_set_01.003"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock9.geometry}
            material={materials["rock_moss_set_01.001"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock10.geometry}
            material={materials["rock_moss_set_01.002"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock11.geometry}
            material={materials["rock_moss_set_01.004"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock12.geometry}
            material={materials["rock_moss_set_01.001"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock13.geometry}
            material={materials["rock_moss_set_01.003"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock14.geometry}
            material={materials["rock_moss_set_01.001"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock15.geometry}
            material={materials["rock_moss_set_01.002"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock16.geometry}
            material={materials["rock_moss_set_01.004"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock17.geometry}
            material={materials["rock_moss_set_01.001"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock18.geometry}
            material={materials["rock_moss_set_01.003"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock19.geometry}
            material={materials["rock_moss_set_01.001"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock20.geometry}
            material={materials["rock_moss_set_01.002"]}
          />
        </RigidBody>
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock21.geometry}
            material={materials["rock_moss_set_01.004"]}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock1_1.geometry}
            material={materials["rock_07.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock1_2.geometry}
            material={materials["rock_09.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock3_1.geometry}
            material={materials["rock_07.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock3_2.geometry}
            material={materials["rock_07.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock4_1.geometry}
            material={materials["rock_07.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock4_2.geometry}
            material={materials["rock_07.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock5_1.geometry}
            material={materials["rock_07.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock5_2.geometry}
            material={materials["rock_07.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock2.geometry}
            material={materials["rock_07.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRock6.geometry}
            material={materials["rock_09.003"]}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Montaña.geometry}
            material={materials["Material.006"]}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.marco.geometry}
            material={nodes.marco.material}
          />
        </RigidBody>

        <RigidBody
          position={props.position}
          type="fixed"
          colliders="trimesh"
          restitution={0.8}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Planeta.geometry}
            material={materials["Material.006"]}
          />
        </RigidBody>

        {/*Elementos de base Inicial*/}

        <RigidBody type="fixed" colliders="ball">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CuerpoBase.geometry}
            material={materials["Material.010"]}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Antena.geometry}
            material={materials["Material.001"]}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base.geometry}
            material={materials["Material.001"]}
          />
        </RigidBody>

        {/*Elementos de cueva*/}

        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cave.geometry}
            material={materials.CaveColor}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.caveDoor.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cavemde1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cavemde2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cavemde3.geometry}
            material={materials["Material.005"]}
          />
        </RigidBody>

        {/*Elementos de Telescopio y Base del telescopio*/}

        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ring1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.structure1.geometry}
            material={materials.CaveColor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.structure2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.structure3.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.subBase.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Soporte.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Telescopio.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TelescopioInt.geometry}
            material={materials["Material.009"]}
          />
        </RigidBody>

        {/*Elementos Interactivos*/}
        <RigidBody type="fixed" colliders="trimesh">
          
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TreeCheckPoint_1.geometry}
            material={materials["Material.004"]}
          />
        </RigidBody>
        <RigidBody ref={verticalMovePlatformRef} type="kinematicPosition" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.movePlataform.geometry}
            material={materials["Material.002"]}
          />
        </RigidBody>
      </group>
    </>
  );
}

useGLTF.preload("/assets/models/level_2/worldS2.glb");
