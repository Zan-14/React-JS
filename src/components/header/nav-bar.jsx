function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between font-semibold">
        <div>
          <span>Home</span>
        </div>
        <div className="flex gap-5">
          <span>About</span>
          <span>Contact</span>
          <span>Projects</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
