import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import FeatureCard from "@/components/FeatureCard";

const TESTFLIGHT_URL = "https://testflight.apple.com";

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <h1>Quit smoking, kindly.</h1>
            <p className="lede">
              A calm iOS companion for quitting smoking or vaping — a live
              streak over a dawn landscape, honest numbers for the days and
              money you keep, and help that answers when a craving hits.
            </p>
            <a className="cta" href={TESTFLIGHT_URL} rel="noopener noreferrer">
               Join the beta on TestFlight
            </a>
            <p className="sub">Free during beta · iPhone</p>
          </div>
          <div className="heroShot">
            <PhoneFrame
              src="/screens/home.png"
              alt="CleanBreak's home screen: a stopwatch over a dawn landscape counting 1,070 days smoke-free, with health recovery and savings below"
              priority
            />
          </div>
        </div>
        <div className="treeband" aria-hidden="true" />
      </section>

      {/* ── The daily loop ─────────────────────────────── */}
      <section className="container featureBank" id="features">
        <h2>The daily loop, built kindly ✨</h2>
        <p className="bankLede">
          One screen that tells the truth, one tap when it gets hard, and a
          coach that answers — the three things a quit actually runs on.
        </p>
        <div className="cards three oneRow">
          <FeatureCard
            src="/screens/home.png"
            alt="Home screen with streak, health recovery and general progress"
            title="The streak, kept honestly"
            blurb="Days, hours, money saved, cigarettes not smoked — one number system, everywhere, with your next milestone always in sight."
          />
          <FeatureCard
            src="/screens/cravings.png"
            alt="The Cravings screen: mood at the time of craving and craving analytics"
            title="Craving? One tap."
            blurb="From the widget or Home straight to breathing, logging, and coping tools. Cravings crest and pass — CleanBreak waits with you."
          />
          <FeatureCard
            src="/screens/chat.png"
            alt="The AI quit coach chat answering a mindfulness request"
            title="A coach that answers"
            blurb="A supportive AI coach that knows how far along you are, keeps its answers short and kind, and never shames a slip."
          />
        </div>
      </section>

      {/* ── Everything else ────────────────────────────── */}
      <section className="bankTinted">
        <div className="container featureBank">
          <h2>Everything earns its place 🌱</h2>
          <p className="bankLede">
            No dead buttons, no vanity screens — every control does the real
            thing it claims, from your lungs to your lock screen.
          </p>
          <div className="cards three">
            <FeatureCard
              src="/screens/health.png"
              alt="Health Recovery screen with three full recovery rings and a body renewal timeline"
              title="Your body, recovering"
              blurb="Rings and timelines drawn from published health figures — what's healing now, and what comes back next."
            />
            <FeatureCard
              src="/screens/medals.png"
              alt="Achievements with earned and locked medals"
              title="Milestones that keep coming"
              blurb="From day one to fifteen years — the medically meaningful ones. Medals are earned, never given."
            />
            <FeatureCard
              src="/screens/celebration.png"
              alt="A celebration screen with falling confetti and a gold 7 days smoke-free medal"
              title="Celebrate, then share it"
              blurb="Confetti falls for every milestone — and shares to your Instagram story as a little film of the win."
            />
            <FeatureCard
              src="/screens/widget.png"
              alt="Home screen widget showing 1,070 days smoke-free over a dawn landscape"
              title="Widgets with the dawn in them"
              blurb="Your streak on the Home and Lock Screen, wearing the app's sunrise. Tap it mid-craving and help opens first."
            />
            <FeatureCard
              src="/screens/community.png"
              alt="The Quit Crew community with forums for the first week, relapses, and success stories"
              title="People who get it"
              blurb="The Quit Crew — pseudonymous, moderated, and kind. First week, slips, wins: there's a room for each."
            />
            <FeatureCard
              src="/screens/progress.png"
              alt="Progress screen with weekly progress and craving trends"
              title="Progress you can feel"
              blurb="Craving trends, mood check-ins, weekly targets, and a PDF report when you want it on paper."
            />
          </div>
        </div>
      </section>

      {/* ── Founder note ───────────────────────────────── */}
      <section className="container founder">
        <div className="founderArt">
          <Image
            src="/art/boy.png"
            alt=""
            width={354}
            height={369}
            sizes="(max-width: 720px) 60vw, 300px"
          />
        </div>
        <div className="founderNote">
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
          <p className="signoff">
            Festus — CleanBreak developer
          </p>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────── */}
      <section className="finalCta">
        <div className="container">
          <h2>Ready for day one?</h2>
          <p>Or day three hundred — the climb counts from wherever you stand.</p>
          <a className="cta ctaLight" href={TESTFLIGHT_URL} rel="noopener noreferrer">
             Join the beta on TestFlight
          </a>
        </div>
      </section>
    </>
  );
}
