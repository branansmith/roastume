import ResumeIcon from './components/ResumeIcon';
import UploadButton from './components/UploadButton';
import GoButton from './components/GoButton';
import Pitch from './components/Pitch';
import Title from'./components/Title';

import './App.css';

function App() {

  return (
    <>
      <Title/>
      <div id="root-container">
        <ResumeIcon />
        <div id="upload-and-go-buttons">
          <UploadButton />
          <GoButton />
        </div>
        

      </div>
      <div id="pitch">
      <Pitch/>
      </div>
    </>
  )
}

export default App;