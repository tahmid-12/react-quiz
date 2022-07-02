import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

function Quiz() {

  const [question, setQuestion] = useState([]);
  const [value, setValue] = useState([]);

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

  console.log(value)
  

  return (
    <>
      Quiz Questions
      {
        value.map((item,index) => {
          return(
            <div key={index}>
              <p>{++index}. {item.question}</p>
              <p>{item.incorrect_answers} {item.correct_answer}</p>
            </div>
          )
        })
      }
      <Pagination 
          nPages={10}
          currentPage={10} 
          setCurrentPage={10}
      />
    </>
  )
}

export default Quiz;