import React from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Result() {

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state.score)

  const handleSubmit = () => {
    // console.log("Button Clicked.")
    navigate('/');
  }

  return (
    <div className='mt-5'>
      <p className='font-mono font-normal text-xl '>Result Page : {location.state.score}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 border border-blue-700 rounded" 
                onClick={() => handleSubmit()}
                >
            Go to Home Page
        </button>
      </div>
  )
}

export default Result;