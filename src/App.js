import "./App.css";
import GoogleLogin from "react-google-login";

const responseGoogle = async res => {
  alert("You should not see this without clicking a button");
};

function App() {
  return (
    <GoogleLogin
      disabled={false}
      clientId="DOES_NOT_MATTER"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      autoLoad={false}
      type="button"
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;
