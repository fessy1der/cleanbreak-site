import Image from "next/image";
import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import FeatureCard from "@/components/FeatureCard";
import DailyLoop from "@/components/DailyLoop";

const TESTFLIGHT_URL = "https://testflight.apple.com";

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hero darkSection">
        <div className="container">
          <div className="heroInner">
            <p className="eyebrow">A calm companion for quitting smoking or vaping</p>
            <h1 className="display">
              Quit smoking, kindly.
              <br />
              <span className="dim">One day at a time.</span>
            </h1>
            <p className="lede">
              A live streak over a dawn landscape, honest numbers for the days
              and money you keep, and help that answers when a craving hits.
            </p>
            <div className="heroCtas">
              <a className="ctaPill" href={TESTFLIGHT_URL} rel="noopener noreferrer">
                Join the beta on TestFlight&nbsp;&nbsp;↗
              </a>
              <a className="heroSecondary" href="#features">
                See how it works
              </a>
            </div>
            <p className="reassure">
              Free during beta · iPhone · A slip never erases what you earned.
            </p>
          </div>

          <div className="journey" aria-hidden="true">
            <p className="journeyCaption">From the first hour to the first year</p>
            <div className="journeySteps">
              <span>The streak</span>
              <span>Cravings</span>
              <span>Health recovery</span>
            </div>
            <div className="journeyLine" />
            <div className="journeyDone">
              <span className="journeyCheck">✓</span>
              <span>
                <small>One honest count, kept everywhere</small>
                <strong>Ready for the minutes that get hard</strong>
              </span>
            </div>
          </div>

          <div className="heroPhone">
            <PhoneFrame
              src="/screens/home.png"
              alt="CleanBreak's home screen: a stopwatch over a dawn landscape counting 1,071 days smoke-free, with health recovery and savings below"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── The daily loop ─────────────────────────────── */}
      <section className="sectionPad afterHeroPhone" id="features">
        <div className="container">
          <p className="eyebrow">The daily loop</p>
          <h2 className="sectionTitle">From a craving to a day kept.</h2>
          <p className="lede">
            One screen that tells the truth, one tap when it gets hard, and a
            coach that answers — the three things a quit actually runs on.
          </p>
          <DailyLoop />
        </div>
      </section>

      {/* ── Everything earns its place ─────────────────── */}
      <section className="darkSection sectionPad">
        <div className="container">
          <p className="eyebrow">See the app at work</p>
          <h2 className="sectionTitle">Everything earns its place.</h2>
          <p className="lede">
            No dead buttons, no vanity screens — every control does the real
            thing it claims, from your lungs to your lock screen.
          </p>
          <div className="gridCards">
            <FeatureCard
              n="01"
              src="/screens/health.png"
              alt="Health Recovery screen with three full recovery rings and a body renewal timeline"
              title="Your body, recovering"
              blurb="Rings and timelines drawn from published health figures — what's healing now, and what comes back next."
            />
            <FeatureCard
              n="02"
              src="/screens/medals.png"
              alt="Achievements with earned and locked medals"
              title="Milestones that keep coming"
              blurb="From day one to fifteen years — the medically meaningful ones. Medals are earned, never given."
            />
            <FeatureCard
              n="03"
              src="/screens/celebration.png"
              alt="A celebration screen with falling confetti and a gold 7 days smoke-free medal"
              title="Celebrate, then share it"
              blurb="Confetti falls for every milestone — and shares to your Instagram story as a little film of the win."
            />
            <FeatureCard
              n="04"
              src="/screens/widget.png"
              alt="Home screen widget showing 1,070 days smoke-free over a dawn landscape"
              title="Widgets with the dawn in them"
              blurb="Your streak on the Home and Lock Screen, wearing the app's sunrise. Tap it mid-craving and help opens first."
            />
            <FeatureCard
              n="05"
              src="/screens/community.png"
              alt="The Quit Crew community with forums for the first week, relapses, and success stories"
              title="People who get it"
              blurb="The Quit Crew — pseudonymous, moderated, and kind. First week, slips, wins: there's a room for each."
            />
            <FeatureCard
              n="06"
              src="/screens/progress.png"
              alt="Progress screen with weekly progress and craving trends"
              title="Progress you can feel"
              blurb="Craving trends, mood check-ins, weekly targets, and a PDF report when you want it on paper."
            />
          </div>
        </div>
      </section>

      {/* ── Privacy ────────────────────────────────────── */}
      <section className="sectionPad">
        <div className="container">
          <p className="eyebrow">Your quit, your data</p>
          <h2 className="sectionTitle">Private by default.</h2>
          <p className="lede">
            Quitting is personal. The app treats what it knows about you the
            way a good friend would — carefully, and only for your sake.
          </p>
          <div className="privacyCols">
            <div className="privacyCol">
              <h3>Your account</h3>
              <p>
                Your quit data lives in your account and nowhere else. Delete
                it in-app, any time, and it&apos;s gone — no email required.
              </p>
            </div>
            <div className="privacyCol">
              <h3>The coach</h3>
              <p>
                Coach replies are generated by AI. Your messages aren&apos;t
                used to train models, and conversations aren&apos;t stored on
                our servers — only a daily message count.
              </p>
            </div>
            <div className="privacyCol">
              <h3>Analytics</h3>
              <p>
                Usage analytics are opt-in, and the community is pseudonymous
                by design. Nothing about your quit is ever sold or shared.
              </p>
            </div>
          </div>
          <Link className="privacyLink" href="/privacy">
            Read the full privacy policy
          </Link>
        </div>
      </section>

      {/* ── Founder note ───────────────────────────────── */}
      <section className="sectionPad" style={{ paddingTop: 0 }}>
        <div className="container founder">
          <div className="founderArt">
            <Image
              src="/art/boy.png"
              alt=""
              width={354}
              height={369}
              sizes="(max-width: 700px) 60vw, 220px"
            />
          </div>
          <div className="founderNote">
            <p className="eyebrow">From the developer</p>
            <h2>Hi, I&apos;m Festus 👋</h2>
            <p>
              I built CleanBreak because quitting is mostly done alone, at odd
              hours, one craving at a time — and the app in your pocket at that
              moment should be calm, honest, and on your side.
            </p>
            <p>
              So the numbers never lie to you, a slip never erases what you
              earned, and the help is one tap away when it counts. I hope it
              carries you as far as you want to go.
            </p>
            <p className="signoff">Festus — CleanBreak developer</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="sectionPad" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Before you download</p>
          <h2 className="sectionTitle">Straight answers.</h2>
          <div className="faqList">
            <details>
              <summary>Is CleanBreak free?</summary>
              <p>
                Yes — CleanBreak is free while it&apos;s in beta on TestFlight.
                If pricing ever changes, it will be shown clearly in the App
                Store before anything applies.
              </p>
            </details>
            <details>
              <summary>Is the coach medical advice?</summary>
              <p>
                No. The coach is supportive conversation, not a doctor — it
                never gives medical advice, and if you&apos;re in crisis it
                will point you to local emergency services or a crisis line.
              </p>
            </details>
            <details>
              <summary>What does the AI coach see?</summary>
              <p>
                Your message, the recent conversation, how many days you&apos;ve
                been smoke-free, and what you&apos;re quitting. That&apos;s it —
                and none of it is used to train AI models.
              </p>
            </details>
            <details>
              <summary>What happens if I slip?</summary>
              <p>
                Nothing is erased. A slip is logged kindly, your history stays
                yours, and the streak restarts without shame — the app is built
                around the fact that most quits take more than one try.
              </p>
            </details>
            <details>
              <summary>Which devices does it run on?</summary>
              <p>
                iPhone — designed for one hand and one day at a time. Widgets
                put your streak on the Home and Lock Screen.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────── */}
      <section className="darkSection sectionPad finalCta">
        <div className="container">
          <p className="eyebrow">Start with today</p>
          <h2 className="sectionTitle">Ready for day one?</h2>
          <p className="lede">
            Or day three hundred — the climb counts from wherever you stand.
          </p>
          <a className="ctaPill" href={TESTFLIGHT_URL} rel="noopener noreferrer">
            Join the beta on TestFlight&nbsp;&nbsp;↗
          </a>
          <p className="reassure">Free during beta · iPhone</p>
        </div>
      </section>
    </>
  );
}
