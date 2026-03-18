import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

const BackToTopComponent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button 
        onClick={scrollToTop}
        className={
            `fixed bottom-8 right-8 z-50 
                  flex items-center gap-2 px-8 py-4
                  rounded-full
                  bg-white/10 backdrop-blur-md
                  border border-white/20
                  text-white text-xl
                  hover:bg-white/20 transition
                  ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
        Back To Top 
        <FaArrowUp />
    </button>
  )
}

export default BackToTopComponent