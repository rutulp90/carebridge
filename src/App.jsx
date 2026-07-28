import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import CauseCard from './components/CauseCard';
import { goals, causes, helpWays, posts } from './data/siteData';
import { Play, ArrowRight } from 'lucide-react';

export default function App(){return <div>
<Header/>
<main>
<section id="home" className="hero"><div className="hero__overlay"/><div className="container hero__content"><span className="eyebrow">Small actions. Lasting impact.</span><h1>Build a kinder world, one community at a time.</h1><p>CareBridge connects donors, volunteers and local partners to practical projects in education, health and child protection.</p><div className="hero__actions"><a className="btn" href="#causes">Explore causes</a><a className="btn btn--ghost" href="#about">How we work</a></div></div></section>

<section className="goals"><div className="container goal-panel"><SectionTitle eyebrow="Our mission" title="Focused help that reaches people" text="We design measurable programs around immediate needs and long-term resilience."/><div className="grid grid--3">{goals.map(({icon:Icon,...g})=><article className="icon-card" key={g.title}><Icon/><h3>{g.title}</h3><p>{g.text}</p></article>)}</div></div></section>

<section id="causes" className="section"><div className="container"><SectionTitle eyebrow="Current campaigns" title="Causes that need support" text="Choose a project and follow its progress from funding to community impact."/><div className="grid grid--3">{causes.map(c=><CauseCard key={c.title} cause={c}/>)}</div></div></section>

<section id="about" className="section section--muted"><div className="container feature-row"><div className="feature-media"><img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80" alt="Volunteers working together"/><button aria-label="Play story"><Play fill="currentColor"/></button></div><div><span className="eyebrow">For the community</span><h2>Local partnerships create stronger results.</h2><p>We collaborate with teachers, health workers and neighborhood leaders. That keeps every project relevant, accountable and sustainable.</p><ul className="check-list"><li>Transparent campaign milestones</li><li>Reusable React components</li><li>Responsive and accessible interface</li></ul><a className="btn" href="#help">See how you can help</a></div></div></section>

<section className="stats"><div className="container stats__grid">{[['34','Projects funded'],['15','Partner organizations'],['45','Active volunteers'],['93%','Funds to programs']].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

<section id="help" className="section"><div className="container"><SectionTitle eyebrow="Get involved" title="How you can help" text="Choose the kind of contribution that fits your time, resources and skills."/><div className="help-layout"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80" alt="Volunteer group"/><div className="grid grid--2">{helpWays.map(({icon:Icon,...item})=><article className="help-card" key={item.title}><Icon/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></div></section>

<section id="blog" className="section section--muted"><div className="container"><SectionTitle eyebrow="Stories and updates" title="From the field" text="Read about current projects, lessons learned and the people behind the work."/><div className="grid grid--3">{posts.map(p=><article className="post-card" key={p.title}><img src={p.image} alt={p.title}/><div><span>{p.date}</span><h3>{p.title}</h3><a href="#contact">Read story <ArrowRight size={16}/></a></div></article>)}</div></div></section>

<section id="contact" className="cta"><div className="container cta__inner"><div><span className="eyebrow">Ready to contribute?</span><h2>Help turn a good intention into measurable change.</h2></div><a className="btn btn--light" href="mailto:hello@carebridge.org">Contact CareBridge</a></div></section>
</main>
<footer className="footer"><div className="container footer__grid"><div><a className="brand brand--light" href="#home">CareBridge</a><p>A React-based nonprofit website concept built to demonstrate component architecture, data mapping and responsive UI development.</p></div><div><h4>Navigation</h4><a href="#causes">Causes</a><a href="#about">About</a><a href="#blog">Stories</a></div><div><h4>Contact</h4><p>hello@carebridge.org</p><p>+1 555 019 245</p></div></div><div className="container footer__bottom">© 2026 CareBridge. React demonstration project.</div></footer>
</div>}
