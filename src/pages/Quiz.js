import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './page.css';

function Quiz() {

  const [question, setQuestion] = useState([]);
  const [value, setValue] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

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

  // useEffect(() => {
  //   try{
  //     (
  //       async () => {
  //         const {
  //           data: { results }
  //         } = await axios.get(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`);

  //         if(Array.isArray(results)){
  //           setValue(results);
  //         }
  //       })();
  //   }catch(err){
  //     console.log(err);
  //   }
  // },[])

  // console.log("Value =>",value);

  // "Index =>",index,"Value =>",typeof 

  // var arr = [];

  // value.forEach((number) => {
  //   arr = number.incorrect_answers
  //   arr.push(number.correct_answer)
  // })

  // console.log(value);

  // value.temp_array = 

  
  value.forEach((element) => {
    element.incorrect_answers = [...element.incorrect_answers,element.correct_answer]
    // element.incorrect_answers.push(element.correct_answer)
    // element.temp_array = [element.incorrect_answers]
    // return arr.filter((item,
    //   index) => arr.indexOf(item) === index);
  })

  // console.log(value);


  const displayQuestion = value.slice(pagesVisited, pagesVisited + usersPerPage).map((item,index) => {
    return(
      <div key={index}>
        <p>{item.question}</p>
        {
          item.incorrect_answers.map((item,index) => {
            return(
              <div className="flex justify-center items-center">
                <input type="radio"/>{item}
              </div>
            )
          })  
        }
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

 const displayOptions = value.slice(pagesVisited, pagesVisited + usersPerPage).map((item,index) => {
  return(
    <div key={index}>
      <p>
      {
        item.incorrect_answers.map((item,index) => {
          return(
            <div className="flex justify-center items-center">
              <input type="radio"/>{item}
            </div>
          )
        })
      }
      </p>
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

console.log(displayOptions)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const pageCount = Math.ceil(value.length / usersPerPage)


  return (
    <>
      Quiz Questions
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
    </>
  )
}

export default Quiz;