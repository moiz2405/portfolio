import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 lg:px-8 py-10 lg:py-20 flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Flexbox to adjust layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
