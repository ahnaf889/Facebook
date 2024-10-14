import React, {useEffect, useState} from 'react';
import HomeRIghtComponent from '../../Components/HomeComponent/HomeRightComponents/HomeRIghtComponent';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import NotVerifide from '../../Components/HomeComponent/HomeRightComponents/NotVerifide/NotVerifide';

const Home = () => {
  const auth = getAuth();

  const [isEmailVerifide, setisEmailVerifide] = useState(null);
  console.log(isEmailVerifide);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setisEmailVerifide(user.reloadUserInfo.emailVerified);
    });
  }, []);
  return (
    <div>{isEmailVerifide ? <HomeRIghtComponent /> : <NotVerifide />}</div>
  );
};

export default Home;
