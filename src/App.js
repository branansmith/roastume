import ResumeIcon from './components/ResumeIcon';
import RoastumeIcon from './components/RoastumeIcon';
import Description from './components/Description';
import UploadButton from './components/UploadButton';
import GoButton from './components/GoButton';

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
        <div id="upload-and-go-buttons">
          <UploadButton />
          <GoButton />
        </div>

      </div>
    </>
  )
}

export default App;