"use client";

import { useEffect, useRef, useState } from "react";
import PhoneFrame from "@/components/PhoneFrame";

/// The daily loop told the way InvoiceRate tells its month: numbered steps
/// on the left, one phone pinned on the right, and the screenshot follows
/// whichever step is in front of the reader. On narrow screens the phone
/// steps inline instead of sticking.
const STEPS = [
  {
    n: "01",
    title: "The streak, kept honestly",
    blurb:
      "Days, hours, money saved, cigarettes not smoked — one number system, everywhere, with your next milestone always in sight.",
    src: "/screens/home.png",
    alt: "Home screen with streak, health recovery and general progress",
  },
  {
    n: "02",
    title: "Craving? One tap.",
    blurb:
      "From the widget or Home straight to breathing, logging, and coping tools. Cravings crest and pass — CleanBreak waits with you.",
    src: "/screens/cravings.png",
    alt: "The Cravings screen: mood at the time of craving and craving analytics",
  },
  {
    n: "03",
    title: "A coach that answers",
    blurb:
      "A supportive AI coach that knows how far along you are, keeps its answers short and kind, and never shames a slip.",
    src: "/screens/chat.png",
    alt: "The AI quit coach chat answering a mindfulness request",
  },
];

export default function DailyLoop() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // The active step is the last one whose top has crossed a line at 45%
    // of the viewport — unlike an IntersectionObserver band, a short step
    // near the end of the section can never fall between the cracks.
    const onScroll = () => {
      const line = window.innerHeight * 0.45;
      let idx = 0;
      stepRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < line) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="loopGrid">
      <ol className="loopSteps">
        {STEPS.map((step, i) => (
          <li
            key={step.n}
            data-step={i}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className={`loopStep${active === i ? " active" : ""}`}
          >
            <span className="n">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.blurb}</p>
            <div className="loopStepShot">
              <PhoneFrame src={step.src} alt={step.alt} />
            </div>
          </li>
        ))}
      </ol>
      <div className="loopPhoneCol" aria-hidden="true">
        <div className="loopPhoneStack">
          {STEPS.map((step, i) => (
            <div key={step.n} className="loopShot" data-hidden={active !== i}>
              <PhoneFrame src={step.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
