import styles from './styles.module.css';
import { ReactNode, useState } from 'react';

interface ICarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ReactNode[];
}

export const Carousel = ({ items, ...restProps }: ICarouselProps) => {
    const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);

    const showPrevItem = () => {
        setCurrentIndices((prev) =>
            prev.map((currentIndex) => {
                return currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            })
        );
    };

    const showNextItem = () => {
        setCurrentIndices((prev) =>
            prev.map((currentIndex) => {
                return currentIndex === items.length - 1 ? 0 : currentIndex + 1;
            })
        );
    };

    const isItemInView = (index: number) => {
        return currentIndices.includes(index);
    };

    const getItemClassName = (index: number) => {
        if (!isItemInView(index)) return styles.carouselItemHidden;

        if (index === currentIndices[0]) return styles.carouselItemLeft;
        else if (index === currentIndices[2]) return styles.carouselItemRight;
        else if (index === currentIndices[1]) return styles.carouselItemCenter;
    };

    return (
        <div style={{ height: '100%', width: '100%', position: 'relative' }} {...restProps}>
            {items.map((item, index) => {
                return <CarouselElement key={`carousal-item-${index}`} item={item} className={`${styles.carouselItem} ${getItemClassName(index)}`} />;
            })}
            <button onClick={showPrevItem} className={`${styles.carouselItemNavButton}`} style={{ left: 0 }}>
                <div
                    style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        border: '4px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(207, 207, 207, 0.6)'
                    }}
                >
                    ◀
                </div>
            </button>
            <button onClick={showNextItem} className={`${styles.carouselItemNavButton}`} style={{ right: 0 }}>
                <div
                    style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        border: '4px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(207, 207, 207, 0.6)'
                    }}
                >
                    ▶
                </div>
            </button>
        </div>
    );
};

interface ICarouselElementProps {
    item: ReactNode;
    className: string;
}

const CarouselElement = ({ item, className }: ICarouselElementProps) => {
    return <div className={className}>{item}</div>;
};
