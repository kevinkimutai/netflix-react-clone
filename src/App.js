import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { userActions } from "./store/user";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const { email, uid } = userAuth;
        const userSignIn = { email, uid };
        console.log(userSignIn);

        dispatch(userActions.login({ userSignIn }));
      } else {
        dispatch(userActions.logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const user = useSelector((state) => state.user.user.email);
  console.log(user);

  return (
    <>
      {!user ? (
        <LoginPage />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
