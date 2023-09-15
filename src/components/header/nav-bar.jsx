function NavBar({ name }) {
  return (
    <nav>
      <div className="flex items-center justify-between font-semibold">
        <div>
          <span>Home</span>
        </div>
        <div className="flex gap-5">
          <span>About</span>
          <span>Contact</span>
          {/* look at header.jsx and don't mind the problem yet*/}
          {/* {This using ternary operator} */}
          <span>{name ? name : "Projects"}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
