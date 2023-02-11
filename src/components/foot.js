import "./components.css";
function Foot() {
  return (
    <div className="footer flex flex-row">
      <div className="footer-left flex flex-column">
        <p>Prompt Generator</p>
        <p>Dweep Daily</p>
        <p>All Contributors</p>
        <p>Your data on Dweep.io</p>
        <p>Contribute to Dweep</p>
      </div>
      <div className="footer-right">
        <p> Dweep.io</p>
        <p>Made with love in India</p>
        <div className="icons flex flex-row">
          <img
            src={process.env.PUBLIC_URL + "assets/LinkedinLogo.png"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "assets/InstagramLogo.png"}
            alt=""
          />
        </div>

        <br />
        <p>hello@dweep.io</p>
      </div>
    </div>
  );
}
export default Foot;
