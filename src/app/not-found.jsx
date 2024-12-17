"use client"

import React from 'react';
import Lottie from 'lottie-react';
import notFoundAnimation from './not-found.json';

export default function NotFound() {
    return (
        <div style={styles.container}>
            <Lottie animationData={notFoundAnimation} loop style={styles.animation} />
            <h1 style={styles.heading}>Oops! Page Not Found</h1>
            <p style={styles.text}>The page you’re looking for doesn’t exist. Let’s get you back on track.</p>
            <button style={styles.button} onClick={() => window.location.href = '/'}>Go Home</button>
        </div>
    );
}

const styles = {
    container: { textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' },
    animation: { width: '300px', margin: '0 auto' },
    heading: { fontSize: '2rem', color: '#333' },
    text: { fontSize: '1rem', color: '#666', marginBottom: '20px' },
    button: { padding: '10px 20px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' },
};
