import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Carousel, FloatingButton } from '../dist/main';

function App() {
    const [count, setCount] = useState(0);
    const items = [reactLogo, viteLogo, reactLogo];
    const CarouselItems = items.map((item, index) => {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '5px' }}>
                <img src={item} width={'50%'} height={'50%'} />
                <h1>Item no ${index + 1}</h1>
            </div>
        );
    });

    return (
        <>
            <div style={{ width: '500px', height: '500px', backgroundColor: 'black' }}>
                <Carousel items={CarouselItems} />
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <FloatingButton buttonColor="skyblue" buttonContent={'R'} buttonPressEffect={true} />
        </>
    );
}

export default App;
