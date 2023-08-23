import './App.css';
import GradesComponent from "./GradesComponent";
import data from "./data.json";

function App() {
  function scoreCard(data){
    return(<GradesComponent 
      score= {data.score}
      category= {data.category}
      icon= {data.icon}
      colorBox = {data.colorBox}
      colorText = {data.colorText}
    />)
  }


  return (
    <div className="App container">
      <div className="half average">
        <h2 className="averagetitle">Your Result </h2>
        <div className='averageNo'>
          <h3>62</h3>
          <p className='of100'>of 100</p>
        </div>
        <div className = 'averageText'>
          <h4 className='status'>Great</h4>
          <p className='textAV' >Your score is higher than 65% of the people who had takend this test</p>
        </div>
      </div>

      <div className="half results">
        <h3 className="summary">Summary</h3>
        {data.map(scoreCard)}
      </div>
    </div>
  );
}

export default App;
