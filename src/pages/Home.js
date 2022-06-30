import React from 'react'

function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <p className="font-mono text-xl font-medium">Click on the button or press 'Enter' from your keyboard to start the test</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 border border-blue-700 rounded">
            Start the Quiz!!!
        </button>
    </div>
  )
}

export default Home;