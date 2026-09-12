export default function Placeholder({
  label,
  src,
  alt,
  ratio = '4 / 3',
  className = '',
  rounded = 'rounded-2xl',
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-sand ${rounded} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={alt || label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden border border-ink/10 bg-sand ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #e7eef3 0%, #c5d4de 48%, #e7eef3 100%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 14px,
              rgba(26, 22, 21, 0.03) 14px,
              rgba(26, 22, 21, 0.03) 15px
            )
          `,
        }}
      />
      <div className="absolute inset-6 rounded-xl border border-ink/8" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="max-w-[16rem] text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink/45">
          {label}
        </p>
      </div>
    </div>
  )
}
