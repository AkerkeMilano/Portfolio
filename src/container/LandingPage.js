import ColorTabs from "../components/Tabs/Tabs";
import myPhoto from "../assets/img/akerke-photo.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="Welcome-block">
        <div className="my-photo">
          <img src={myPhoto} alt="myPhoto" width="400px" />
        </div>
        <div className="hello-line">
          <div>FRONT-END DEVELOPER</div>
          <div>
            Hello, I'm <span>Akerke</span> Welcome to my World.
          </div>
          <div className="contacts">
            <a href="https://www.linkedin.com/in/akerketleugazy/" target="_blanket">
            <BsLinkedin></BsLinkedin>
            </a>
            <a href="https://github.com/AkerkeMilano" target="_blanket"><BsGithub></BsGithub></a>
          </div>
        </div>
      </div>

      <div className="AboutMeBlock">
        <div className="MySkillsBlock">
          <div className="about-me-line">About Me</div>
          <ColorTabs></ColorTabs>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
