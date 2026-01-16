import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (
    <div className={cn("top-[60px] sm:top-[70px] sticky mb-48 sm:mb-72 md:mb-96 px-4 sm:px-6", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-bold",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && (
        <p className="mx-auto line-clamp-4 max-w-3xl font-normal text-sm sm:text-base text-center text-muted-foreground mt-2">
          {desc}
        </p>
      )}
    </div>
  )
}
