import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styles from "./contact.module.css";
import { FormEventHandler, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import globalStyles from "../global.module.css";
export default function SendEmail() {
    const form = useRef<any>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs
        .sendForm('service_xyi4tga', 'template_9g72zwd', form.current, 'user_qJfCYlCGa3K6U3qX0Y80j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.error(error.text);
        });

    }
    return (
        <Box onSubmit={sendEmail} ref={form} noValidate autoComplete="off"
            component="form" className={`${styles["send-email-box"]}`}>
            <Typography className={`${styles["email-header-text"]}`} sx={{ textAlign: "center" }} variant="h2">
                Shoot me a message
            </Typography>
            <div className={styles['input-field']}>
                <div className={styles['personal-information']}>
                    <TextField name='from_name' className={styles['field']} required label="Your Name" />
                    <TextField name='from_email' className={styles['field']} required label="Your Email" />
                </div>

                <TextField
                    name='message'
                    label="Message"
                    multiline
                    rows={4}
                    required
                />
            </div>
            <div style={{ marginLeft: "auto" }}>
                <Button onClick={event => {sendEmail(event)}} sx={{ minWidth: "200px" }} variant="contained">Send</Button>
            </div>
        </Box>
    )
}