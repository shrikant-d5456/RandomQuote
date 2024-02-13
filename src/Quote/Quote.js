import React, { useEffect, useState } from 'react'
import './Quote.css'

export default function Quote() {

  const [data, setData] = useState([])
  const [randomNumber, setRandomNumber] = useState();

  // random number
  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 15) + 1);
    document.title =`Have A Nice Day  Q(${randomNumber})`
  }

  const getQuate = async () => {
    try {
      const res = await fetch('https://type.fit/api/quotes');
      const responseData = await res.json();
      console.log(responseData)
      setData(responseData);
    } catch (error) {
      console.error('Error fetching quote data:', error);
    }
  }

  useEffect(() => {
    getQuate();
  }, []);


  return (
    <>
      <h1>Random Quote</h1>

      {data.map((cur, index) =>
        index === randomNumber ? (
          <div className='data' key={index}>
            <p>" {cur.text} "</p>
            <b>- {cur.author}</b>
          </div>
        ) : null
      )}
      <button onClick={generateRandomNumber} >Generate random Quote  </button>
    </>
  )
}