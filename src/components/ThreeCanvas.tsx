"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060608, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 1. Central Floating 3D Geometric Cyber-Polyhedron
    const geometry = new THREE.IcosahedronGeometry(6.5, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.28,
      linewidth: 1,
    });
    const icosahedronLines = new THREE.LineSegments(wireframeGeometry, lineMaterial);
    scene.add(icosahedronLines);

    // Inner glowing core
    const innerGeom = new THREE.OctahedronGeometry(3.5, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerMesh);

    // 2. 3D Floating Particle Field
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorChoices = [
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xc084fc), // Purple
      new THREE.Color(0x34d399), // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 65;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 65;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const col = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 3. 3D Torus Wave Rings along Z-axis (Creates tunnel effect during scroll)
    const ringGroup = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const ringGeom = new THREE.TorusGeometry(12 + i * 4, 0.06, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x0284c7 : 0x6366f1,
        transparent: true,
        opacity: 0.15 - i * 0.02,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.z = -i * 8;
      ringGroup.add(ring);
    }
    scene.add(ringGroup);

    // Scroll & Mouse Tracking
    let targetScroll = 0;
    let currentScroll = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Render Loop using high-performance standard timer (eliminates THREE.Clock deprecation warning)
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth interpolation for scroll
      currentScroll += (targetScroll - currentScroll) * 0.08;

      // 3D Camera spatial travel based on scroll position (True 3D Scrolling)
      camera.position.z = 22 - currentScroll * 18;
      camera.position.x = Math.sin(currentScroll * Math.PI * 2) * 4 + mouseX * 2;
      camera.position.y = -currentScroll * 6 + mouseY * 2;
      camera.lookAt(0, 0, -currentScroll * 10);

      // Rotate geometric core
      icosahedronLines.rotation.x = elapsedTime * 0.15 + currentScroll * Math.PI * 2;
      icosahedronLines.rotation.y = elapsedTime * 0.2 + mouseX * 0.5;
      
      innerMesh.rotation.x = -elapsedTime * 0.25;
      innerMesh.rotation.z = elapsedTime * 0.3;

      // Rotate ring tunnel
      ringGroup.rotation.z = elapsedTime * 0.05 + currentScroll * Math.PI;

      // Slowly rotate particle field
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-screen h-screen"
      style={{ opacity: 0.45 }}
    />
  );
}

