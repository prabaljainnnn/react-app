import "./components.css";

function Head() {
  return (
    <>
      <div className="header flex-row flex ">
        <div className="left-conatiner">
          <div className="left-content flex flex-column">
            <p className="left-content1">
              An inspiring design delivered to your inbox every morning
            </p>

            <p className="left-content2">
              Our team scouts the internet for the best designs, illustrations
              and art and delivers a truly inspiring one every day to your inbox
            </p>

            <p className="left-content3">Show me how it looks</p>

            <div className="input-and-button flex flex-row">
              <input
                className="inp"
                placeholder="Your e-mail address"
                type="text"
              />
              <button className="btn">Register Now</button>
            </div>
            <div className="disclaimer">
              <p>Free - No Spam - No Data Sharing</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img
            className="flex"
            src={process.env.PUBLIC_URL + "assets/man.svg"}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
export default Head;

// <div className="left-conatiner flex-column">

// </div>
// <div className="right-conatiner">

// </div>
