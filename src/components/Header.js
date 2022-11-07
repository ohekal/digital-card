import img from "../pro.png";
function Header() {
  return (
    <header>
      <img src={img} alt="headerPhoto" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <p>laurasmith.website</p>
      <button>
        <i class="fa-solid fa-envelope"></i>Email
      </button>
      <button>
        <i class="fa-brands fa-linkedin-in"></i>linkedin
      </button>
    </header>
  );
}
export default Header;
