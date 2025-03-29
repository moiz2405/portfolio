export default function Footer() {
    return (
      <footer className="bg-gray-800 mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Almoiz Khan. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">almoiz907@gmail.com</a>
          </p>
          {/* <p className="mt-2 text-sm text-gray-500">Built with NEXT.js</p> */}
        </div>
      </footer>
    )
  }
  
  