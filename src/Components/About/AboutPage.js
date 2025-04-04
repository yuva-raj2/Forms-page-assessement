import HomePage from '../Home/HomePage'; 
import AboutMe from '../../Assets/bg-blog.jpg';
import './AboutPage.css';
import FooterPage from "../Footer/FooterPage";
const AboutPage=()=>{
  return(
    <div>
      <HomePage/>
      <div className="align-center">
        <h1>About Us</h1>
        <div className="contents">
        <img src={AboutMe} alt="about-me-image" width={300} height={300}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod laborum alias. Blanditiis ducimus ea expedita cumque facere facilis, quis et corporis quaerat, cum aliquam molestias repellat. Expedita illo impedit, perspiciatis, culpa deleniti aliquid quae provident, dicta quidem quaerat enim a reiciendis at! Et assumenda dicta quisquam, nihil impedit facilis maiores quibusdam adipisci quis minima pariatur est sit fugit vitae eligendi architecto aspernatur. Odio officia, eum molestiae ad repellat ex dolorum voluptate, voluptatem aperiam possimus nobis! Provident voluptatem ullam quasi, necessitatibus repudiandae quisquam fuga voluptatibus laudantium, cumque tempora iusto perferendis, obcaecati soluta maiores officiis officia excepturi dolores minima perspiciatis iure.</p>
        </div>
      </div>
      <FooterPage/>
    </div>
  )
}
export default AboutPage;