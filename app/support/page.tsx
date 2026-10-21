import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with CleanBreak, report a problem, or suggest something.",
};

export default function Support() {
  return (
    <div className="container prose">
      <h1>Support</h1>
      <p className="updated">We read everything. Quitting is hard; getting help shouldn’t be.</p>

      <h2>Something broken, confusing, or missing?</h2>
      <ul>
        <li>
          <strong>From TestFlight (beta testers):</strong> take a screenshot in
          the app and tap “Share Beta Feedback”, or open TestFlight and use
          “Send Beta Feedback”. It reaches us with the details attached.
        </li>
        <li>
          <strong>From anywhere:</strong>{" "}
          <a href="https://github.com/fessy1der/cleanbreak-site/issues">
            open an issue
          </a>{" "}
          — a sentence or two is plenty.
        </li>
      </ul>

      <h2>Account &amp; data</h2>
      <p>
        You can delete your account and all synced data from inside the app:
        <em> Profile → Settings → Delete Account</em>. Deletion is immediate
        and confirmed by email. Details in the{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>A note on what the coach is</h2>
      <p>
        The in-app coach is an AI companion for encouragement and practical
        quitting help. It is not a medical service and cannot help in an
        emergency — if you are in crisis, contact your local emergency services
        or a crisis line right away.
      </p>
    </div>
  );
}
