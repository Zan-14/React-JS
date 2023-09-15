function HeroSection() {
  const usersData = ["Fauzan", "Jumdinhar", "Marsha"];
  return (
    <div className="flex justify-center">
      <ul>
        {/* using array method to loop the data from array */}
        {usersData.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeroSection;
