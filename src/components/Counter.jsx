import { useState } from 'react'
import PropTypes from 'prop-types'

Counter.propTypes = {
  cnt: PropTypes.number.isRequired,
  cntUp: PropTypes.func.isRequired,
  liftUp: PropTypes.func.isRequired
}

export default function Counter({ cnt, cntUp, liftUp }) {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center text-white p-8">
      <div className="p-6 flex flex-col bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <button
          className="px-8 py-3 mb-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => liftUp(count)}
        >
          Data lifting state up ! ⬆️⬆️⬆️
        </button>

        <button
          className="px-8 py-3 mb-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button
          className="px-8 py-3 mb-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => cntUp()}
        >
          Props Count is {cnt}
        </button>

        <p className="text-gray-300">
          Edit <code className="px-2 py-1 bg-gray-800 rounded text-yellow-300">src/App.jsx</code> and save to test HMR
        </p>

      </div>
      <p className="mt-8 text-sm text-gray-400">
        Explore Vite, React, and Tailwind for modern web development
      </p>
    </div>
  )
}