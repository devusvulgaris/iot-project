import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="py-5 bg-gray-200">
      <div className="container mx-auto max-w-screen-md px-3 md:px-4">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <p className="text-center mb-2 md:mb-0">
            IoT Pirates, Internet of Things. {new Date().getFullYear()}
          </p>
          <a
            href="https://github.com/devusvulgaris/smart-mini-garden"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
