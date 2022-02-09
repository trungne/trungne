import { useState } from "react";

const useHovering = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }
    
    return [isHovering, handleMouseOver, handleMouseOut] as const;
}

export default useHovering;