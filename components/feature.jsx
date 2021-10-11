import { allNipples } from "../data/nippleData.js";
import Image from "next/image";
const Feature = () => {
  return (
    <section className="feature">
      <div className="mint-box">
        <img src="/mint-bg.png" className="mint-bg" alt="" />
        <div className="mint-text">
          <div className="mint-left">
            <h2>Mint</h2>
            <p className="mint-desc">
              Enter the amount of nipples you would like to buy ( 5max ):
            </p>
            <div className="mint-input-box">
              <div className="mint-input">
                <input type="text" />
                <button>MINT</button>
              </div>
              <p>
                Total: <span>12 Eth</span>
              </p>
            </div>
          </div>
          <div className="mint-right">
            <img src="/mint.png" alt="" />
          </div>
        </div>
      </div>
      <h2 className="heading">Featured</h2>
      <div className="feature-box">
        <img src="/feature-box.png" alt="" className="feature-bg-box" />
        <div className="feature-left">
          <img src="/feature.gif" alt="" />
        </div>
        <div className="feature-right">
          <h2>Pic</h2>
          <p className="sub-text">The Infinite Island is under attack!</p>
          <div className="line"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="nipple-box-wrapper">
        <div className="grid-wrapper">
          <div className="grid-container">
            {allNipples.map((element, index) => (
              <div
                className={
                  index === allNipples.length - 1
                    ? "nipple-box last-nipple-box"
                    : "nipple-box"
                }
                key={index}
              >
                <Image src={element} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
