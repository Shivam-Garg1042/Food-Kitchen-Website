const Footer = () => {
    return (
      <footer className="w-full bg-gray-600 text-white py-4">
        <div className="container mx-auto text-center text-m">
          <p className="mb-1">
            © Copyright{" "}
            <span className="font-semibold text-red-500 ">Mamta's Galley</span>
            {" "}All Rights Reserved
          </p>
          <p>
            Designed by{" "}
            <a 
              href="https://www.linkedin.com/in/shivam-garg-a5a5a9301/" 
              className="text-red-500 hover:text-red-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shivam Garg
            </a>
            
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;