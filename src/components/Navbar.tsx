import logoColor from '../../assets/logo-color.jpg';

const Navbar = () => {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 px-6 py-4 flex items-center z-50 bg-white"
    >
      {/* Logo */}
      <img src={logoColor} alt="Cata Logo" className="h-8 w-auto" />
    </nav>
  );
};

export default Navbar; 