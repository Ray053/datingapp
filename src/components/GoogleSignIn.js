import React from "react";


class GoogleSignIn extends React.Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      this.auth2 = window.gapi.auth2.init({
        client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com",
        scope: "profile email",
      });

      this.auth2.attachClickHandler(
        this.refs.signInButton,
        {},
        (googleUser) => {
          console.log(
            "Logged in as: " + googleUser.getBasicProfile().getName()
          );
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  render() {
    return (
      <div>
        <button ref="signInButton" style={{width:"400px",height:"48px", padding:"8px", borderRadius:"8px"}}>以Google註冊</button>
      </div>
    );
  }
}

export default GoogleSignIn;
