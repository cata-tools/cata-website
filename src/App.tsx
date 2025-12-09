import Navbar from './components/Navbar'
import { motion } from 'framer-motion'

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(to bottom, #E7F0FD 0%, #B8D4F0 100%)'
      }}
    >
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl min-[430px]:text-4xl min-[587px]:text-5xl md:text-6xl font-bold text-center leading-tight"
        >
          <span
            className="inline-block bg-gradient-to-r from-[#007AFF] to-[#D305C2] bg-clip-text text-transparent"
            style={{
              animation: 'gradientSpin 4s linear infinite',
              backgroundSize: '200% 200%',
            }}
          >
            Coming Soon
          </span>
        </motion.h1>
        <style>
          {`
            @keyframes gradientSpin {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default App
