export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Quit smoking, kindly.</h1>
          <p className="lede">
            CleanBreak is a calm iOS companion for quitting smoking or vaping:
            a live streak over a dawn landscape, honest numbers for the money
            and the days you keep, a coach that answers when a craving hits,
            and a community that has been where you are.
          </p>
          <a
            className="cta"
            href="https://testflight.apple.com"
            rel="noopener noreferrer"
          >
            Now in beta on TestFlight
          </a>
          <p className="sub">Coming soon to the App Store · iPhone</p>
        </div>
        <div className="treeband" aria-hidden="true" />
      </section>

      <section className="container">
        <div className="features">
          <div className="feature">
            <h3>The streak, kept honestly</h3>
            <p>
              Days, money saved, cigarettes not smoked — counted one way,
              everywhere, including widgets on your Home and Lock Screen.
            </p>
          </div>
          <div className="feature">
            <h3>Help when a craving hits</h3>
            <p>
              One tap from the widget to breathing, the coach, and a place to
              log it. Cravings crest and pass; CleanBreak waits with you.
            </p>
          </div>
          <div className="feature">
            <h3>A coach that answers</h3>
            <p>
              A supportive AI coach that knows how far along you are, keeps
              its answers short and kind, and never shames a slip.
            </p>
          </div>
          <div className="feature">
            <h3>Milestones that keep coming</h3>
            <p>
              From the first day to fifteen years — the medically meaningful
              ones, celebrated with confetti you can share.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
