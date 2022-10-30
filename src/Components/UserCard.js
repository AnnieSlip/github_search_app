import React from "react";

const UserCard = ({ userInfo }) => {
  const {
    login,
    avatar_url,
    public_repos,
    followers,
    following,
    created_at,
    bio,
    location,
    twitter_username,
    url,
  } = userInfo;

  //get day,month, year from ISOS string
  const date = new Date(created_at);
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  return (
    <article className="cards_container user_card">
      <img
        src={avatar_url}
        alt="github user avatar"
        className="profile_avatar"
      />

      {/* UserName and Bio */}
      <div className="user_info_container">
        <div className="first_control">
          <div>
            <h1>{login}</h1>
            <a href="url" id="login">
              @{login}
            </a>
          </div>
          <p className="date">
            Joined at {day} {month} {year}
          </p>
        </div>
        <p>{bio ? bio : "This profile has no bio"}</p>

        {/* Followers Details Section */}
        <section className="followers_info_container">
          <div>
            <h4>Repos</h4>
            <p>{public_repos}</p>
          </div>
          <div>
            <h4>Followers</h4>
            <p>{followers}</p>
          </div>
          <div>
            <h4>Following</h4>
            <p>{following}</p>
          </div>
        </section>

        {/* User Contact Details Section */}
        <section className="user_contact_info">
          <div>
            <div className="user_contact_info_control first">
              <img src="../assets/icon-location.svg" />
              <p>{location ? location : "Not Available"}</p>
            </div>

            <div className="user_contact_info_control">
              <img src="../assets/icon-website.svg" />
              <a href="url">https://github.blog</a>
            </div>
          </div>
          <div>
            <div className="user_contact_info_control first">
              <img src="../assets/icon-twitter.svg" />
              <p>{twitter_username ? twitter_username : "Not Available"}</p>
            </div>

            <div className="user_contact_info_control">
              <img src="../assets/icon-company.svg" />
              <a href={url}>@github</a>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default UserCard;
