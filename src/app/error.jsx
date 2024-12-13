"use client"
import Link from 'next/link';
import React from 'react';

export default function Error({ error, reset }) {
    const supportEmail = "akumobi@gmail.com";
    const emailSubject = encodeURIComponent("Error Report");
    const emailBody = encodeURIComponent(
        `Hi Support Team,\n\nI encountered the following error:\n\nError Message: ${error.message || "Unknown"}\n\nPlease assist.\n\nThanks!`
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Something Went Wrong!</h1>
            <p style={styles.text}>
                Error Code: <strong>{error.code || "Unknown"}</strong>
            </p>
            <p style={styles.text}>We’re working to fix the issue. Try again or contact support.</p>
            <div style={styles.actions}>
                <button style={styles.retryButton} onClick={reset}>
                    Retry
                </button>
                <Link href={`mailto:${supportEmail}?subject=${emailSubject}&body=${emailBody}`} style={styles.link}>
                    Contact Support
                </Link>
            </div>
        </div>
    );
}

const styles = {
    container: { textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif', color: '#333' },
    heading: { fontSize: '2rem', marginBottom: '20px' },
    text: { fontSize: '1rem', marginBottom: '10px' },
    actions: { display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' },
    retryButton: { padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' },
    link: { color: '#007BFF', textDecoration: 'none', padding: '10px', border: '1px solid #007BFF', borderRadius: '5px' },
};
