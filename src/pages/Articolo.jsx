import { Link, Navigate, useParams } from 'react-router-dom'
import { copy, getArticle } from '../data'

export default function Articolo() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) return <Navigate to="/articoli" replace />

  return (
    <article className="bg-cream">
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">{copy.articles.kicker}</p>
        <div className="mt-3 h-px w-10 bg-gold/70" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">{article.title}</h1>
        <p className="mt-4 text-ink/65">{article.excerpt}</p>

        <div className="mt-12 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold tracking-tight text-ink">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-ink/75">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc space-y-2 pl-5 text-ink/75">
                    {section.list.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-sm">
          <Link to="/articoli" className="font-medium text-terracotta transition-colors duration-300 hover:text-ink">
            Tutti gli articoli
          </Link>
          <Link to="/contatti#prenota" className="font-medium text-terracotta transition-colors duration-300 hover:text-ink">
            {copy.cta.quote}
          </Link>
        </nav>
      </div>
    </article>
  )
}
