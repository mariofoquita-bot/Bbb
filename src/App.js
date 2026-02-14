import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [audio] = useState(new Audio());
    const [volume, setVolume] = useState(1); // Volume range between 0 and 1
    const [recordings, setRecordings] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    const playSound = (url) => {
        audio.src = url;
        audio.play();
    };

    const startRecording = async () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunks.current.push(event.data);
            };  
            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(audioChunks.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(blob);
                setRecordings((prev) => [...prev, url]);
                audioChunks.current = [];
            };
            mediaRecorderRef.current.start();
            setIsRecording(true);
        } else {
            console.error('getUserMedia not supported in this browser');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Soundboard App</h1>
            <div>
                <button onClick={() => playSound('path/to/sound1.mp3')}>Play Sound 1</button>
                <button onClick={() => playSound('path/to/sound2.mp3')}>Play Sound 2</button>
                <button onClick={() => playSound('path/to/sound3.mp3')}>Play Sound 3</button>
                <button onClick={isRecording ? stopRecording : startRecording}>{isRecording ? 'Stop Recording' : 'Start Recording'}</button>
                <input type='range' min='0' max='1' step='0.1' value={volume} onChange={(e) => setVolume(e.target.value)} />
                <label>Volume: {Math.round(volume * 100)}%</label>
            </div>
            <h2>Recordings</h2>
            <ul>
                {recordings.map((recording, index) => (
                    <li key={index}><audio controls src={recording} /></li>
                ))}
            </ul>
        </div>
    );
};

export default App;
