import "./index.css";
import Angelz from "./img/angelz.png";

function App() {
  return (
    <div data-theme="luxury">
      <div className="navbar bg-base-100">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/logo.png" />
          </div>
        </label>
        <a className="btn btn-ghost normal-case text-xl">Find An Artist</a>
      </div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(" + Angelz + ")",
          backgroundSize: "zoom",
          backgroundPosition: "center",
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Find An Artist
            </h1>
            <p className="mb-5">Find the artist you’ve been looking for</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                window.location.href = "#download";
              }}
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <section id="about">
        <div className="hero py-32 lg:min-h-screen bg-base-300">
          <div className=" px-10 hero-content flex-col lg:flex-row lg:gap-24">
            <div>
              <h1 className=" text-5xl font-bold">
                About <span className="text-primary">Us</span>
              </h1>
              <p className=" py-10 text-justify ">
                From the standpoint of artists, the difficulty comes in
                showcasing your work to a wide enough audience. With the
                potential customers, there is an inability to easily search and
                view the kind of art they would potentially be interested in.
                Our planned application fills both these gaps.
              </p>
            </div>
            <img
              src="https://placeimg.com/260/400/nature"
              className="max-w-sm rounded-lg shadow-2xl hidden-image"
            />
          </div>
        </div>
      </section>
      <section id="why">
        <div className="hero py-32 lg:min-h-screen bg-base-200">
          <div className="px-10 hero-content flex-col lg:flex-row-reverse lg:gap-24">
            <div>
              <h1 className=" text-5xl font-bold">
                Why This <span className="text-primary">Exists</span>
              </h1>
              <p className=" py-10 text-justify ">
                As we search the internet for a platform in Bahrain, we realized
                that there is a gap in Bahrain market that connects the artist
                with art consumers so our platform will try to fulfill this gap.
                From the standpoint of artists, the difficulty comes in
                showcasing your work to a wide enough audience.
              </p>
            </div>
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl hidden-image"
            />
          </div>
        </div>
      </section>
      <section id="download">
        <div className="hero py-32 lg:min-h-screen bg-base-100">
          <div className="px-10 hero-content flex-col lg:flex-row lg:gap-24">
            <div>
              <h1 className=" text-5xl font-bold">
                Download <span className="text-primary">Now</span>
              </h1>
              <p className=" py-10 text-justify ">
                Download our app and start using it right away. It's free and
                always will be. We actively work on maintaining and improving
                the app.
              </p>
              <div>
                <button className="btn btn-primary mr-2">Play Store</button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    window.location.href =
                      "https://play.google.com/store/apps/details?id=store.findanartist.findanartist";
                  }}
                >
                  App Store
                </button>
              </div>
            </div>
            <img
              src="https://placeimg.com/260/400/tech"
              className="max-w-sm rounded-lg shadow-2xl hidden-image"
            />
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <p>Copyright © 2022 - FAA Team, Affiliate of ASU</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
