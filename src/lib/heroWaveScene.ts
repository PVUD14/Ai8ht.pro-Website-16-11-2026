import {
  AdditiveBlending, BufferAttribute, BufferGeometry, Group, LineSegments,
  PerspectiveCamera, Points, Scene, ShaderMaterial, WebGLRenderer
} from "three";

const vertexShader = `
uniform float uTime;
uniform float uLayer;
uniform float uPixelRatio;
uniform float uSignal;
varying float vBrightness;
varying float vDepth;
varying float vViolet;
varying float vEdge;
void main() {
  vec3 p = position;
  if (uSignal > 0.5) p.x = mod(p.x + uTime * 0.75 + 24.0, 48.0) - 24.0;
  float a = p.x * 0.23 + p.z * 0.12 - uTime * 0.19 + uLayer;
  float b = p.z * 0.34 - p.x * 0.12 + uTime * 0.14;
  float height = sin(a) * 1.65 + cos(b) * 0.9 + sin(p.x * 0.4 + p.z * 0.25 + uTime * 0.09) * 0.3;
  p.y += height + p.x * 0.19;
  vec4 view = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  float star = step(0.97, fract(sin(dot(position.xz, vec2(12.9898, 78.233))) * 43758.5453));
  gl_PointSize = min(10.0, (uSignal > 0.5 ? 155.0 : 28.0 + star * 95.0) / -view.z) * uPixelRatio;
  vDepth = 1.0 - smoothstep(19.0, 52.0, -view.z);
  vBrightness = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(a), 3.0);
  vViolet = smoothstep(0.65, 1.0, sin(p.x * 0.13 + p.z * 0.15 + uLayer));
  vEdge = (1.0 - smoothstep(7.0, 10.5, abs(position.z + uLayer * 5.0))) * (1.0 - smoothstep(19.0, 24.0, abs(p.x)));
}
`;
const fragmentShader = `
uniform float uOpacity;
uniform float uPoints;
uniform float uSignal;
varying float vBrightness;
varying float vDepth;
varying float vViolet;
varying float vEdge;
void main() {
  float alpha = uOpacity * vDepth * vEdge * (0.42 + vBrightness * 0.58);
  vec3 color = mix(vec3(0.13, 0.49, 0.82), vec3(0.46, 0.84, 1.0), vBrightness);
  color = mix(color, vec3(0.55, 0.40, 0.87), vViolet * 0.3);
  if (uPoints > 0.5) {
    float radius = length(gl_PointCoord - 0.5);
    if (radius > 0.5) discard;
    alpha *= exp(-radius * radius * 16.0);
    color = mix(color, vec3(0.8, 0.93, 1.0), 0.5 + uSignal * 0.3);
  }
  gl_FragColor = vec4(color, alpha);
}
`;

export function createWaveScene(canvas: HTMLCanvasElement, compact: boolean) {
  const context = canvas.getContext("webgl2", { alpha: true, antialias: false, powerPreference: "low-power" });
  if (!context) throw new Error("WebGL2 is unavailable");
  const renderer = new WebGLRenderer({ canvas, context, alpha: true, antialias: false, powerPreference: "low-power" });
  renderer.setClearColor(0x071425, 0);
  const scene = new Scene();
  const camera = new PerspectiveCamera(37, 1, 0.1, 100);
  camera.position.set(0, 8, 29);
  camera.lookAt(0, 0, 0);
  const group = new Group();
  group.position.set(3, -3.7, -1);
  group.rotation.z = 0.035;
  scene.add(group);
  const geometries: BufferGeometry[] = [];
  const materials: ShaderMaterial[] = [];
  const cols = compact ? 72 : 132;
  const rows = compact ? 26 : 46;
  const ratio = Math.min(window.devicePixelRatio || 1, compact ? 1 : 1.5);

  const material = (layer: number, points: boolean, signal = false) => {
    const result = new ShaderMaterial({
      vertexShader, fragmentShader, transparent: true, depthWrite: false,
      blending: AdditiveBlending,
      uniforms: {
        uTime: { value: 0 }, uLayer: { value: layer }, uPixelRatio: { value: ratio },
        uOpacity: { value: signal ? 0.95 : points ? 0.75 : layer ? 0.20 : 0.38 },
        uPoints: { value: points ? 1 : 0 }, uSignal: { value: signal ? 1 : 0 }
      }
    });
    materials.push(result);
    return result;
  };

  for (let layer = 0; layer < (compact ? 1 : 2); layer++) {
    const positions = [];
    const indices = [];
    for (let z = 0; z <= rows; z++) {
      for (let x = 0; x <= cols; x++) {
        positions.push((x / cols - 0.5) * 48, -layer * 1.1, (z / rows - 0.5) * 21 - layer * 4);
        const i = z * (cols + 1) + x;
        if (x < cols) indices.push(i, i + 1);
        if (z < rows) indices.push(i, i + cols + 1);
      }
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
    geometry.setIndex(indices);
    geometries.push(geometry);
    const lines = new LineSegments(geometry, material(layer * 0.8, false));
    lines.frustumCulled = false;
    group.add(lines);

    const nodes = new BufferGeometry();
    nodes.setAttribute("position", geometry.getAttribute("position").clone());
    geometries.push(nodes);
    const points = new Points(nodes, material(layer * 0.8, true));
    points.frustumCulled = false;
    group.add(points);
  }
  const signals = new BufferGeometry();
  const signalPositions = new Float32Array(90 * 3);
  for (let i = 0; i < 90; i++) {
    signalPositions[i * 3] = ((i * 17.39) % 48) - 24;
    signalPositions[i * 3 + 1] = 0.025;
    signalPositions[i * 3 + 2] = ((i * 7.13) % 19) - 9.5;
  }
  signals.setAttribute("position", new BufferAttribute(signalPositions, 3));
  geometries.push(signals);
  const particles = new Points(signals, material(0, true, true));
  particles.frustumCulled = false;
  group.add(particles);

  return {
    resize(width: number, height: number) {
      renderer.setPixelRatio(ratio);
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    },
    render(seconds: number, pointerX: number, pointerY: number) {
      for (const item of materials) item.uniforms.uTime.value = seconds;
      group.rotation.y = pointerX * 0.025;
      group.rotation.x = pointerY * 0.012;
      renderer.render(scene, camera);
    },
    dispose() {
      for (const geometry of geometries) geometry.dispose();
      for (const item of materials) item.dispose();
      scene.clear();
      renderer.dispose();
      renderer.forceContextLoss();
    }
  };
}
