import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

import styles from "./contact.module.css";
import React, { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import { AlertColor } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


// import globalStyles from "../global.module.css";

interface ToastProps {
    open: boolean,
    message?: string,
    severity?: AlertColor,
}

interface SnackBarProps {
    toast: ToastProps,
    handleClose: () => void,
}

function MySnackBar({ toast, handleClose }: SnackBarProps) {
    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label='close'
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <Snackbar
            open={toast.open}
            autoHideDuration={5000}
            onClose={handleClose}
        >
            <Alert variant="filled" sx={{ width: '100%' }} onClose={handleClose}
                action={action} severity={toast.severity}>
                <Typography variant='button'>
                    {toast?.message}
                </Typography>
            </Alert>
        </Snackbar>
    )
}

export default function SendEmail() {
    const form = useRef<HTMLFormElement>(null);

    // set initial values to empty strings to not trigger errors 
    // when user hasn't entered anything
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");
    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState<ToastProps>({ open: false, message: "", severity: "info" });
    const handleClose = () => {
        setToast((prev) => {
            return { open: false, message: prev.message, severity: prev.severity }
        });

    }

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            // to trigger errors
            setName("");
            setEmail("");
            setMessage("");
            setToast({ open: true, message: "Enter value for required field(s)", severity: "error" });
            return;
        }

        if (form === null || form.current === null) {
            return;
        }

        setLoading(true);
        emailjs
            .sendForm('service_xyi4tga', 'template_9g72zwd', form.current, 'user_qJfCYlCGa3K6U3qX0Y80j')
            .then((result) => {
                setToast({ open: true, message: "Email Sent", severity: "success" });
            }, (error) => {
                console.log(error.text)
                setToast({ open: true, message: "Failed to send email. Please try again later.", severity: "error" });
            })
            .finally(() => {
                setLoading(false);
            })

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
                <div></div>
                {loading
                    ? <LoadingButton className={styles['send-button']} loading={loading} variant="outlined">
                        Sending
                    </LoadingButton>
                    : <Button 
                    className={styles['send-button']} 
                    onClick={event => { sendEmail(event) }} 
                    variant="contained">
                        Send
                        </Button>
                }

            </div>
            <MySnackBar handleClose={handleClose} toast={toast} />
        </Box>
    )
}