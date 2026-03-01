import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ShaderText() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      10
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(width, height);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
      },
      transparent: true,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;

        void main() {
          vec2 uv = gl_FragCoord.xy / uResolution.xy;

          float metallic = sin(uv.y * 40.0 + uTime * 2.0) * 0.5 + 0.5;
          float shine = smoothstep(0.4, 0.6, metallic);

          vec3 light = vec3(1.0);
          vec3 dark = vec3(0.2);

          vec3 color = mix(dark, light, shine);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId;

    const animate = () => {
      material.uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="shader-text-canvas" />;
}