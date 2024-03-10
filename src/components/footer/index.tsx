const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container mx-auto">
        <p>IoT Pirates, Internet of Things</p>
        <p className="text-center w-full">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
