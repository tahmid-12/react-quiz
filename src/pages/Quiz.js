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

  console.log(value);

  const displayQuestion = value.slice(pagesVisited, pagesVisited + usersPerPage).map((item,index) => {
    return(
      <div key={index}>
        <p>{item.question}</p>
        <p>{item.incorrect_answers} {item.correct_answer}</p>
      </div>
    )
  })

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const pageCount = Math.ceil(value.length / usersPerPage)


  return (
    <>
      Quiz Questions
      {displayQuestion}
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