import "../css/App.css";
import { useEffect, useState } from "react";
import { getUserData } from "../services/utils/userStorage";
import ProfileBanner from "../components/Profile/ProfileBanner";
import LoginForm from "../components/Profile/LoginForm";
import RegisterForm from "../components/Profile/RegisterForm";
import GamingLibrary from "../components/Profile/GamingLibrary";

function Profile() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setUser(getUserData());
  }, []);

  return (
    <div className={`container ${!user ? "login" : ""}`}>
      <div className="row">
        <div className="col-lg-12">
          <div className={`page-content ${!user ? "form-content" : ""}`}>
            {user ? (
                <>
                    <ProfileBanner user={user} />
                    <GamingLibrary />
                </>
            ) : isLogin ? (
              <LoginForm onSwitch={() => setIsLogin(false)} />
            ) : (
              <RegisterForm onSwitch={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;