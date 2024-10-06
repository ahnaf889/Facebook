import React, {useState} from 'react';
import {
  FaGoogle,
  FaFacebookSquare,
  FaEyeSlash,
  FaEye,
  FaGithub,
} from 'react-icons/fa';
import {useNavigate, Link} from 'react-router-dom';
import {ValidateEmail, ValidatePassword} from '../../Utils/Validate.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import {getDatabase, ref, set, push} from 'firebase/database';
import {successToast, errorToast} from '../../Utils/Toast.js';
import BeatLoader from 'react-spinners/BeatLoader.js';
import {getTime} from '../../Utils/Moment/Moment.js';

//LoginLefat Starat Point
const LoginLeft = () => {
  /**
   * todo: firebase auth implemnt
   * @param({})
   */
  const auth = getAuth();
  const navigate = useNavigate();
  const db = getDatabase();

  // Toggle password visibility
  const [EyeOpen, setEyeOpen] = useState(false);
  const [Loding, setLoding] = useState(false);

  // Toggle handelLoginInput visibility
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: '',
  });

  //handelLoginInput funtion emplement
  const handelLoginInput = (event) => {
    setloginInfo({
      ...loginInfo,
      [event.target.id]: event.target.value,
    });
  };

  // Toggle inputError state visibility
  const [loginError, setloginError] = useState({
    emailError: '',
    passwordError: '',
  });

  /**
   * todo: handelSingUp funtion emplement
   * @param({})
   */
  const handelSignUp = () => {
    const {email, password} = loginInfo;
    if (!email || !ValidateEmail(email)) {
      setloginError({
        ...loginError,
        emailError: 'Your email is wrong !!',
      });
    } else if (!password || !ValidatePassword(password)) {
      setloginError({
        ...loginError,
        passwordError: 'Your password is wrong !!',
        emailError: '',
      });
    } else {
      setloginError({
        ...loginError,
        passwordError: '',
        emailError: '',
      });
      setLoding(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          successToast('Success your login');
        })
        .catch((Error) => {
          errorToast(`${Error.code}`, 'top-right');
        })
        .finally(() => {
          setloginInfo({
            ...loginError,
            email: '',
            password: '',
          });
          setloginError({
            ...loginError,
            passwordError: '',
            emailError: '',
          });
          setEyeOpen(false);
          setLoding(false);
        });
    }
  };

  /**
   * todo: handelGoogleLogin funtion emplement
   * @param({})
   */
  const handelGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const user = result.user;
        return user;
      })
      .then((userCreadit) => {
        console.log(userCreadit);

        const {photoUrl, localId, email, displayName} =
          userCreadit.reloadUserInfo;
        const usersRef = ref(db, 'user/');
        set(push(usersRef), {
          uid: localId,
          userEmail: email,
          userName: displayName,
          userProfile: photoUrl,
          createdAt: getTime(),
        });
      })
      .then(() => {
        navigate('/');
      })
      .then(() => {
        successToast('Your google login is done');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        errorToast(errorCode);
      });
  };

  /**
   * todo: handelFacebookLoign funtion emplemnt
   * @param({})
   */
  const handelFacebookLoign = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div className="w-[60%] h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-y-10">
          {/* =========== Frist Design  */}
          <div>
            <span className="flex justify-center items-center text-[50px] pb-5 cursor-pointer">
              <a
                href="https://github.com/ahnaf889"
                target="_"
              >
                <FaGithub />
              </a>
            </span>
            <h3 className="font-Open_Sens font-bold text-auth_font_color text-[39px] pb-12">
              Login to your account!
            </h3>
            <div className="flex justify-between">
              {/* ===== Google ===== */}
              <div
                className="flex items-center cursor-pointer gap-x-3 w-[200.9px] px-4 h-[58.52px] border-auth_font_color border-opacity-35 rounded-md border-2"
                onClick={handelGoogleLogin}
              >
                <span className="text-blue-800 text-[20px]">
                  <FaGoogle />
                </span>
                <p className="font-Open_Sens font-semibold text-[12.34px] text-auth_font_color">
                  Login with Google
                </p>
              </div>
              {/* ===== Facebook ===== */}
              <div
                className="flex items-center cursor-pointer gap-x-3 w-[200.9px] px-4 h-[58.52px] border-auth_font_color border-opacity-35 rounded-md border-2"
                onClick={handelFacebookLoign}
              >
                <span className="text-blue-800 text-[20px]">
                  <FaFacebookSquare />
                </span>
                <p className="font-Open_Sens font-semibold text-[12.34px] text-auth_font_color">
                  Login with Facebook
                </p>
              </div>
            </div>
          </div>
          {/* Loging impliment */}
          <div className="flex flex-col gap-y-3">
            <fieldset className="border-[2px] rounded-md border-[#11175d37]">
              <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                Email Address
              </legend>
              <input
                type="text"
                name="email"
                id="email"
                value={loginInfo.email}
                onChange={handelLoginInput}
                className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                placeholder="Enter your email"
              />
            </fieldset>
            <span className="text-auth_orenge_color">
              {loginError.emailError}
            </span>
          </div>

          {/* Password impliment */}
          <div className="flex flex-col gap-y-3">
            <fieldset className="border-[2px] rounded-md border-[#11175d37]">
              <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                Password
              </legend>
              <div className="flex items-center">
                <input
                  type={EyeOpen ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={loginInfo.password}
                  onChange={handelLoginInput}
                  className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder=".........."
                />
                <span
                  className="pr-5 cursor-pointer"
                  onClick={() => setEyeOpen(!EyeOpen)}
                  value={EyeOpen}
                >
                  {EyeOpen ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </fieldset>
            <span className="text-auth_orenge_color">
              {loginError.passwordError}
            </span>
          </div>

          {/* Button impliment */}
          <div className="flex items-center flex-col gap-y-3">
            <button
              className="w-full py-[20px] rounded-2xl bg-auth_bg_color font-nunito text-[22.64px] text-white font-medium"
              onClick={handelSignUp}
            >
              {Loding ? (
                <BeatLoader
                  loading={Loding}
                  color="#FF0000"
                  size={22}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                'Sign Up'
              )}
            </button>
            <p className="font-nunito pt-5 cursor-pointer text-[15px]">
              Already have an account?
              <Link to="/registration">
                <span className="text-red-600 font-semibold"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLeft;
