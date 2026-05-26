import type { ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: {
    bg: '#faf9f5',
    text: '#141413',
    accent: '#d97757',
  },
  fonts: {
    display: '"Poppins", Arial, system-ui, -apple-system, sans-serif',
    body: '"Lora", Georgia, "Times New Roman", serif',
  },
  typeScale: {
    hero: 156,
    body: 36,
  },
  radius: 8,
};

const palette = {
  bg: design.palette.bg,
  text: design.palette.text,
  accent: design.palette.accent,
  ink: '#141413',
  cream: '#faf9f5',
  muted: '#5e5d59',
  dim: '#b0aea5',
  surface: '#e8e6dc',
  border: 'rgba(20, 20, 19, 0.1)',
  accentSoft: 'rgba(217, 119, 87, 0.12)',
  blue: '#6a9bcc',
  green: '#788c5d',
};

const pad = 140;

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative' as const,
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Poppins:wght@400;500;600;700&display=swap');
  @keyframes acw-fadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .acw-rise {
    animation: acw-fadeUp 0.45s cubic-bezier(0, 0, 0.2, 1) both;
  }
  .acw-rise-d1 { animation-delay: 0.06s; }
  .acw-rise-d2 { animation-delay: 0.12s; }
  .acw-rise-d3 { animation-delay: 0.18s; }
  .acw-rise-d4 { animation-delay: 0.24s; }
  .acw-rise-d5 { animation-delay: 0.3s; }
`;

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

export const transition: SlideTransition = {
  duration: 240,
  exit: {
    duration: 200,
    easing: EASE_IN,
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
  },
  enter: {
    duration: 240,
    delay: 40,
    easing: EASE_OUT,
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
  },
};

const StyleInjector = () => <style>{styles}</style>;

const Footer = ({ onDark = false }: { onDark?: boolean }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: pad,
        right: pad,
        bottom: 52,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--osd-font-display)',
        fontSize: 22,
        fontWeight: 500,
        color: onDark ? 'rgba(250, 249, 245, 0.45)' : palette.dim,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}
    >
      <span>AI Coding Workshop</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Eyebrow = ({ children, accent = false }: { children: string; accent?: boolean }) => (
  <div
    className="acw-rise"
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: accent ? 'var(--osd-accent)' : palette.dim,
      marginBottom: 24,
    }}
  >
    {children}
  </div>
);

const PageTitle = ({
  children,
  size = 88,
  className = 'acw-rise acw-rise-d1',
}: {
  children: ReactNode;
  size?: number;
  className?: string;
}) => (
  <h2
    className={className}
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 600,
      margin: 0,
      lineHeight: 1.08,
      letterSpacing: '-0.025em',
      maxWidth: 1500,
    }}
  >
    {children}
  </h2>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul
    style={{
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: 'var(--osd-size-body)',
      lineHeight: 1.62,
      color: palette.text,
    }}
  >
    {items.map((text, i) => (
      <li
        key={text}
        className={`acw-rise acw-rise-d${Math.min(i + 2, 5)}`}
        style={{
          display: 'flex',
          gap: 28,
          alignItems: 'baseline',
          marginBottom: i < items.length - 1 ? 32 : 0,
        }}
      >
        <span
          style={{
            flexShrink: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 28,
            fontWeight: 500,
            color: 'var(--osd-accent)',
            width: 32,
          }}
        >
          —
        </span>
        <span style={{ fontFamily: 'var(--osd-font-body)' }}>{text}</span>
      </li>
    ))}
  </ul>
);

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `0 ${pad}px`,
    }}
  >
    <StyleInjector />
    <Eyebrow accent>Hands-on · 2 hours</Eyebrow>
    <h1
      className="acw-rise acw-rise-d1"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 600,
        lineHeight: 1.02,
        margin: 0,
        maxWidth: 1550,
        letterSpacing: '-0.03em',
      }}
    >
      From Idea to Website
    </h1>
    <p
      className="acw-rise acw-rise-d2"
      style={{
        fontSize: 48,
        lineHeight: 1.45,
        color: palette.muted,
        margin: '44px 0 0',
        maxWidth: 1150,
        fontWeight: 400,
      }}
    >
      AI coding for beginners — build a real one-page site today.
    </p>
    <div
      className="acw-rise acw-rise-d3"
      style={{
        marginTop: 80,
        paddingTop: 40,
        borderTop: `1px solid ${palette.border}`,
        maxWidth: 880,
        fontSize: 30,
        color: palette.dim,
        lineHeight: 1.55,
        fontStyle: 'italic',
      }}
    >
      No prior coding experience required — laptop + curiosity.
    </div>
  </div>
);

const Agenda: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <Eyebrow>Agenda</Eyebrow>
    <PageTitle size={92} className="acw-rise acw-rise-d1">
      Today&apos;s flow
    </PageTitle>
    <div style={{ marginTop: 56 }} className="acw-rise acw-rise-d2">
      <BulletList
        items={[
          'Warm start — what you already use AI for',
          'AI is not magic — how models actually behave',
          'A practical workflow you can reuse every day',
          'Live demo + hands-on build (portfolio or business site)',
          'Close — your site ships before you leave',
        ]}
      />
    </div>
    <Footer />
  </div>
);

const WhoItsFor: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <Eyebrow accent>Warm start</Eyebrow>
    <PageTitle size={84}>
      Built for beginners who want results, not jargon.
    </PageTitle>
    <div style={{ marginTop: 48 }}>
      <BulletList
        items={[
          'Career shifters, students, freelancers, small business owners',
          'You leave with a working portfolio or landing page',
          'Show of hands: who uses AI weekly? Who has coded with AI?',
        ]}
      />
    </div>
    <Footer />
  </div>
);

const NotMagic: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <Eyebrow>Reality check</Eyebrow>
    <PageTitle size={92}>AI is not magic</PageTitle>
    <div style={{ marginTop: 48 }}>
      <BulletList
        items={[
          'Models predict likely text — powerful pattern matching, not mind-reading',
          'They can be confidently wrong or invent APIs that do not exist',
          'Your job: clear goals, good context, read outputs, test, iterate',
        ]}
      />
    </div>
    <div
      className="acw-rise acw-rise-d5"
      style={{
        position: 'absolute',
        right: pad,
        bottom: 108,
        width: 440,
        padding: '36px 40px',
        background: palette.surface,
        fontSize: 30,
        lineHeight: 1.5,
        color: palette.muted,
        borderLeft: `3px solid var(--osd-accent)`,
      }}
    >
      Treat AI as a coding partner — not an autopilot.
    </div>
    <Footer />
  </div>
);

const Workflow: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <Eyebrow accent>Core skill</Eyebrow>
    <PageTitle size={84}>The workflow that actually works</PageTitle>
    <div style={{ marginTop: 48 }}>
      <BulletList
        items={[
          'State the goal — files, framework, constraints, error messages',
          'Ask for a plan before you ask for code',
          'Apply small changes, run the site, feed results back',
        ]}
      />
    </div>
    <Footer />
  </div>
);

const Prompting: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <Eyebrow>Prompting</Eyebrow>
    <PageTitle size={88}>Prompts worth memorizing</PageTitle>
    <div style={{ marginTop: 48 }}>
      <BulletList
        items={[
          '“Ask me questions before you write any code.”',
          '“Make the smallest possible change — explain tradeoffs.”',
          '“Here is the error — diagnose before fixing.”',
        ]}
      />
    </div>
    <Footer />
  </div>
);

const TrackCard = ({
  label,
  title,
  description,
  accentColor,
  delayClass,
}: {
  label: string;
  title: string;
  description: string;
  accentColor: string;
  delayClass: string;
}) => (
  <div
    className={`acw-rise ${delayClass}`}
    style={{
      padding: '52px 56px',
      background: palette.surface,
      minHeight: 320,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: accentColor,
        marginBottom: 24,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 48,
        fontWeight: 600,
        lineHeight: 1.12,
        letterSpacing: '-0.02em',
        marginBottom: 20,
      }}
    >
      {title}
    </div>
    <p style={{ fontSize: 32, lineHeight: 1.55, color: palette.muted, margin: 0 }}>
      {description}
    </p>
  </div>
);

const PickTrack: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <Eyebrow accent>Hands-on</Eyebrow>
    <PageTitle size={88}>Pick your project</PageTitle>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 56 }}>
      <TrackCard
        label="Track A"
        title="Personal portfolio"
        description="Showcase you — photo, bio, projects, contact."
        accentColor="var(--osd-accent)"
        delayClass="acw-rise-d2"
      />
      <TrackCard
        label="Track B"
        title="Business landing page"
        description="One page that explains what you offer and how to reach you."
        accentColor={palette.blue}
        delayClass="acw-rise-d3"
      />
    </div>
    <Footer />
  </div>
);

const Closing: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `0 ${pad}px`,
      background: palette.ink,
      color: palette.cream,
    }}
  >
    <StyleInjector />
    <Eyebrow accent>Before you go</Eyebrow>
    <h2
      className="acw-rise acw-rise-d1"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 104,
        fontWeight: 600,
        margin: 0,
        lineHeight: 1.04,
        maxWidth: 1500,
        letterSpacing: '-0.03em',
        color: palette.cream,
      }}
    >
      Ship something real. Keep iterating.
    </h2>
    <p
      className="acw-rise acw-rise-d2"
      style={{
        fontSize: 42,
        lineHeight: 1.5,
        color: 'rgba(250, 249, 245, 0.72)',
        margin: '40px 0 0',
        maxWidth: 1100,
      }}
    >
      You will have a live one-page site and a workflow to improve it with AI after today.
    </p>
    <div
      className="acw-rise acw-rise-d3"
      style={{
        position: 'absolute',
        left: pad,
        bottom: 108,
        paddingTop: 36,
        borderTop: '1px solid rgba(250, 249, 245, 0.15)',
        minWidth: 560,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: palette.cream,
          marginBottom: 20,
        }}
      >
        Mchael Poncardas
      </div>
      <div
        style={{
          fontSize: 26,
          lineHeight: 1.75,
          color: 'rgba(250, 249, 245, 0.62)',
        }}
      >
        <div>Email: m@poncardas.com</div>
        <div>Website: www.poncardas.com</div>
        <div>LinkedIn: linkedin.com/in/poncardas</div>
      </div>
    </div>
    <Footer onDark />
  </div>
);

export const meta: SlideMeta = {
  title: 'From Idea to Website',
  createdAt: '2026-05-26T18:26:53.426Z',
};

export default [
  Cover,
  Agenda,
  WhoItsFor,
  NotMagic,
  Workflow,
  Prompting,
  PickTrack,
  Closing,
] satisfies Page[];
