import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import SectionHeader from '../components/SectionHeader'
import { articles, copy } from '../data'

export default function Articoli() {
  const content = copy.articles

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-sand transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-28px_rgba(26,22,21,0.4)]"
            >
              <Placeholder
                label={article.title}
                src={article.image}
                alt={article.title}
                ratio="16 / 9"
                rounded="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-2xl font-semibold text-ink">{article.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink/65">{article.excerpt}</p>
                <Link
                  to={`/articoli/${article.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-terracotta transition-colors duration-300 hover:text-ink"
                >
                  {content.read} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
