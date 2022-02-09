import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";

const shutEyes = {height: 0};


export default function Eyes(props: {
    shut: boolean,
    surprised: boolean}) {
    const [eyesHeight, setEyesHeight] = useState("5em");
    const leftEyeBall = useRef<any>();
    const rightEyeBall = useRef<any>();
    const handleMouseMove = (event: MouseEvent) => {
        const x = event.clientX * 100 / window.innerWidth + "%";
        const y = event.clientY * 100 / window.innerHeight + "%";
        
        leftEyeBall.current.style.left = x;
        leftEyeBall.current.style.top = y;
        leftEyeBall.current.style.transform = "translate(-" + x + ",-" + y + ")";

        rightEyeBall.current.style.left = x;
        rightEyeBall.current.style.top = y;
        rightEyeBall.current.style.transform = "translate(-" + x + ",-" + y + ")";
    };

    useEffect(() => {
        if (props.shut) {
            setEyesHeight("0");
        }
        else if (props.surprised){
            setEyesHeight("7em");
        }
        else{
            setEyesHeight("5em");
        }
    }, [props.surprised, props.shut])


    useEffect(() => {
        window.onmousemove = (event) => {handleMouseMove(event)}
        return window.removeEventListener("onmousemove", (event) => handleMouseMove);
    }, []);

    return (
        <div>
            <div className={styles["eyes"]}>
                <div style={{height: eyesHeight}} className={styles["eye"]}>
                    <div ref={leftEyeBall} className={styles["ball"]}></div>
                </div>

                <div style={{height: eyesHeight}} className={styles["eye"]}>
                    <div ref={rightEyeBall} className={styles["ball"]}></div>
                </div>
            </div>
        </div>

    )
}


