import { Phone, Mail, Calendar, Headphones, Share2, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CALENDLY = 'https://calendly.com/l-mcfall';
const EMAIL = 'team@mcfallprod.com';
const CONTACT_MAILTO = `mailto:${EMAIL}`;
const REPORT_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Buried Gold Report for my show')}&body=${encodeURIComponent("My show's name: ")}`;

const img = (file: string) => encodeURI(`${import.meta.env.BASE_URL}images/${file}`);

// The School of Greatness back catalog project, 2026
const sogLedger = [
  { label: 'Titles rewritten to a written style guide', figure: '1,950' },
  { label: 'Episode numbers corrected across two feeds', figure: '1,286' },
  { label: 'Episodes transcribed, speakers labelled', figure: '1,292' },
  { label: 'Hours of conversation made searchable', figure: '1,105' },
  { label: "Transcript accuracy, checked against the team's own", figure: '97%+' },
];

const drifts = [
  {
    title: 'Titles and numbers stop making sense',
    text: "A rebrand here, a new producer there. Titles end up in four formats, some are only a guest's name, and episode numbers skip, repeat or vanish.",
    fix: 'We fix it with retitling.',
  },
  {
    title: 'Show notes nobody can find',
    text: 'Early episodes got a sentence or a copy-pasted paragraph. Search engines and podcast apps have nothing to go on, so those episodes stay invisible.',
    fix: 'We fix it with new show notes.',
  },
  {
    title: "Years of conversations you can't search",
    text: 'Hundreds of hours of interviews, and no way to find every time a guest talked about sleep, money or grief without listening to all of it.',
    fix: 'We fix it with transcripts.',
  },
];

const goldmine = [
  {
    name: 'Retitling',
    so: 'So people press play.',
    text: 'Every title rewritten in one consistent voice, so a listener scrolling your feed or a search result sees a reason to pick an old episode.',
  },
  {
    name: 'Show notes',
    so: 'So your episodes get found.',
    text: 'New notes for every episode, written so search engines and podcast apps can match them to what people are looking for.',
  },
  {
    name: 'Transcripts',
    so: 'So every conversation can be used again.',
    text: "Every episode transcribed, so your team can search, quote and reuse anything that's ever been said on the show.",
  },
];

const delivery = [
  {
    title: 'Days or weeks, not months.',
    text: 'Big catalogs stay messy because fixing one by hand takes a team months. We built our own automation on a show with nearly 2,000 episodes. It does the heavy lifting, people review the work, and the cleanup takes days or weeks, depending on how many episodes you have.',
  },
  {
    title: 'We publish it for you.',
    text: "The new copy doesn't arrive as a document for your team to paste in. We log in and update every episode ourselves: the title, description, show notes and transcript on your podcast host, and the matching page on your podcast website.",
  },
];

const bonuses = [
  { name: 'Three months of monthly tune-ups', text: 'A report each month, up to 15 older episodes retitled or re-noted and made live, and a transcript for every new episode. They start the day your catalog is delivered.' },
  { name: 'Your written style guide', text: "The rules for your titles and show notes, yours to keep, so your team's new episodes match the catalog." },
  { name: 'Your 60-day comparison', text: 'Half your episodes go live first. Sixty days later you see them next to the half we left alone, in your own downloads.' },
];

const liveOn = [
  { name: 'Your podcast host', text: 'The feed Apple, Spotify and every other app reads. Every title, description and transcript updated there, so the change shows up everywhere people listen.' },
  { name: 'Your podcast website', text: "Each episode's page on your site updated to match: the new title, the new show notes, and the transcript behind a “Click here to read transcript” link." },
  { name: 'Nothing lost', text: 'We save every original title and show note before we change anything, so any episode can be put back.' },
];

const split = {
  yours: ['Editing audio and video', 'Titles and show notes for new releases', 'Publishing on schedule'],
  ours: [
    'Fixing titles, numbers and notes nobody has touched in years',
    'Making every past conversation searchable',
    'Tracking which old episodes are coming back, and why',
  ],
};

const reportChecks = [
  { name: 'Numbering', text: 'missing, repeated and out-of-order episode numbers' },
  { name: 'Titles', text: "how many formats you've used, duplicates, titles that are only a name" },
  { name: 'Show notes', text: 'empty, thin or copy-paste descriptions' },
  { name: 'Transcripts', text: 'which episodes have one (usually none)' },
  { name: 'Size of the mine', text: 'total hours of content, and how much of it is years old' },
];

const founders = [
  {
    name: 'Lauren McFall',
    role: 'Co-Founder & Executive Producer',
    image: 'lauren.jpg',
    position: 'object-[50%_10%]',
    quote: 'I run every project like a production calendar: dates set up front, updates every week, and nothing that depends on you remembering to ask.',
  },
  {
    name: 'Scott McFall',
    role: 'Co-Founder & Director of Editing & AI Innovation',
    image: 'Scott headshot.jpg',
    position: 'object-[50%_30%]',
    quote: 'Most shows never fix their back catalog because doing it by hand costs months of salaries. I built the tools that make it affordable.',
  },
];

const promises = [
  'We build your style guide with you, so every title and show note sounds like your show.',
  'People review the work, not just software. The tools do the heavy lifting; we make the judgment calls.',
  'One small team, start to finish. The people on your call are the people doing the work.',
];

const testimonials = [
  {
    quote:
      'Lauren has an extraordinary ability to align creative, technical, and operational teams, ensuring clear communication and efficient workflows. Her leadership on our podcast helped it surpass 23 million downloads by streamlining production with automation and AI tools, cutting creation time significantly. With her organizational skill, technical expertise, and calm, solutions-oriented approach, Lauren has had a lasting impact on our growth and success.',
    name: 'JJ Virgin',
  },
  {
    quote:
      "Working with Scott will make you wish he were a full-time employee at your company. He is one of the most hardworking and dedicated contractors I've ever worked with. You'd be crazy to not bring him onto any project your team is tackling.",
    name: 'Adam L. (School of Greatness)',
  },
];

const shows = [
  { name: 'The School of Greatness', host: 'with Lewis Howes', image: 'School of Greatness.jpg', href: 'https://podcasts.apple.com/us/podcast/the-school-of-greatness/id596047499' },
  { name: 'The Daily Motivation', host: 'with Lewis Howes', image: 'tdm.jpg', href: 'https://podcasts.apple.com/us/podcast/the-daily-motivation/id1634106069' },
  { name: 'Well Beyond 40', host: 'with JJ Virgin', image: 'Well Beyond 40 Podcast.jpg', href: 'https://podcasts.apple.com/us/podcast/well-beyond-40/id911502027' },
  { name: 'The Big Shift', host: 'with Bill Baren', image: 'The Big Shift.jpg', href: 'https://podcasts.apple.com/us/podcast/the-big-shift-the-business-of-making-a-difference/id977754152' },
  { name: 'Bound By Art', host: 'with Missi Blue', image: 'Bound By Art.jpg', href: 'https://podcasts.apple.com/us/podcast/bound-by-art-a-tattoo-artists-survival-guide/id1777930586' },
  { name: 'The Bad Mom Podcast', host: 'with Vivian Glyck', image: 'Bad Mom Podcast.jpg', href: 'https://podcasts.apple.com/us/podcast/the-bad-mom-podcast-parenting-the-anxious-generation/id1840678865' },
  { name: 'The Dr. Robert Whitfield Show', host: 'with Dr. Robert Whitfield', image: 'robwhitfield.jpg', href: 'https://podcasts.apple.com/us/podcast/the-dr-robert-whitfield-show/id1678143554' },
  { name: 'Hanu Health', host: 'with Dr. Jay Wiles', image: 'Hanu_logo.jpg', href: 'https://www.youtube.com/channel/UCsTH_hVrWE84q__HKqDIQZg' },
  { name: 'AWOT Radio', host: '103.3 FM', image: 'AWOT_logo.jpg', href: 'https://podcasts.apple.com/us/podcast/a-waste-of-time-radio/id1362171849' },
];

const results = [
  { figure: '15.8M+', text: 'Podcast downloads produced since 2020' },
  { figure: '50%', text: 'Reduction in project creation time by introducing Asana best practices' },
  { figure: '27%', text: 'Increased watch time on YouTube in one month' },
  { figure: '60%', text: 'Expanded Facebook reach in one month, maximizing exposure for podcast-driven posts' },
];

const production: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Calendar, title: 'Launch & pre-production', text: 'We take care of guest outreach, scheduling, and interview prep, so you show up ready to shine.' },
  { icon: Headphones, title: 'Editing & post-production', text: 'Crystal-clear audio and polished video. Distractions removed, branded intros/outros added, captions and graphics included.' },
  { icon: Share2, title: 'Publishing & promotion', text: 'We upload and distribute across platforms (Apple, Spotify, etc.), plus create SEO show notes and custom social assets (2 reels + 1 graphic per episode).' },
  { icon: TrendingUp, title: 'Growth & monetization', text: 'From sponsorships and host-read ads to premium content and programmatic monetization, we help your podcast generate revenue while growing its reach with strategy ideation.' },
];

// Illustration only: bar heights for the picture at the top of the page.
const seeded = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const rand = seeded(11);
const oldBars = Array.from({ length: 66 }, () => {
  const found = rand() < 0.3;
  return { found, h: Math.round(found ? 34 + rand() * 40 : 7 + rand() * 13) };
});
const newBars = Array.from({ length: 40 }, (_, i) => Math.round(Math.min(100, 52 + i * 1.1 + rand() * 14)));

const wrap = 'max-w-6xl mx-auto px-5 sm:px-8';
const h2 = 'font-serif font-medium text-4xl sm:text-5xl leading-[1.08] tracking-tight [text-wrap:balance]';
const btn =
  'inline-flex items-center justify-center gap-2.5 rounded-[3px] px-6 py-4 text-base font-semibold tracking-wide text-center sm:whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4';
const diamond = "before:mt-[0.6em] before:h-2 before:w-2 before:flex-none before:rotate-45 before:content-['']";

function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={`font-sans font-bold tracking-wide ${onDark ? 'text-ivory' : 'text-navy'}`}>
      McFall <span className={onDark ? 'text-ivory' : 'text-paprika'}>Productions</span>
    </span>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-cocoa antialiased">
      {/* Top: what McFall Productions does, in one breath, with a door to each half */}
      <header className="pt-6">
        <div className={wrap}>
          <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[17px]">
          <Wordmark />
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <a href="#back-catalog" className="font-medium text-navy hover:underline hover:underline-offset-4">Back catalog</a>
            <a href="#production" className="font-medium text-navy hover:underline hover:underline-offset-4">Podcast production</a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal underline underline-offset-4 hover:text-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
              Talk to Lauren &amp; Scott
            </a>
          </div>
        </nav>

          <h1 className="mt-14 max-w-[17ch] font-serif text-[3.1rem] font-medium leading-[0.99] tracking-tight text-navy [text-wrap:balance] sm:mt-20 sm:text-[5rem] lg:text-[6.25rem]">
            We make every podcast episode{' '}
            <span className="underline decoration-paprika decoration-[0.06em] underline-offset-[0.12em]">earn.</span>
          </h1>
          <p className="mt-7 max-w-3xl font-serif text-2xl italic leading-snug text-navy sm:text-[2rem]">
            The one you publish next week, and the hundreds you've already made.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl">
            We're the team behind The School of Greatness with Lewis Howes. We produce podcasts end to end, and we turn their back catalogs into revenue.
          </p>
        </div>

        <div className={`${wrap} mt-12 sm:mt-14`}>
          <p className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm">
            <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 bg-[#bfa983]" />Old episodes</span>
            <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 bg-teal" />Old episodes found again</span>
            <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 bg-navy" />New episodes</span>
            <span className="sm:ml-auto">Illustration, not real data.</span>
          </p>
          {/* Each set of bars stands on its own block, side by side on wide screens and stacked on phones */}
          <div className="mt-4 grid md:grid-cols-[3fr_2fr]">
            <div className="flex flex-col">
              <div
                role="img"
                aria-label="Illustration: one bar per old episode. Most are short. Some have been found again and stand much taller."
                className="flex h-28 sm:h-52 lg:h-60 items-end gap-[2px] sm:gap-[3px] md:pr-[3px]"
              >
                {oldBars.map((b, i) => (
                  <i
                    key={i}
                    className={`min-w-0 flex-1 rounded-t-[1px] max-sm:[&:nth-child(3n)]:hidden ${b.found ? 'bar-grow bg-teal' : 'bg-[#bfa983]'}`}
                    style={{ height: `${b.h}%`, animationDelay: `${300 + i * 18}ms` }}
                  />
                ))}
              </div>
              <a href="#back-catalog" className="group block flex-1 bg-teal px-7 py-8 text-ivory hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal sm:px-10 sm:py-10">
            <h2 className="font-serif text-[2rem] font-medium leading-tight sm:text-[2.4rem]">Your old episodes, earning again</h2>
            <p className="mt-3 max-w-md leading-relaxed text-[#eadcc2]">
              Every title, show note and transcript in your back catalog fixed and made live for you, in days or weeks.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 font-semibold underline underline-offset-4 group-hover:decoration-2">
              See how we can transform your back catalog into a money-making machine
            </p>
          </a>
            </div>
            <div className="mt-10 flex flex-col md:mt-0">
              <div role="img" aria-label="Illustration: one bar per new episode, all tall." className="flex h-28 sm:h-52 lg:h-60 items-end gap-[2px] sm:gap-[3px]">
                {newBars.map((h, i) => (
                  <i key={i} className="min-w-0 flex-1 rounded-t-[1px] bg-navy max-sm:[&:nth-child(3n)]:hidden" style={{ height: `${h}%` }} />
                ))}
              </div>
              <a href="#production" className="group block flex-1 bg-navy px-7 py-8 text-ivory hover:bg-[#2c404c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy sm:px-10 sm:py-10">
            <h2 className="font-serif text-[2rem] font-medium leading-tight sm:text-[2.4rem]">Your new episodes, produced</h2>
            <p className="mt-3 max-w-md leading-relaxed text-oatmeal">Editing, publishing, promotion and growth, handled by one team.</p>
            <p className="mt-5 inline-flex items-center gap-2 font-semibold underline underline-offset-4 group-hover:decoration-2">
              See how we can transform your raw recordings into a world-class show
            </p>
          </a>
            </div>
          </div>
        </div>
      </header>

      {/* Back catalog: the pitch, with the School of Greatness project beside it */}
      <section id="back-catalog" className="scroll-mt-0 py-16 sm:py-24">
        <div className={`${wrap} grid items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16`}>
          <div>
            <h2 className="font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-navy [text-wrap:balance] sm:text-6xl">
              Your next untapped revenue stream is already recorded.
            </h2>
            <p className="mt-7 font-serif text-2xl italic text-navy sm:text-[1.7rem]">Hundreds of episodes. Already paid for. Ready to earn.</p>
            <p className="mt-5 max-w-[36rem] text-lg leading-relaxed sm:text-xl">
              Old episodes don't stop being valuable. They just get harder to find. We fix the titles, rewrite the show notes and transcribe every episode in your back catalog, so listeners find them again. Then we show you which ones are paying off.
            </p>
            <ul className="mt-6 grid gap-2 text-lg font-semibold text-navy">
              <li className={`flex gap-3 before:bg-teal ${diamond}`}>Done in days or weeks, not months</li>
              <li className={`flex gap-3 before:bg-teal ${diamond}`}>Made live for you, on your podcast host and your website</li>
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#report" className={`${btn} bg-teal text-ivory hover:bg-teal-dark focus-visible:outline-teal`}>
                Get your podcast's Buried Gold Report
              </a>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={`${btn} text-navy shadow-[inset_0_0_0_1.5px_currentColor] hover:bg-card focus-visible:outline-navy`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Talk to Lauren &amp; Scott
              </a>
            </div>
            <p className="mt-4 text-[15px]">The report is free. All we need is your show's name. No login or APIs required.</p>
          </div>

          <div className="bg-navy px-7 py-8 text-ivory sm:px-9 sm:py-10">
            <div className="grid grid-cols-[5.5rem_1fr] items-center gap-5">
              <img src={img('School of Greatness.jpg')} alt="The School of Greatness with Lewis Howes" className="aspect-square w-full rounded-sm object-cover" />
              <h3 className="font-serif text-[1.65rem] font-medium leading-tight">We did it for The School of Greatness first.</h3>
            </div>
            <p className="mt-5 leading-relaxed text-oatmeal">We produce the show with Lewis Howes. In 2026 we took on its whole 13-year back catalog.</p>
            <dl className="mt-5">
              {sogLedger.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-5 border-t border-ivory/25 py-3.5">
                  <dt className="text-[15px] leading-snug text-oatmeal">{r.label}</dt>
                  <dd className="font-serif text-[1.75rem] font-semibold leading-none tabular-nums">{r.figure}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Why old episodes disappear */}
      <section className="border-t border-rule bg-card py-16 sm:py-24">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20`}>
          <div>
            <h2 className={`${h2} text-navy`}>Your best old episodes shouldn't disappear just because they're old.</h2>
            <p className="mt-6 text-lg leading-relaxed">
              Nobody did anything wrong. There's always a new episode due, so the old ones never get a second look. On a long-running show, it happens in three ways.
            </p>
            <div className="mt-9 border-l-2 border-teal bg-ivory px-6 py-6">
              <h3 className="font-serif text-2xl font-medium text-navy">When an old guest is suddenly everywhere</h3>
              <p className="mt-2 leading-relaxed">
                A past guest lands a bestseller or a viral moment, and people go searching for them. You interviewed them years ago. But the title is only their name, the show notes are two lines and the links are dead, so your interview doesn&apos;t come up in search. Someone else&apos;s does.
              </p>
              <p className="mt-2 font-serif text-lg italic text-teal">Current titles, show notes and links put your interview back in the results.</p>
            </div>
          </div>
          <ul>
            {drifts.map((d) => (
              <li key={d.title} className="border-t border-rule py-6 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-6">
                <h3 className="font-serif text-2xl font-medium text-navy">{d.title}</h3>
                <p className="mt-2 leading-relaxed">{d.text}</p>
                <p className="mt-2 font-serif text-lg italic text-teal">{d.fix}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Back Catalog Goldmine: the only place gold is used */}
      <section id="goldmine" className="scroll-mt-0 bg-coal py-16 text-ivory sm:py-24">
        <div className={wrap}>
          <h2 className="font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-7xl">
            Back Catalog <em className="foil-text font-semibold">Goldmine</em>
          </h2>
          <p className="mt-5 font-serif text-2xl italic sm:text-[1.7rem]">Three services. Always the whole catalog.</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-oatmeal">
            Take all three as the full suite, or pick the one or two that fix what your report turned up. We don't stop at writing them: we make every update live for you, on your podcast host and on your website.
          </p>
          <ul className="mt-12 grid gap-x-12 md:grid-cols-3">
            {goldmine.map((g) => (
              <li key={g.name} className="border-t border-ivory/20 py-7">
                <h3 className="font-serif text-[2rem] font-medium leading-tight">{g.name}</h3>
                <p className="mt-1.5 font-serif text-lg italic text-gold-light">{g.so}</p>
                <p className="mt-3 leading-relaxed text-oatmeal">{g.text}</p>
              </li>
            ))}
          </ul>
          <div className="grid gap-x-16 border-t border-ivory/20 md:grid-cols-2">
            {delivery.map((d) => (
              <div key={d.title} className="border-b border-ivory/20 py-8 md:border-b-0">
                <h3 className="font-serif text-[2rem] font-medium leading-tight">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-oatmeal">{d.text}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-ivory/20 py-10">
            <h3 className="font-serif text-[2.4rem] font-semibold leading-tight"><span className="foil-text">The full suite</span></h3>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-oatmeal">
              All three services for every episode you've made, live on your podcast host and your website, for one price. It's what we recommend, and it comes with three bonuses at no charge.
            </p>
            <p className="mt-7 font-serif text-xl italic text-gold-light">Free with the full suite</p>
            <ul className="mt-3 border-t border-ivory/20">
              {bonuses.map((b) => (
                <li key={b.name} className="grid gap-x-8 gap-y-1 border-b border-ivory/20 py-4 last:border-b-0 md:grid-cols-[19rem_1fr]">
                  <strong className="font-serif text-xl font-semibold">{b.name}</strong>
                  <span className="text-oatmeal">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="border-t border-ivory/20">
            {liveOn.map((l) => (
              <li key={l.name} className="grid gap-x-8 gap-y-1 border-b border-ivory/20 py-4 md:grid-cols-[14rem_1fr]">
                <strong className="font-serif text-xl font-semibold">{l.name}</strong>
                <span className="text-oatmeal">{l.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center">
            <a href="#report" className={`${btn} foil-bg transition-[background-position] duration-500 focus-visible:outline-gold`}>
              Get your podcast's Buried Gold Report
            </a>
            <p className="max-w-md text-[15px] text-oatmeal">Your quote comes after a walkthrough call, based on your catalog's size.</p>
          </div>
        </div>
      </section>

      {/* Already have a production team? */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className={`${h2} max-w-3xl text-navy`}>Already have a production team? Great. We work on different episodes.</h2>
          <div className="mt-12 grid border-t-2 border-navy md:grid-cols-2">
            <div className="py-7 md:pr-10">
              <p className="text-[15px] text-cocoa">Your team</p>
              <h3 className="mt-1 font-serif text-[1.7rem] font-medium text-navy">This week's episode</h3>
              <ul className="mt-4 grid gap-2.5">
                {split.yours.map((t) => (
                  <li key={t} className={`flex gap-3 before:bg-oatmeal ${diamond}`}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-rule py-7 md:border-l md:border-t-0 md:pl-10">
              <p className="text-[15px] text-cocoa">Us</p>
              <h3 className="mt-1 font-serif text-[1.7rem] font-medium text-navy">Every episode behind it</h3>
              <ul className="mt-4 grid gap-2.5">
                {split.ours.map((t) => (
                  <li key={t} className={`flex gap-3 before:bg-teal ${diamond}`}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 max-w-3xl border-t border-rule pt-7 text-lg leading-relaxed">
            We work on the archive without touching your production workflow, and we hand your team the style guide we build so new titles match the rest. Nobody's job changes, and nobody has to find hundreds of spare hours.
          </p>
        </div>
      </section>

      {/* The free Buried Gold Report */}
      <section id="report" className="scroll-mt-6 border-t border-rule bg-card py-16 sm:py-24">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20`}>
          <div>
            <h2 className={`${h2} text-navy`}>Before we touch a single episode, we show you what's in your catalog.</h2>
            <p className="mt-6 text-lg leading-relaxed">
              Send us your show's name. The Buried Gold Report is our free audit of your catalog: we run your public feed through the same checks we used on The School of Greatness and send back two pages in plain English within 48 hours, plus a before-and-after on 10 of your own titles. You don't give us access to anything.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={REPORT_MAILTO} className={`${btn} bg-teal text-ivory hover:bg-teal-dark focus-visible:outline-teal`}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                Email us your show's name
              </a>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={`${btn} text-navy shadow-[inset_0_0_0_1.5px_currentColor] hover:bg-ivory focus-visible:outline-navy`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Or book a call
              </a>
            </div>
            <p className="mt-4 text-[15px]">
              All we need is your show's name. No login or APIs required. Or write to <span className="select-all font-semibold text-navy">{EMAIL}</span>.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium text-navy">What the report checks</h3>
            <ul className="mt-4">
              {reportChecks.map((c) => (
                <li key={c.name} className={`flex gap-3 border-t border-rule py-4 before:bg-teal ${diamond}`}>
                  <span>
                    <strong className="font-semibold text-navy">{c.name}:</strong> {c.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Podcast production: the pitch and the results */}
      <section id="production" className="bg-navy py-16 text-ivory sm:py-24">
        <div className={`${wrap} grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20`}>
          <div>
            <h2 className="font-serif text-5xl font-medium leading-[1.04] tracking-tight [text-wrap:balance] sm:text-6xl">A complete podcast partner</h2>
            <p className="mt-6 max-w-[34rem] text-xl leading-relaxed text-oatmeal">
              From editing and publishing to growth and monetization strategy, we handle it all so your podcast sounds as world-class as your ideas.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={`${btn} bg-ivory text-navy hover:bg-card focus-visible:outline-ivory`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Book a call
              </a>
              <a href={CONTACT_MAILTO} className={`${btn} text-ivory shadow-[inset_0_0_0_1.5px_currentColor] hover:bg-ivory/10 focus-visible:outline-ivory`}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                Contact us
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium">Results we deliver</h3>
            <dl className="mt-5">
              {results.map((r) => (
                <div key={r.figure} className="grid grid-cols-[7.25rem_1fr] items-baseline gap-4 border-t border-ivory/25 py-4 sm:grid-cols-[9.75rem_1fr]">
                  <dt className="font-serif text-[2rem] font-semibold leading-none tabular-nums sm:text-[2.6rem]">{r.figure}</dt>
                  <dd className="text-[15px] leading-snug text-oatmeal">{r.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Production services and pricing */}
      <section className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 className={`${h2} text-navy`}>Our services</h2>
          <p className="mt-4 max-w-2xl text-xl">End-to-end podcast production services to help you launch, grow, and monetize your show</p>
          <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
            {production.map((s) => (
              <li key={s.title} className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-rule py-8">
                <s.icon className="mt-1 h-8 w-8 text-teal" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-[1.7rem] font-medium leading-tight text-navy">{s.title}</h3>
                  <p className="mt-2.5 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="grid gap-8 border-t-2 border-navy pt-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <h3 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy">Pricing designed around you</h3>
            <div>
              <p className="text-lg leading-relaxed">
                Every podcast is different. That's why we don't force flat rates. Instead, we design custom packages that match your production needs, release schedule, and growth goals. Our mission is to <strong className="font-semibold text-navy">deliver early, not just on time</strong>.
              </p>
              <a href={CONTACT_MAILTO} className={`${btn} mt-7 bg-teal text-ivory hover:bg-teal-dark focus-visible:outline-teal`}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                Request a custom quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shows we've produced */}
      <section className="border-t border-rule bg-card py-16 sm:py-24">
        <div className={wrap}>
          <h2 className={`${h2} text-navy`}>Trusted by top podcasts</h2>
          <p className="mt-4 max-w-2xl text-xl">We've helped leading voices build, grow, and scale their shows</p>
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {shows.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                  <img src={img(s.image)} alt={s.name} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
                  <h3 className="mt-3 font-semibold leading-snug text-navy group-hover:underline group-hover:decoration-teal group-hover:underline-offset-4">{s.name}</h3>
                  <p className="text-[15px]">{s.host}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What clients say */}
      <section className="bg-teal py-16 text-ivory sm:py-24">
        <div className={wrap}>
          <h2 className={h2}>What our clients say</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-ivory/30 pt-7">
                <blockquote className="font-serif text-[1.35rem] italic leading-[1.5]">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 font-semibold">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lauren and Scott */}
      <section className="bg-navy py-16 text-ivory sm:py-24">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
          <div className="self-start">
            <div className="grid grid-cols-2 gap-4">
            {founders.map((f) => (
              <figure key={f.name}>
                <img src={img(f.image)} alt={f.name} loading="lazy" className={`aspect-[4/5] w-full rounded-sm object-cover ${f.position}`} />
                <figcaption className="mt-3">
                  <span className="block font-semibold">{f.name}</span>
                  <span className="block text-[15px] leading-snug text-oatmeal">{f.role}</span>
                </figcaption>
              </figure>
            ))}
            </div>
            <figure className="mt-8 grid grid-cols-[4.5rem_1fr] items-center gap-4 border-t border-ivory/20 pt-6">
              <img src={img('Wayne headshot.jpg')} alt="Wayne Redden" loading="lazy" className="aspect-square w-full rounded-sm object-cover object-[50%_10%]" />
              <figcaption className="text-[15px] leading-snug text-oatmeal">
                <strong className="block text-base font-semibold text-ivory">Wayne Redden, Assistant Editor</strong>
                A Berklee College of Music graduate who keeps every episode balanced, clear, and professional.
              </figcaption>
            </figure>
          </div>
          <div>
            <h2 className={h2}>Lauren &amp; Scott McFall</h2>
            <p className="mt-6 text-lg leading-relaxed text-oatmeal">
              We're a husband-and-wife team, and we produce The School of Greatness and The Daily Motivation. When we took on Lewis's back catalog, we built our own tools to do it properly at that size. That's the work we now do for other shows, and every project gets both of us.
            </p>
            <div className="mt-8 grid gap-6">
              {founders.map((f) => (
                <blockquote key={f.name} className="border-l-2 border-oatmeal pl-5">
                  <p className="font-serif text-xl italic leading-snug">&ldquo;{f.quote}&rdquo;</p>
                  <footer className="mt-1.5 text-[15px] text-oatmeal">{f.name.split(' ')[0]}</footer>
                </blockquote>
              ))}
            </div>
            <ul className="mt-8">
              {promises.map((p) => (
                <li key={p} className={`flex gap-3 border-t border-ivory/20 py-4 text-oatmeal before:bg-oatmeal ${diamond}`}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-teal py-16 text-ivory sm:py-24">
        <div className={wrap}>
          <h2 className={`${h2} max-w-3xl sm:text-6xl`}>Find out what's buried in your back catalog.</h2>
          <p className="mt-5 max-w-xl text-xl text-[#eadcc2]">
            We'll run your public feed through the same checks and send you your podcast's Buried Gold Report, our free two-page audit, within 48 hours. All we need is your show's name. No login or APIs required. Looking for a production team? Book a call and we'll talk through your show.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={REPORT_MAILTO} className={`${btn} bg-ivory text-navy hover:bg-card focus-visible:outline-ivory`}>
              <Mail className="h-5 w-5" aria-hidden="true" />
              Get your podcast's Buried Gold Report
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={`${btn} text-ivory shadow-[inset_0_0_0_1.5px_currentColor] hover:bg-teal-dark focus-visible:outline-ivory`}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Talk to Lauren &amp; Scott
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-navy py-12 text-oatmeal">
        <div className={`${wrap} flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3`}>
          <div>
            <p className="text-lg"><Wordmark onDark /></p>
            <p className="mt-1">Scott &amp; Lauren McFall · Producers of The School of Greatness and The Daily Motivation</p>
            <p className="mt-1 select-all">{EMAIL}</p>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} McFall Productions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
