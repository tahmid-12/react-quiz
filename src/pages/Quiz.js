import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import './page.css';

function Quiz() {

  const [value, setValue] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const usersPerPage = 1;
  const pagesVisited = pageNumber * usersPerPage;

  const getData = async () => {
    try{
      axios.get(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`).then((res) => {
      setValue(res.data.results);
      });
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData()  
  },[]);

  // console.log("Value =>",value);

  // "Index =>",index,"Value =>",typeof 

  // var arr = [];

  // value.forEach((number) => {
  //   arr = number.incorrect_answers
  //   arr.push(number.correct_answer)
  // })

  // console.log(value);

  // value.temp_array = 

  // function shuffle(array) {
  //   array.sort(() => Math.random() - 0.5);
  // }
  
  value.forEach((element) => {
    element.temp_array = [...element.incorrect_answers,element.correct_answer];
    // shuffle(element.temp_array);
  })

  // console.log(value.length);

  const displayQuestion = value.slice(pagesVisited, pagesVisited + usersPerPage).map((item,index) => {
    
    const handleChange = (e) => {
      if(e.target.getAttribute('name') === item.correct_answer){
        // console.log("Correct")
        // const [currentQuestion, setCurrentQuestion] = useState(0);
        // point++;
        setScore(score + 1)
        // console.log("point", score);
      }

      if (currentQuestion + 1 < value.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // setShowResults(true);
        // console.log("Finished", score);
        navigate('/result/{score}',{ state: {score: score}});
      }
    }

    return(
      <div key={index}>
        <p className="font-mono font-normal text-xl">{item.question}</p>
          <ul className="flex flex-col mt-5">
          {
            item.temp_array.map((item,index) => {
              return(
                  <li    key={index} 
                          // ${index < 1 ? "hidden lg:block" : ""}
                         className={`font-mono border-4 border-orange-100 active:bg-violet-700 font-normal mb-5 p-5`} 
                         name={item}
                         onClick={handleChange}> {item}
                  </li>
                
              )
            })
          }  
          </ul>
        {/* <input type="radio"/>{item.incorrect_answers} */}
        {/* <input type="radio" id="html" name="fav_language" value="HTML">{item.incorrect_answers}</input> */}
        {/* <input type="radio" id="html" name="fav_language" value={item.incorrect_answers}/>
        <input type="radio" id="html" name="fav_language" value={item.correct_answers}/>  */}
        {/* <p>{item.incorrect_answers} </p> */}
        {/* <p>{item.correct_answer}</p>
        <p>{item.incorrect_answers[1]}</p>
        <p>{item.temp_array}</p> */}
      </div>
    )
  })


  const changePage = ({ selected }) => {
    if(selected){
      setPageNumber(selected)
    }else{
      setPageNumber(pageNumber + 1)
    }
  }

  const pageCount = Math.ceil(value.length / usersPerPage)


  return (
    <>
     <div className="flex flex-col justify-center items-center">
      <h3 className="font-mono font-extrabold mt-3 text-3xl">Quiz Questions</h3>
      {displayQuestion}
      {/* {displayOptions} */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"} 
      />
     </div>
    </>
  )
}

export default Quiz;