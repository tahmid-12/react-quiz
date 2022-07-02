import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from '../data.json';

function Home() {
  
  const [name, setName] = useState("");
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {

    if (localStorage.getItem('Name') === null) {
      const random = Math.floor(Math.random() * data.length);
      localStorage.setItem('Name', data[random].name);
    }
    const items = JSON.stringify(localStorage.getItem('Name'));
    if(items){
        setName(items)
    }
  },[]);

  console.log("Nameee =>", name);
  // console.log("Random =>", data[random].name);

  const handleSubmit = () => {
    console.log("Button Clicked.")
    navigate('/quiz');
  }

  const handleKeyPress = useCallback((event) => {
    if(event.keyCode === 13){
      console.log("Enter key pressed");
      navigate('/quiz');
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
      <p className="font-mono text-3xl font-medium">Welcome to the app {name}</p>
      <p className="font-mono text-xl font-medium">Click on the button or press 'Enter' from your keyboard to start the test</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 border border-blue-700 rounded" 
                onClick={() => handleSubmit()}
                >
            Start the Quiz!!!
        </button>
    </div>
  )
}

export default Home;