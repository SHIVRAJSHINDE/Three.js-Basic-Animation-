import './style/main.css'
import * as THREE from 'three'
import { MeshToonMaterial } from 'three'
import gsap from 'gsap'



// scene
const scene = new THREE.Scene()

//Object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xff0000})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

console.log(mesh.position.length())

//sizes
const sizes = {
    width : 800,
    height : 600,

}
//camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z =3
scene.add(camera)

//Renderer
//const canvas = document.querySelector('.webgl')
//console.log(canvas)
const renderer = new THREE.WebGLRenderer({canvas:document.querySelector('canvas.webgl')})
renderer.setSize = (sizes.width,sizes.height)
renderer.render(scene,camera) 


//const clock = new THREE.Clock()
gsap.to(mesh.position,{duration:1, delay:1, x:2})
gsap.to(mesh.position,{duration:1, delay:1, y:2})

const tick = () =>
{

//const elapsedTime = clock.getElapsedTime()

//    camera.position.y = Math.sin(elapsedTime)
//    camera.position.x = Math.cos(elapsedTime)
//    camera.lookAt(mesh.position)
//
    renderer.render(scene,camera)
    window.requestAnimationFrame(tick)
}

tick()
