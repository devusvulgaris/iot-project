import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="py-5 bg-gray-200">
      <div className="container mx-auto max-w-screen-md">
        <div className="flex justify-between">
          <p>IoT Pirates, Internet of Things. {new Date().getFullYear()}</p>
          <a
            href="https://github.com/devusvulgaris/smart-mini-garden"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
