import ResumeIcon from './components/ResumeIcon';
import RoastumeIcon from './components/RoastumeIcon';
import Description from './components/Description';
import './App.css';

function App() {

  return (
    <>
      <div id="root-container">
        <ResumeIcon />
        <div id="title-and-description">
        <RoastumeIcon />
        <Description />
        </div>
      </div>
    </>
  )
}

export default App;