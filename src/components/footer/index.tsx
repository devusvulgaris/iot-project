const Footer = () => {
  return (
    <footer className="py-5 bg-gray-200">
      <div className="container mx-auto max-w-screen-md">
        <p>IoT Pirates, Internet of Things</p>
        <p className="text-center w-full">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
