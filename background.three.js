import './style.css'
import spaceUrl from './images/space.jpg'
import moonUrl from './images/moon.jpg'
import moonNormalUrl from './images/moon.normal.jpg'
import { MathUtils, TextureLoader } from 'three'
import { SphereGeometry } from 'three'
import { MeshStandardMaterial } from 'three'
import { AmbientLight } from 'three'
import { PointLight } from 'three'
import { Mesh } from 'three'
import { Scene } from 'three'
import { PerspectiveCamera } from 'three'
import { WebGLRenderer } from 'three'
import { Clock } from 'three'
import { BufferGeometry } from 'three'
import { BufferAttribute } from 'three'
import { Points } from 'three'
import { PointsMaterial } from 'three'

let mouseX = 0
let mouseY = 0
const clock = new Clock()
const scene = addScene()
const renderer = addRenderer()
const particles = addParticles()
const stars = addStars()
const ambientLight = addAmbientLight()
const pointLight = addPointLight()
const moon = addMoon()
const camera = addCamera()
document.body.onscroll = moveCamera
document.addEventListener('mousemove', handleMousemove)
window.addEventListener('resize', onResize)
animate()

function addStars() {
  return Array(600)
    .fill()
    .map(() => {
      const geometry = new SphereGeometry(
        MathUtils.randFloatSpread(0.3),
        20,
        20
      )
      const material = new MeshStandardMaterial({ color: 0xffffff })
      const mesh = new Mesh(geometry, material)
      const [x, y, z] = Array(3)
        .fill()
        .map(() => MathUtils.randFloatSpread(100))
      mesh.position.set(x, y, z)
      scene.add(mesh)
      mesh.originalPosition = { x, y, z }
      return mesh
    })
}

function addRenderer() {
  const canvas = document.querySelector('#bg')
  const renderer = new WebGLRenderer({ canvas })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  return renderer
}

function addScene() {
  const scene = new Scene()
  scene.background = new TextureLoader().load(spaceUrl)
  return scene
}

function addCamera() {
  const aspect = window.innerWidth / window.innerHeight
  const camera = new PerspectiveCamera(75, aspect, 1)
  return camera
}

function addPointLight() {
  const light = new PointLight(0xffffff)
  light.position.set(10, 10, 10)
  scene.add(light)
  return light
}

function addAmbientLight() {
  const light = new AmbientLight(0xffffff)
  scene.add(light)
  return light
}

function addMoon() {
  const geometry = new SphereGeometry(3, 32, 32)
  const map = new TextureLoader().load(moonUrl)
  const normalMap = new TextureLoader().load(moonNormalUrl)
  const material = new MeshStandardMaterial({ map, normalMap })
  const mesh = new Mesh(geometry, material)
  mesh.position.z = 30
  mesh.position.x = -10
  scene.add(mesh)
  return mesh
}

function moveCamera() {
  const top = document.body.getBoundingClientRect().top
  moon.rotation.x += 0.05
  moon.rotation.y += 0.075
  moon.rotation.z += 0.05
  camera.position.z = top * -0.01
  camera.position.x = top * -0.0002
  camera.position.y = top * -0.0002
}

function addParticles() {
  const geometry = new BufferGeometry()
  const material = new PointsMaterial({ color: 0xffffff, size: 1 })
  const vertices = new Float32Array(600)
  for (let i = 0; i < 600; i++)
    vertices[i] = (MathUtils.randFloatSpread(100) - 0.5) * 3
  geometry.setAttribute('position', new BufferAttribute(vertices, 3))
  const mesh = new Points(geometry, material)
  scene.add(mesh)
  return mesh
}

function handleMousemove(event) {
  mouseY = event.clientY
  mouseX = event.clientX
}

function animateParticles() {
  particles.rotation.y = -0.1 * clock.getElapsedTime()
  if (mouseX <= 0) return
  particles.rotation.y = mouseX * (clock.getElapsedTime() * 0.00005)
  particles.rotation.x = mouseY * (clock.getElapsedTime() * 0.00005)
}

function animateStars() {
  stars.forEach((star) => {
    star.position.y = star.originalPosition.y - mouseY * 0.0005
    star.position.x = star.originalPosition.x - mouseX * 0.0005
  })
}

function animate() {
  requestAnimationFrame(animate)
  animateParticles()
  animateStars()
  animateMoon()
  renderer.render(scene, camera)
}

function animateMoon() {
  moon.rotation.x += 0.00009
  moon.rotation.y += 0.00009
  moon.rotation.z += 0.00009
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
