import React, { useContext } from "react";

import { images } from "../../constants";

import UserDataProvider from "../../Context/UserDataContext";

import "./ProfileDisplay.scss";

function ProfileDisplay() {
  const { userData, octocatDataLoaded } = useContext(UserDataProvider);

  if (octocatDataLoaded)
    return (
      <>
        <main className="app__profileDisplay-container">
          {/* HEADER SECTION */}
          <section className="app__profileDisplay-header">
            <img src={userData.avatar_url} alt="The users chosen avatar." />
            {userData.name ? (
              <h2 className="profile-name">{userData.name}</h2>
            ) : (
              <h2>{userData.login}</h2>
            )}
            <p className="profile-Username">@{userData.login}</p>
            <p className="profile-created">Joined {userData.created_at} </p>
            {octocatDataLoaded.bio ? (
              <p className="profile-bio">{userData.bio}</p>
            ) : (
              <p>This profile has no bio.</p>
            )}
          </section>
          {/* GITHUB REPO INFO SECTION */}
          <section className="app__profileDisplay-stats">
            <div className="app__profileDisplay-stats-card">
              <h3>Repos</h3>
              <p>{userData.public_repos}</p>
            </div>
            <div className="app__profileDisplay-stats-card">
              <h3>Followers</h3>
              <p>{userData.followers}</p>
            </div>
            <div className="app__profileDisplay-stats-card">
              <h3>Following</h3>
              <p>{userData.following}</p>
            </div>
          </section>
          USER INFO SECTION
          <section className="app__profileDisplay-location">
            <div className="app__profileDisplay-location-card">
              <img src={images.locationIcon} alt="Location of user" />
              {userData.location ? (
                <p>{userData.location}</p>
              ) : (
                <p>Not Available</p>
              )}
            </div>
            <div className="app__profileDisplay-location-card">
              <img src={images.twitterIcon} alt="user's Twitter username" />
              {userData.twitter_username ? (
                <p>{userData.twitter_username}</p>
              ) : (
                <p>Not Available</p>
              )}
            </div>
            <div className="app__profileDisplay-location-card">
              <img src={images.websiteIcon} alt="user's blog page URL" />
              {userData.blog ? (
                <a href={userData.blog}>{userData.blog}</a>
              ) : (
                <p>Not Available</p>
              )}
            </div>
            <div className="app__profileDisplay-location-card">
              <img src={images.companyIcon} alt="Where the User is employed" />
              {userData.company ? (
                <p>{userData.company}</p>
              ) : (
                <p>Not Available</p>
              )}
            </div>
          </section>
        </main>
      </>
    );
  else
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
}

export default ProfileDisplay;
