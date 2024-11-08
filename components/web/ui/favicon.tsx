import type { HTMLAttributes } from "react"
import { cx } from "~/utils/cva"

type FaviconProps = HTMLAttributes<HTMLDivElement> & {
  src: string | null
  title?: string | null
}

export const Favicon = ({ className, src, title, ...props }: FaviconProps) => {
  return (
    <div
      className={cx("flex size-8 items-center justify-center shrink-0 rounded-md", className)}
      {...props}
    >
      <FaviconImage src={src} title={title} className="size-full" />
    </div>
  )
}

export const FaviconImage = ({ className, src, title, ...props }: FaviconProps) => {
  if (!src) return null

  return (
    <img
      alt={`Favicon of ${title} website`}
      loading="lazy"
      width="64"
      height="64"
      className={cx("aspect-square size-9 rounded-[inherit]", className)}
      src={src}
      {...props}
    />
  )
}
