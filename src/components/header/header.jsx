import NavBar from "./nav-bar";
// don't forget to import the child components into the parent component

function Header() {
  return (
    <header>
      <div className="bg-yellow-600 p-5">
        {/* this is how to import the component */}
        {/* same component but a little different information */}
        <NavBar name="Exit" />
      </div>
    </header>
  );
}

export default Header;
