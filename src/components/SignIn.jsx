// css
import "../style/Signin.scss";

export default function SignIn() {
  return (
    <section className="sign__in">
      <div className="heading">
        <h1>Sign in or create an account</h1>
      </div>
      <div className="box1">
        <p>* indicates required field</p>
        <form>
          <input type="text" placeholder="* Username or email address" />
          <input type="text" placeholder="* Password" />
        </form>
        <div className="checked">
          <input type="checkbox" />
          <p>
            Keep me signed in.
            <span
              style={{
                color: "#005638",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Details
            </span>
          </p>
        </div>
        <div className="option">
          <p>Forgot your username?</p>
          <p>Forgot your password?</p>
        </div>

        <div className="button1">
          <button>Sign in</button>
        </div>
      </div>

      <div className="messageBox">
        <h4>JOIN STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>
        <button>Join now</button>
      </div>
    </section>
  );
}
