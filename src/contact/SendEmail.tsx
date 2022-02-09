import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styles from "./contact.module.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';

// import globalStyles from "../global.module.css";
export default function SendEmail() {
    const form = useRef<HTMLFormElement>(null);

    // set initial values to empty strings to not trigger errors 
    // when user hasn't entered anything
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            // to trigger errors
            setName("");
            setEmail("");
            setMessage("");
            return;
        }

        if (form === null || form.current === null) {
            return;
        }

        emailjs
            .sendForm('service_xyi4tga', 'template_9g72zwd', form.current, 'user_qJfCYlCGa3K6U3qX0Y80j')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.error(error.text);
        // });
    }
    return (
        <Box onSubmit={sendEmail} ref={form} noValidate autoComplete="off"
            component="form" className={`${styles["send-email-box"]}`}>
            <Typography className={`${styles["email-header-text"]}`} sx={{ textAlign: "center" }} variant="h2">
                Shoot me a message
            </Typography>
            <div className={styles['input-field']}>
                <div className={styles['personal-information']}>
                    <TextField
                        error={!name}
                        onChange={e => { setName(e.target.value) }}
                        name='from_name' className={styles['field']} required label="Your Name" />
                    <TextField
                        error={!email}
                        onChange={e => { setEmail(e.target.value) }}
                        name='from_email' className={styles['field']} required label="Your Email" />
                </div>

                <TextField
                    error={!message}
                    onChange={e => { setMessage(e.target.value) }}
                    name='message'
                    label="Message"
                    multiline
                    rows={4}
                    required
                />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* <Alert severity="error"></Alert> */}
                <div></div>
                <Button onClick={event => { sendEmail(event) }} sx={{ minWidth: "200px" }} variant="contained">Send</Button>
            </div>
        </Box>
    )
}