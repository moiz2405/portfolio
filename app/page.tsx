import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-8">
        <Sidebar  />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

