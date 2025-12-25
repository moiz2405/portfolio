import Skills from './Skills'
import Projects from './Projects'
// import Contact from './Contact'
import Experience from './Experience'

export default function MainContent() {
  return (
    <main
      className="lg:w-2/3 space-y-12 h-screen overflow-y-auto p-6 custom-scroll rounded-xl"
      style={{
        backgroundImage: "url('/images/wall.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.9,
      }}
    >
      <Experience />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </main>
  )
}
