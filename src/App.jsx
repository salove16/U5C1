import { useState } from "react";

function App() {
  const [inv, setscore]=useState({
    score:0,
    wicket:0,
    over:0,
    subOver:0
  })
  const score=inv.score
  const wicket=inv.wicket
  const over=inv.over
  const subOver=inv.subOver


 const won=["India Won",""]

const add=(value)=>{
  setscore(prevState=>{
    return {...prevState,score:prevState.score+value}
  })
}
const out=(value)=>{
  if (wicket===10)
  {
    return 
  }
  setscore(prevState=>{
    return {...prevState,wicket:prevState.wicket+value}
  })
}

const Over=(value)=>{
  if(subOver===5)
  {
    
    setscore(prevState=>{
      return {...prevState,subOver:-1,over:prevState.over+1}
    })
  }
  setscore(prevState=>{
    return {...prevState,subOver:prevState.subOver+value}
  })
}



  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              `${over}.${subOver}`
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{
          add(1)
        }}>Add 1</button>
        <button className="addScore4" onClick={()=>{
          add(4)
        }}>Add 4</button>
        <button className="addScore6" onClick={()=>{
          add(6)
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
          out(1)
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          Over(1)
        }}>Add 1</button>
      </div >

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
      score>=100?won[0]:won[1]
      }
    </div>
  );
}

export default App;
