import './HomePage.css';
import Profile from '../../Assets/bg-blog.jpg';
import { Link } from 'react-router-dom';
import DummyHome from '../DummyPage/DummyHome';
const HomePage=()=>{
  return(
    <div>
        <div className='bg-purple'>
          <div className='sec-1'>
            <div className='sec-1-2'>
              <img src={Profile} alt='profile-img' width={50} height={50} style={{borderRadius:50}}/>
            </div>
            <div className='sec-1-3'>
              <p>Hello, Welcome</p>
              <h2>Yuvi</h2>
            </div>
          </div>
          <div className="notify-bar">
            <div className='nav-desktop'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <span>notify</span>
            </div>
          </div>
        </div>
        <DummyHome/>
    </div>
  )
}
export default HomePage;