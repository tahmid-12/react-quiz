import React, { useEffect, useCallback } from 'react'

function Home() {

  const handleSubmit = () => {
    console.log("Button Clicked.")
  }

  const handleKeyPress = useCallback((event) => {
    if(event.keyCode == 13){
      console.log("Enter key pressed")
    }else{
      console.log(`Key pressed: ${event.key}`);
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <p className="font-mono text-3xl font-medium">Welcome to the app Some-User</p>
      <p className="font-mono text-xl font-medium">Click on the button or press 'Enter' from your keyboard to start the test</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 border border-blue-700 rounded" 
                onClick={() => handleSubmit()}
                // onKeyPress={() => handleKeyPress()}
                >
            Start the Quiz!!!
        </button>
    </div>
  )
}

export default Home;