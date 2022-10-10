import { useEffect, useState } from "react";

const useWindowHeight = () => {
    const [smallScreen, setSmallScreen] = useState<boolean>(false)

    useEffect(()=> {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize)
    }, [])

    const checkScreenSize = () => {
        setSmallScreen(window.innerHeight < 600)
    }

    return smallScreen;
}

export default useWindowHeight;