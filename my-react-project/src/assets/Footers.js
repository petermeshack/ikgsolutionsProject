import HeadersParagraph from "./HeadingParagraph";
import { Link } from 'react-router-dom';

export default function Footers(){
    return(
        <footer class="page-footer indigo darken-4">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
            <HeadersParagraph title="iKg Solutions" subtitle="Beyond Oceans"/>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Look Around</h5>
              <ul>
                <li class="white-text text-lighten-3"><Link to="/">Home</Link></li>
                <li class="white-text text-lighten-3"><Link to="/about">About</Link></li>
                <li class="white-text text-lighten-3"><Link to="/ourservice">OurService</Link></li>
                <li class="white-text text-lighten-3"><Link to="/ourteam">OurTeam</Link></li>
                <li class="white-text text-lighten-3"><Link to="/contacts">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container white-text">
          © 2024 Copyright iKg Solutions
          </div>
        </div>
      </footer>
    )
  }
