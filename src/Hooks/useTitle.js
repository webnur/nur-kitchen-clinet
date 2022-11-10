import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - NUR KITCHEN`
    }, [title])
}

export default useTitle;