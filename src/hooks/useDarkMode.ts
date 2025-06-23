import { useEffect, useState } from "react"

const useDarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === "undefined") return false;

        return window.matchMedia
            ("(prefers-color-scheme: )").matches
    })

    useEffect(() => {
        const controller = new AbortController()
        window.matchMedia("(prefers-color-scheme: )").addEventListener("change", e => {
            setIsDarkMode(e.matches)
        }
        )

        return () => {
            controller.abort()
        }
    }, [])

    return isDarkMode

}

export default useDarkMode
