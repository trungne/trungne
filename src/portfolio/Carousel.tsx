import styles from "./portfolio.module.css";
import globalStyles from "../global.module.css";
import { useEffect, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MyImage from "./MyImage";
import { nanoid } from "nanoid";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const checkedIcon = <FiberManualRecordIcon key={nanoid()} />
export default function MyCarousel(props: { images: MyImage[]}) {
    const [index, setIndex] = useState(0);
    

    // reset to first image when images change
    useEffect(() => {
        setIndex(0);
        // force browser to load all images
        props.images.forEach((pic) => {
            new Image().src = pic.imgPath; 
        })
    }, [props.images]);

    if (index > props.images.length - 1) {
        return null;
    }
    return (
        <div className={styles["carousel-box"]} >
            <div className={globalStyles["center-flex"]}>
                {props.images.map((image, idx) => {
                    if (idx === index) {
                        return checkedIcon;
                    }
                    return <FiberManualRecordOutlinedIcon key={image.imgPath} />
                })}

            </div>
            <div className={styles["carousel-inner"]}>


                <div
                    className={styles["carousel-button"]}
                    onClick={() => {
                        if (index === 0) {
                            setIndex(props.images.length - 1);
                        }
                        else {
                            setIndex(prevIndex => prevIndex - 1);
                        }
                    }}
                >
                    <ChevronLeftIcon />
                </div>
                <div className={styles["carousel-center"]}>
                    <img alt={props.images[index].label} src={props.images[index].imgPath} />
                </div>

                <div
                    className={styles["carousel-button"]}
                    onClick={() => {
                        if (index === props.images.length - 1){
                            setIndex(0);
                        }
                        else {
                            setIndex(prevIndex => prevIndex + 1)
                        }
                    }}
                >
                    <ChevronRightIcon />
                </div>
            </div>

        </div>
    )
}