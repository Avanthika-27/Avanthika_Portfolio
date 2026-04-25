import { useMemo, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Calendar,
  Check,
  Clipboard,
  Copy,
  Instagram,
  Lightbulb,
  Linkedin,
  MessageSquare,
  Moon,
  Sparkles,
  Sun,
  Target,
  Twitter,
  WandSparkles,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

const timeline = [
  { year: '2020', title: 'Found the Voice', text: 'Started creating student-first coaching content.' },
  { year: '2022', title: 'Built Signature Framework', text: 'Designed a high-impact communication coaching method.' },
  { year: '2024', title: 'Scaled Community', text: 'Guided ambitious learners into confident storytellers.' },
  { year: '2026', title: 'Global Vision', text: 'Expanding workshops and digital programs worldwide.' },
]

const whatSheDoes = [
  { icon: Lightbulb, title: 'Career Clarity', desc: 'Helps people choose a direction that fits ambition and values.' },
  { icon: MessageSquare, title: 'Communication', desc: 'Turns shy speakers into compelling storytellers.' },
  { icon: Target, title: 'Personal Branding', desc: 'Builds brand voice that feels authentic and magnetic.' },
  { icon: Brain, title: 'Mindset Coaching', desc: 'Reframes fear into confidence and momentum.' },
  { icon: Clipboard, title: 'Interview Strategy', desc: 'Prepares answers that are crisp, human, and memorable.' },
  { icon: WandSparkles, title: 'Content Positioning', desc: 'Creates content hooks that attract the right opportunities.' },
]

const highlights = [
  'Campus Masterclass: 700+ attendees',
  'Built a 50k+ growth-focused community',
  'Featured in creator-led career podcasts',
]

const plans = [
  { name: 'Starter Sprint', price: '$149', items: ['1:1 audit', 'Roadmap', 'Follow-up notes'] },
  { name: 'Momentum Plan', price: '$349', items: ['4 sessions', 'Voice feedback', 'Practice scripts'], recommended: true },
  { name: 'Leadership Lab', price: '$699', items: ['8 sessions', 'Personal brand system', 'Interview playbook'] },
]

function Section({ id, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <motion.h2
        className="mb-10 text-3xl font-bold md:text-4xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  )
}

export default function App() {
  const { scrollYProgress, scrollY } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 20 })
  const parallaxY = useTransform(scrollY, [0, 1200], [0, -140])
  const [darkMode, setDarkMode] = useState(false)
  const [copied, setCopied] = useState(false)
  const [flipped, setFlipped] = useState(false)

  const styleClass = useMemo(() => (darkMode ? 'dark bg-slate-950 text-slate-100' : ''), [darkMode])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('hello@avanthikasampath.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className={styleClass}>
      <motion.div className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-fuchsia-500" style={{ scaleX: progress }} />

      <button
        onClick={() => setDarkMode((p) => !p)}
        className="fixed right-5 top-5 z-50 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur transition hover:scale-105 dark:bg-slate-800"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <main className="relative overflow-hidden">
        <motion.div className="absolute inset-0 -z-10 opacity-60" style={{ y: parallaxY }}>
          <div className="absolute -top-24 left-10 h-60 w-60 rounded-full bg-pink-300/50 blur-3xl" />
          <div className="absolute right-12 top-80 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />
        </motion.div>

        <section className="mx-auto grid min-h-screen max-w-6xl place-items-center gap-12 px-6 py-16 md:grid-cols-2">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <motion.p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-fuchsia-500" variants={fadeUp} custom={1}>
              Coach • Creator • Story Architect
            </motion.p>
            <motion.h1 className="text-5xl font-extrabold leading-tight md:text-7xl" variants={fadeUp} custom={2}>
              Avanthika <span className="text-fuchsia-500">Sampath</span>
            </motion.h1>
            <motion.p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300" variants={fadeUp} custom={3}>
              I help driven people speak with clarity, build a standout personal brand, and turn ideas into opportunities.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeUp} custom={4}>
              {['Start Your Story', 'See Highlights'].map((cta) => (
                <motion.button
                  whileHover={{ scale: 1.08, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  key={cta}
                  className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-3 text-white shadow-dreamy"
                >
                  {cta}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative scene h-[360px] w-full max-w-md">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-[2rem] border border-white/50 bg-white/50 p-4 backdrop-blur-lg"
                style={{ top: `${i * 42}px`, left: `${i * 36}px` }}
                animate={{ y: [0, -12, 0], rotate: [0, 3 - i, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity }}
              >
                <Sparkles className="text-fuchsia-500" />
              </motion.div>
            ))}
          </div>
        </section>

        <Section id="about" title="About Avanthika">
          <div className="scene mx-auto h-[360px] w-full max-w-lg" onClick={() => setFlipped((p) => !p)}>
            <div className="flip-card-inner" style={{ transform: flipped ? 'rotateY(180deg)' : undefined }}>
              <div className="flip-card-front rounded-3xl bg-white p-10 shadow-dreamy dark:bg-slate-800">
                <div className="mx-auto mb-5 grid h-24 w-24 place-content-center rounded-full bg-gradient-to-br from-pink-300 to-fuchsia-500 text-3xl font-bold text-white">A</div>
                <h3 className="text-3xl font-bold">Avanthika Sampath</h3>
                <p className="mt-2 text-slate-500">Tap / Hover to flip</p>
              </div>
              <div className="flip-card-back rounded-3xl bg-gradient-to-br from-fuchsia-500 to-violet-600 p-10 text-left text-white shadow-dreamy">
                <h3 className="text-2xl font-semibold">Warm. Strategic. Bold.</h3>
                <p className="mt-4">She blends empathy + execution to help ambitious learners own rooms, tell powerful stories, and build meaningful careers.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="story" title="Her Story">
          <div className="relative mx-auto max-w-3xl">
            <motion.div className="absolute left-4 top-0 h-full w-1 rounded-full bg-fuchsia-100" />
            <motion.div className="absolute left-4 top-0 w-1 origin-top rounded-full bg-fuchsia-500" style={{ height: useTransform(scrollYProgress, [0.2, 0.6], ['0%', '100%']) }} />
            {timeline.map((item, i) => (
              <motion.article
                key={item.year}
                className={`mb-10 ml-12 rounded-2xl border border-fuchsia-100 bg-white/80 p-6 shadow-lg backdrop-blur dark:bg-slate-800/80 ${i % 2 ? 'md:ml-28' : ''}`}
                initial={{ opacity: 0, x: i % 2 ? 120 : -120, rotate: i % 2 ? 4 : -4, scale: 0.94 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-semibold text-fuchsia-500">{item.year}</p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="does" title="What She Does">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatSheDoes.map((card) => (
              <TiltFlipCard key={card.title} card={card} />
            ))}
          </div>
        </Section>

        <Section id="how" title="How She Does It">
          <div className="grid gap-5 md:grid-cols-3">
            {['Think', 'Build', 'Communicate'].map((step, i) => (
              <motion.div
                key={step}
                className="relative rounded-2xl bg-white/80 p-8 text-center shadow-lg dark:bg-slate-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2 + i }} className="mx-auto mb-3 grid h-12 w-12 place-content-center rounded-full bg-fuchsia-100 text-fuchsia-500">
                  {i + 1}
                </motion.div>
                <h3 className="text-xl font-semibold">{step}</h3>
                {i < 2 && <motion.div className="absolute -right-3 top-1/2 hidden h-1 w-6 bg-gradient-to-r from-fuchsia-500 to-transparent md:block" animate={{ scaleX: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.8 }} />}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="highlights" title="Highlights">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <motion.div key={item} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-3xl border border-fuchsia-200 bg-white p-7 shadow-lg dark:bg-slate-800">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-fuchsia-500/0 bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-100" />
                <motion.h3 className="relative text-xl font-semibold" whileHover={{ y: -2 }}>
                  {item}
                </motion.h3>
                <p className="relative mt-3 text-slate-600 dark:text-slate-300">Measured impact with practical systems and high-energy delivery.</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="plans" title="Coaching Plan">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <motion.div key={plan.name} whileHover={{ y: -8 }} className={`rounded-3xl border bg-white p-7 shadow-lg dark:bg-slate-800 ${plan.recommended ? 'border-fuchsia-500' : 'border-fuchsia-100'}`}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-extrabold text-fuchsia-500">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {plan.items.map((i) => <li key={i}>• {i}</li>)}
                </ul>
                <motion.button whileTap={{ scale: 0.94 }} className={`mt-6 w-full rounded-xl py-2 font-semibold text-white ${plan.recommended ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 animate-pulse' : 'bg-slate-800'}`}>
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="vision" title="Next Steps">
          <motion.div className="rounded-3xl bg-gradient-to-br from-pink-200/80 via-fuchsia-200/60 to-violet-300/80 p-10 shadow-dreamy" style={{ backgroundSize: '220% 220%' }} animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }} transition={{ repeat: Infinity, duration: 10 }}>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold">
              Building the next generation of confident communicators.
            </motion.h3>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl text-lg">
              Avanthika&apos;s vision: blend coaching, creator-led education, and community into a high-growth ecosystem.
            </motion.p>
          </motion.div>
        </Section>

        <Section id="follow" title="Follow Her">
          <div className="rounded-3xl bg-white/80 p-8 shadow-dreamy dark:bg-slate-800">
            <div className="flex flex-wrap gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, y: -4 }}
                  className="grid h-12 w-12 place-content-center rounded-full bg-fuchsia-100 text-fuchsia-600"
                  href="#"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <motion.button onClick={copyEmail} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-white">
                {copied ? <Check size={18} /> : <Copy size={18} />} hello@avanthikasampath.com
              </motion.button>
              <AnimatePresence>
                {copied && <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-emerald-500">Copied!</motion.span>}
              </AnimatePresence>
              <motion.a whileHover={{ scale: 1.06 }} href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-semibold text-white">
                <Calendar size={18} /> Book on Calendly <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}

function TiltFlipCard({ card }) {
  const [flipped, setFlipped] = useState(false)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    rotateX.set(((y / rect.height) - 0.5) * -10)
    rotateY.set(((x / rect.width) - 0.5) * 10)
  }

  const Icon = card.icon

  return (
    <motion.div
      className="scene h-56 cursor-pointer"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
        setFlipped(false)
      }}
      onMouseEnter={() => setFlipped(true)}
      onClick={() => setFlipped((p) => !p)}
      style={{ rotateX, rotateY }}
    >
      <motion.div className="flip-card-inner h-full" animate={{ rotateY: flipped ? 180 : 0 }}>
        <div className="flip-card-front rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800">
          <Icon className="mx-auto mb-4 text-fuchsia-500" />
          <h3 className="text-xl font-semibold">{card.title}</h3>
        </div>
        <div className="flip-card-back rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 p-6 text-white shadow-lg">
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="mt-3 text-sm">{card.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
