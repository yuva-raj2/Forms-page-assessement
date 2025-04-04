import { Link } from 'react-router-dom';
import './FooterPage.css';
const FooterPage=()=>{
  return(
    <div className='footer-page'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default FooterPage;