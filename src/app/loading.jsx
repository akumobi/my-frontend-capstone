import React from 'react';
import { Player } from 'lottie-react';
import loadingAnimation from './loading.json';

export default function Loading() {
    return (
        <div style={styles.container}>
            <Player
                autoplay
                loop
                src={loadingAnimation}
                style={styles.animation}
            />
            <p style={styles.text}>Loading... Please wait</p>
        </div>
    );
}

const styles = {
    container: { textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' },
    animation: { width: '200px', height: '200px', margin: '0 auto' },
    text: { fontSize: '1rem', color: '#666', marginTop: '10px' },
};
