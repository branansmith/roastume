import logo from '../images/roastume.png'
import {Link} from 'react-router-dom'

const HomePage = () => (
    <>
        <p id="title">The World Renowned Resume Critic</p>
        <div id="root-container">
            <img id="roastume-logo" src={logo} alt="roastume-icon" width="200px" height="250px"></img>
            <div id="upload-and-go-buttons">
                <label for="file-upload"></label> 
                <input type="file" id="file-upload" accept=".pdf, .doc, .docx" />
                <Link to="/results"><button id="go-button">Go</button></Link>
            </div>


        </div>
        <div id="pitch">
            <p>
                Giving you feedback that you will probably never use, but hey, something is better than nothing.
            </p>
        </div>
    </>
)
// prevent users from making very large files using maxSize property or something
//if someone decides to submit an entire book to this client it will be extremely expensive
export default HomePage;