const Banner = () => {
  return (
    <section className="banner">
      <img src="/welcome.png" alt="" className="welcome" id="banner" />
      <img src="/logo.png" alt="" className="logo" />
      <div className="banner-box">
        <div className="banner-text">
          <h2>The World has chastised them from public view</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="banner-blur"></div>
      </div>
    </section>
  );
};

export default Banner;
