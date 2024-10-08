import React, {useEffect, useState} from 'react';
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import {
  ValidateEmail,
  ValidateName,
  ValidatePassword,
} from '../../Utils/Validate.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import {getDatabase, ref, set, push} from 'firebase/database';
import BeatLoader from 'react-spinners/BeatLoader.js';
import {successToast, errorToast, infoToast} from '../../Utils/Toast.js';
import {getTime} from '../../Utils/Moment/Moment.js';
import {useNavigate, Link} from 'react-router-dom';

//Code Start now ============ ?
const RegistrationLeft = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  // State for form fields
  const [Email, setEmail] = useState('');
  const [FullName, setFullName] = useState('');
  const [Password, setPassword] = useState('');
  // State for errors
  const [EmailError, setEmailError] = useState('');
  const [FullNameError, setFullNameError] = useState('');
  const [PasswordError, setPasswordError] = useState('');

  //State for loding
  const [Loding, setLoding] = useState(false);

  // Handle input changes
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // Toggle password visibility
  const [EyeOpen, setEyeOpen] = useState(false);
  const handleEye = () => {
    setEyeOpen(!EyeOpen);
  };

  //useEffect funtion user implement
  useEffect(() => {
    onAuthStateChanged(auth, (userinfo) => {
      console.log(userinfo.displayName);
    });
  }, []);

  // Handle form submission
  const handleButton = () => {
    if (!Email || !ValidateEmail(Email)) {
      setEmailError('Please enter a valid email address.');
    } else if (!FullName || !ValidateName(FullName)) {
      setEmailError('');
      setFullNameError('Please enter your full name.');
    } else if (!Password || !ValidatePassword(Password)) {
      setFullNameError('');
      setPasswordError('Please enter a valid password.');
    } else {
      setEmailError('');
      setFullNameError('');
      setPasswordError('');
      setLoding(true);

      // Create user with email and password
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userinfo) => {
          successToast('Your Registration is done', 'top-left');
        })
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            successToast('Please check your email', 'top-left');
          });
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: FullName,
          });
        })
        .then(() => {
          const usersRef = ref(db, 'user/');
          set(push(usersRef), {
            uid: auth.currentUser.uid,
            userName: FullName,
            userProfile: '',
            userEmail: auth.currentUser.email,
            createdAt: getTime(),
          });
        })
        .then(() => {
          navigate('/login');
        })
        .catch((err) => {
          console.error('User Database Write Failds');
        })
        .catch((error) => {
          // const ourError = error.message.split("/")[1];
          // errorToast(ourError.slice(0, ourError.length - 2));
          errorToast(error.code, 'top-right');
        })
        .finally(() => {
          setEmailError('');
          setFullNameError('');
          setPasswordError('');
          setEmail('');
          setFullName('');
          setPassword('');
          setLoding(false);
          setEyeOpen(false);
        });
    }
  };

  return (
    <>
      <div className="w-[60%] h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-y-10">
            {/* Register impliment */}
            <div>
              <h1 className="font-nunito text-auth_font_color text-[38.4px] font-semibold leading-[43px]">
                Get started with easy registration
              </h1>
              <p className="pt-2 font-nunito text-auth_opasiti_color text-[20.64px]">
                Free registration and you can enjoy it
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Email Address
                </legend>
                <input
                  type="text"
                  name="email"
                  value={Email}
                  onChange={handleEmail}
                  className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your email"
                />
              </fieldset>
              <span className="text-auth_orenge_color">{EmailError}</span>
            </div>
            {/* Full Name impliment */}
            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Full Name
                </legend>
                <input
                  type="text"
                  name="name"
                  value={FullName}
                  onChange={handleFullName}
                  className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your name"
                />
              </fieldset>
              <span className="text-auth_orenge_color">{FullNameError}</span>
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
                    value={Password}
                    onChange={handlePassword}
                    className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                    placeholder=".........."
                  />
                  <span
                    className="pr-5 cursor-pointer"
                    onClick={handleEye}
                    value={EyeOpen}
                  >
                    {EyeOpen ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </fieldset>
              <span className="text-auth_orenge_color">{PasswordError}</span>
            </div>
            {/* Button impliment */}
            <div className="flex items-center flex-col gap-y-3">
              <button
                className="w-full py-[20px] rounded-[86px] bg-auth_bg_color font-nunito text-[22.64px] text-white font-medium"
                onClick={handleButton}
              >
                {Loding ? (
                  <BeatLoader
                    loading={Loding}
                    color="#FFFFFF"
                    size={22}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  'Sign up'
                )}
              </button>
              <p className="font-nunito pt-5 cursor-pointer text-[15px]">
                Already have an account?
                <Link to="/login">
                  <span className="text-red-600 font-semibold"> Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationLeft;
