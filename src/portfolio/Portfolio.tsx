import styles from "./portfolio.module.css"
import Typography from "@mui/material/Typography"
import seedImage from './static/seed.png';
import leafImage from './static/leaf.png';
import flowerImage from './static/flower.png';
import fruitImage from './static/fruit.png';


import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'Seed',
    imgPath: seedImage
  },
  {
    label: 'Leaf',
    imgPath: leafImage
  },
  {
    label: 'flower',
    imgPath: flowerImage
  },
  {
    label: 'Fruit',
    imgPath: fruitImage
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "90%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          backgroundColor: "black"
        }}
      >
        <Typography className={styles.imageDescription}>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "auto",
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      sx={{backgroundColor: "black"}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}




function Header() {
    return (
        <div className={styles.header}>
            <Typography variant="h4" className={styles.text}>
                My projects
            </Typography>
        </div>
    )
}

export default function Portfolio() {
    return (
        <div id="tech" className={styles.portfolio}>
            <Header />
            <Projects />
        </div>
    )
}

function Projects() {
    return (
        <div className={styles.center}>
          <SwipeableTextMobileStepper/>
        </div>
    )
}

function Image(props: { url: string, label: string }) {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.image} src={props.url} alt={props.label} />
            <Typography variant="subtitle1" className={styles.imageDescription}>
                {props.label}
            </Typography>
        </div>
    )
}

