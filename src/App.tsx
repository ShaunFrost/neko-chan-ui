import logo from './assets/Neko_Chan.png';
import { Carousel, FloatingButton, MultiSelect } from '../dist/main';
import { useState } from 'react';

function App() {
    const items = [logo, logo, logo];
    const CarouselItems = items.map((item, index) => {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '5px' }}>
                <img src={item} width={'50%'} height={'50%'} />
                <h1>Item no ${index + 1}</h1>
            </div>
        );
    });

    const multiselectOptions = [
        {
            label: 'Charmander',
            value: 'Charmander'
        },
        {
            label: 'Squirtle',
            value: 'Squirtle'
        },
        {
            label: 'Mew',
            value: 'Mew'
        },
        {
            label: 'Bulbasaur',
            value: 'Bulbasaur'
        },
        {
            label: 'Greninja',
            value: 'Greninja'
        },
        {
            label: 'Celebi',
            value: 'Celebi'
        },
        {
            label: 'Heracross',
            value: 'Heracross'
        },
        {
            label: 'Typhlosion',
            value: 'Typhlosion'
        }
    ];

    const [multiSelectValues, setMultiSelectValues] = useState([multiselectOptions[0].value]);
    const onAddOption = (option: string) => {
        setMultiSelectValues((prev) => [...prev, option]);
    };
    const onRemoveOption = (option: string) => {
        setMultiSelectValues((prev) => prev.filter((value) => value !== option));
    };
    const onRemoveAll = () => {
        setMultiSelectValues([]);
    };

    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <MultiSelect options={multiselectOptions} values={multiSelectValues} onAddOption={onAddOption} onRemoveOption={onRemoveOption} onRemoveAll={onRemoveAll} />
            </div>
            <div style={{ width: '500px', height: '500px', backgroundColor: 'black' }}>
                <Carousel items={CarouselItems} />
            </div>

            <FloatingButton buttonColor="skyblue" buttonContent={'R'} buttonPressEffect={true} />
        </>
    );
}

export default App;
