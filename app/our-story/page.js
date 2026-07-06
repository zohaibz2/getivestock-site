import Header from "../components/Header";
import StoryTimeline from "../components/StoryTimeline";

export const metadata = {
  title: "Our Story — Getlivestock",
  description:
    "Seven chapters, from 4,000 rupees of Eidi to a farm of his own — the journey behind Getlivestock.",
};

export default function OurStoryPage() {
  return (
    <div className="page">
      <Header />

      <main className="story-page">
        <div className="story-head">
          <p className="eyebrow">Our Story</p>
          <h1 className="story-title">The Road So Far</h1>
          <p className="story-intro">
            Seven chapters, seven fresh starts. Tap any chapter to read the
            full story.
          </p>
        </div>

        <StoryTimeline />
      </main>
    </div>
  );
}
