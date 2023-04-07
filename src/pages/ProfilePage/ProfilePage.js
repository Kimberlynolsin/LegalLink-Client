const ProfilePage = ({ user }) => {

    //store user data on session storage so its doesnt log them out
  return (
    <div>
      <h3>{user.name}</h3>
      <img src={user.picture}></img>
    </div>
  );
};

export default ProfilePage;
