import { Link } from 'react-router-dom'
import { company } from '../data'
import { asset } from '../lib/assets'

export default function Logo({ onClick, tone = 'dark' }) {
  const taglineClass = tone === 'light' ? 'text-cream/50' : 'text-ink/55'

  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3">
      <img
        src={asset('logo.png')}
        alt=""
        className="h-11 w-auto shrink-0 object-contain bg-transparent transition-opacity duration-300 group-hover:opacity-85 sm:h-12"
        width={2749}
        height={3082}
      />
      <span className="flex flex-col items-start leading-none">
        <span className={`text-[0.95rem] font-semibold tracking-tight ${tone === 'light' ? 'text-cream' : 'text-ink'}`}>
          {company.name}
        </span>
        <span className={`mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] ${taglineClass}`}>
          {company.tagline}
        </span>
      </span>
    </Link>
  )
}
