# Neko Chan UI

![Neko Chan UI Logo](/src/assets/Neko_Chan.png 'Neko Chan UI Logo')

This is a small collection of lightweight reusable components for react/typescript projects.

## Usage

`npm install neko-chan-ui`

## Components

### Carousel

An infinite scroll carousel. Create your own template items array that need to be displayed and use the Carousel component to have an awesome viewing experience.

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

<video width="320" height="240" controls>
  <source src="./src/assets/carousel.mp4" type="video/mp4">
</video>

### Floating Button

## Future Work

Add more resubale components and add ability to use the component code directly without having to install the library (in cases when you just need one component).
