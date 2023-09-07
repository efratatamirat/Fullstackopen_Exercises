import { useState } from 'react'

const Button = ({handleGood, handleNeutral, handleBad,}) => {
  return(
    <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
    </div>
  )
}
const StatisticLine = ({value, text}) => {
  return(
    <div>
      <table>
        <tbody>
      <tr>
      <td>{text} </td>
      <td>{value} </td>
      </tr>
      </tbody>
      </table>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={`${props.positive}%`} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    setAverage((good + 1 - bad) / (all + 1));
    setPositive(((good + 1) / (all + 1)) * 100);
  
   }
   const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(updatedNeutral + good + bad)
    setAverage((good - bad) / (all + 1));
    setPositive((good / (all + 1)) * 100);
    
   }
   const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(updatedBad + good + neutral)
    setAverage((good - bad - 1) / (all + 1));
    setPositive((good / (all + 1)) * 100);
    
   }

  return (
    <div>
      <h1>give feeback</h1>
      <Button/>
     
        
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average} 
        positive={positive}
        />
    
    </div>
  )
}

export default App