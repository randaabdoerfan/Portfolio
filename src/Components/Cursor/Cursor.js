import React, { useEffect, useState } from 'react'

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const addHover = () => setIsHovering(true);
        const removeHover = () => setIsHovering(false);

        document.addEventListener("mousemove", moveCursor);

        const hoverElements = document.querySelectorAll("a, button, .card");
        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });


        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovering ? "cursor-grow" : ""}`}
            style={{
                left: position.x,
                top: position.y,
            }}
        />
    );
}


export default Cursor;
