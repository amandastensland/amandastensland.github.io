import { Canvas } from '@react-three/fiber'
import Background from './Background'
import { Environment, OrbitControls } from '@react-three/drei'
import { motion } from "framer-motion"

export default function PortfolioPage() {
    return (<>
        <main className='h-screen w-screen z-10 relative p-10 mx-auto max-w-[1100px]'>
            <header className="h-screen flex flex-col content-center justify-center text-center">
                <motion.div className="border-b-1 relative" initial={{ opacity: 0, bottom: -50 }} whileInView={{ opacity: 1, bottom: 0 }} transition={{ duration: 0.8, delay: 1 }}>
                    <h1 className="text-8xl font-mono">Amanda Stensland</h1>
                </motion.div>
                <motion.hr className="border-black relative my-10 mx-auto" initial={{ opacity: 0, width: 0 }} whileInView={{ opacity: 1, width: '100%' }} transition={{ duration: 1 }} />
                <motion.p className="font-mono text-3xl relative" initial={{ opacity: 0, top: -50 }} whileInView={{ opacity: 1, top: 0 }} transition={{ duration: 0.8, delay: 1 }}>Web Developer</motion.p>
            </header>

            <div className="max-w-[800px] mx-auto">
                <motion.section className="h-screen" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="bg-white p-10">
                        <h2 className="text-2xl mb-2">Nice to meet you!</h2>
                        My name is Amanda Stensland,
                        I'm currently working as a web developer.
                        Feel free to check out some of my personal projects at <a href="https://codepen.io/Diashes" className="font-bold text-blue-700">CodePen</a> and <a className="font-bold text-blue-700" href="https://github.com/diashes">GitHub</a>.
                    </div>
                </motion.section>

                <motion.blockquote className="h-screen text-6xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <p>”Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.” – Antonie de Saint-Exupery</p>
                </motion.blockquote>

                <motion.section className="h-screen" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="bg-white p-10">
                        <h2 className="mb-2 text-4xl">Languages</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>Pug</li>
                            <li>Marko</li>
                            <li>Handlebars</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>CoffeeScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                        </ul>
                    </div>
                </motion.section>

                <motion.section className="h-screen" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="bg-white p-10">
                        <h2 className="mb-2 text-4xl">Libraries</h2>
                        <ul>
                            <li>p5.js</li>
                            <li>React.js</li>
                            <li>Angular.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Mocha</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                </motion.section>

                <motion.section className="h-screen" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="bg-white p-10">
                        <h2 className="mb-2 text-4xl">Tools</h2>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>CodePen</li>
                            <li>GitHub</li>
                            <li>p5.js Online Editor</li>
                        </ul>
                    </div>
                </motion.section>

                <motion.section className="h-screen" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="bg-white p-10">
                        <h3 className="mb-2 text-4xl">Artist</h3>

                        <p>I sometimes like to create art and design things, both in 2D and 3D.</p>

                        <h2 className='mb-2 mt-4 text-3xl'>What I create</h2>

                        <ul>
                            <li>Game Assets</li>
                            <li>Digital Art</li>
                            <li>Web Designs</li>
                        </ul>

                        <h2 className='mb-2 mt-4 text-3xl'>Tools</h2>

                        <ul>
                            <li>Krita</li>
                            <li>Affinity Designer</li>
                            <li>Affinity Photo</li>
                            <li>Blender</li>
                            <li>Sketch</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </motion.section>

                <motion.section className="h-screen" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="bg-white p-10">
                        <h2 className="text-4xl">Work History</h2>

                        <h3 className="mb-2 mt-4 text-3xl">King</h3>
                        <p>2023 - now.</p>

                        <h3 className="mb-2 mt-4 text-3xl">Studio3D</h3>
                        <p>2021 - 2023.</p>

                        <h3 className="mb-2 mt-4 text-3xl">Bonnier News</h3>
                        <p>2018 - 2021.</p>

                        <h3 className="mb-2 mt-4 text-3xl">Publit</h3>
                        <p>2015 - 2018.</p>
                    </div>
                </motion.section>

                <motion.blockquote className="h-screen text-6xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <p>Thanks for visiting!</p>
                </motion.blockquote>
            </div>
        </main>

        <div className="fixed top-0 left-0 h-screen w-screen">
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.1} />
                <Environment preset="sunset" background />
                <Background />
            </Canvas>
        </div>
    </>
    )
}