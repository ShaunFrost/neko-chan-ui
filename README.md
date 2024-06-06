# Neko Chan UI

![Neko Chan UI Logo](/src/assets/Neko_Chan.png 'Neko Chan UI Logo')

This is a small collection of lightweight reusable components for react/typescript projects.

## Usage

`npm install neko-chan-ui`

## Components

### Carousel

An infinite scroll carousel. Create your own template items array that need to be displayed and use the Carousel component to have an awesome viewing experience.

#### Usage

```javascript
import { Carousel } from 'neko-chan-ui';

const images = [
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'
];

const carousel_items = images.map((image, index) => {
    return (
        <div style={{ width: '80%', height: '80%', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <h1>{`Pokemon #${index + 1}`}</h1>
            <img src={image} height={'80%'} width={'80%'} />
        </div>
    );
});

function App() {
    return (
        <div className="main">
            <Carousel items={carousel_items} />
        </div>
    );
}

export default App;
```

#### Demo

![Carousel Demo](/src/assets/carousel.gif 'Carousel Demo')

### Floating Button

A floating button component. Attributes `buttonColor` to set color of the floating button, `buttonContent` to set what goes inside the button like an icon, a symbol, a character etc,
`buttonPressEffect` to set if you want to have a button press effect when you click the button

#### Usage

```javascript
import { FloatingButton } from 'neko-chan-ui';
import { FaAnchorCircleCheck } from 'react-icons/fa6';
import { useRef } from 'react';

function App() {
    const mainDivRef = useRef(null);
    const handleClick = () => {
        if (!mainDivRef.current) return;
        mainDivRef.current.style.background = 'lightgreen';
    };
    return (
        <div className="main" ref={mainDivRef}>
            <FloatingButton buttonColor="skyblue" buttonContent={<FaAnchorCircleCheck />} buttonPressEffect={true} onClick={handleClick} />
        </div>
    );
}

export default App;
```

#### Demo

![Floating Button Demo](/src/assets/floating-button-demo.gif 'Floating Button Demo')

### Multi Select

A multi select component. Attributes `options` is an array of selectable options which have a label and value, `values` is a state variable that holds an array of selected values, `onAddOption` is a
method to add a value to the state variable _values_, `onRemoveOption` is a method to remove a value from the state variable _values_, `onRemoveAll` is a method to remove all the selected values in
the state variable _values_

#### Usage

```javascript
import { MultiSelect } from 'neko-chan-ui';
import { useState } from 'react';

function App() {
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
        <div className="main">
            <MultiSelect options={multiselectOptions} values={multiSelectValues} onAddOption={onAddOption} onRemoveOption={onRemoveOption} onRemoveAll={onRemoveAll} />
        </div>
    );
}

export default App;
```

#### Demo

![MultiSelect Demo](/src/assets/multi-select.gif 'MultiSelect Demo')

## Future Work

Add more resubale components and add ability to use the component code directly without having to install the library (in cases when you just need one component).
