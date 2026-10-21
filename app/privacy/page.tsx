import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What CleanBreak collects, where it goes, and how to delete it.",
};

export default function Privacy() {
  return (
    <div className="container prose">
      <h1>Privacy Policy</h1>
      <p className="updated">Effective 21 October 2026</p>

      <p>
        CleanBreak is an iOS app that helps people quit smoking or vaping.
        This policy describes what the app collects, where it goes, and how to
        delete it — written to match what the app actually does, not a
        template. We don’t sell personal data and the app shows no ads.
      </p>

      <h2>Your account</h2>
      <p>
        Signing in is handled by <strong>Clerk</strong>, our authentication
        provider. Depending on how you sign up, Clerk processes your email
        address, your name, and — for Sign in with Apple or Google — the
        identifier those services share. We use this only to operate your
        account.
      </p>

      <h2>Your quit data</h2>
      <p>
        Your quit profile — quit dates, what and how much you used to smoke or
        vape, craving logs, mood check-ins, and personal notes — is stored on
        your device and synced to our backend, hosted by{" "}
        <strong>Convex</strong> in the European Union, so it follows you
        across devices. It is keyed to your account and visible to no other
        user.
      </p>

      <h2>The coach (AI chat)</h2>
      <p>
        When you message the in-app coach, your message, the recent
        conversation, and minimal context (how many days you’ve been
        smoke-free and whether your quit is cigarettes or vaping) are sent to{" "}
        <strong>Anthropic</strong>, the AI provider that generates the reply.
        Anthropic’s API does not use this content to train its models. We
        store a daily count of how many replies you’ve received (to enforce a
        fair-use limit), not the conversations themselves.
      </p>

      <h2>Community</h2>
      <p>
        Posts, comments, and likes in the Quit Crew are published under a
        generated pseudonym (like “QuietHeron47”), never under your name or
        email. Your account identity never leaves the server; it is kept only
        so you can delete your own posts and so moderation reports can be
        handled. Reported content is reviewed by a human.
      </p>

      <h2>Analytics</h2>
      <p>
        Only if you opt in (Settings → Share Usage Data), the app sends
        anonymous feature-usage events to <strong>PostHog</strong> to help us
        see what’s working. No advertising identifiers, no cross-app
        tracking, and the switch is off by default.
      </p>

      <h2>Notifications</h2>
      <p>
        Reminders (a morning line, an evening check-in, milestones) are
        scheduled on your device. If you enable notifications, a push token is
        registered so the app can tell you when someone replies to your
        community post. You can turn any of this off in Settings or iOS
        Settings at any time.
      </p>

      <h2>Email</h2>
      <p>
        We send transactional email only — for example, a confirmation when
        your account is deleted — via <strong>Resend</strong>. No marketing
        email.
      </p>

      <h2>Face ID</h2>
      <p>
        If you turn on the app lock, Face ID / Touch ID runs entirely on your
        device through Apple’s LocalAuthentication. Biometric data never
        reaches us.
      </p>

      <h2>Deleting your data</h2>
      <p>
        <em>Profile → Settings → Delete Account</em> erases your server-side
        data — profile, logs, community identity — immediately, and confirms
        by email. Your community posts are removed from every feed.
      </p>

      <h2>Children</h2>
      <p>CleanBreak is not directed at children under 13.</p>

      <h2>Changes &amp; contact</h2>
      <p>
        If this policy changes materially, the effective date above changes
        with it. Questions: see <a href="/support">Support</a>.
      </p>
    </div>
  );
}
