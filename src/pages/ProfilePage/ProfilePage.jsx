import React from "react";
import { useDispatch } from "react-redux";

import { userActions } from "../../store/user";

import { Navbar } from "../../components/index";
import avatarImg from "../../assets/images/avatar.png.png";

import SubscriptionPlan from "../../components/SubscriptionPlan/SubscriptionPlan";

import "./ProfilePage.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="profile section__padding">
        <div className="profile__container">
          <h1>Edit profile</h1>
          <div className="profile__line" />
          <div className="profile__contents">
            <div className="profile__contents-image">
              <img src={avatarImg} alt="avatar" />
            </div>
            <div className="profile__contents-details">
              <div className="profile__contents-details__email">
                <p>email</p>
              </div>
              <div className="profile__contents-details__plans">
                <h2>Plans:Current plan(Premium)</h2>
                <div className="profile__line" />
                <p className="profile__contents-details__plans__date">
                  Renewal Date:06-09-2022
                </p>
                <SubscriptionPlan
                  plan="Netflix Standard"
                  res="1080P"
                  btnText="Subscribe"
                  btnColor="red"
                />

                <SubscriptionPlan
                  plan="Netflix Standard"
                  res="1080P"
                  btnText="Subscribe"
                  btnColor="red"
                />

                <SubscriptionPlan
                  plan="Netflix Standard"
                  res="1080P"
                  btnText="Current Package"
                  btnColor="gray"
                />
              </div>
              <button
                className="profile__sign-out-btn"
                onClick={() => {
                  dispatch(userActions.logout());
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
