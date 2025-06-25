import ResumeIcon from './components/ResumeIcon';
import UploadButton from './components/UploadButton';
import GoButton from './components/GoButton';
import Pitch from './components/Pitch';

import './App.css';

function App() {

  return (
    <>
      <div id="root-container">
        <ResumeIcon />
        <div id="upload-and-go-buttons">
          <UploadButton />
          <GoButton />
        </div>
        

      </div>
      <Pitch/>
    </>
  )
}

export default App;