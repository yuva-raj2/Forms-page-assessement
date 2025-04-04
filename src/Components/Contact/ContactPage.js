import HomePage from "../Home/HomePage";
import './ContactPage.css';
import FooterPage from "../Footer/FooterPage";
const ContactPage=()=>{
  return(
    <div>
      <HomePage/>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="sec">
          <section className="sec-email">
            <h2>Email</h2>
            <p>yuvaarun09964@gmail.com</p>
          </section>
          <section className="sec-phone">
            <h2>Phone No.</h2>
            <p>+91 XXX XXX XXX X</p>
          </section>
        </div>
        <div className="form-page">
          <form className="forms">
            <div className="names">
             <label className="name">Name:
                <input type="text" name="Yuvi" required placeholder="Yuvi"/>
              </label>
            </div>
            <div className="emails">
              <label className="email">Email:
                <input type="email" name="Yuvi" required placeholder="yr@gmail.com"/>
              </label>
            </div>
            <div className="message">
              <label className="name">Message:
                <textarea required placeholder="Enter your message" rows={20} cols={30}></textarea>
              </label>
            </div>
          </form>
        </div>
      </div>
      <FooterPage/>
    </div>
  )
}
export default ContactPage;