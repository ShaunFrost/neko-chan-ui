import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

interface ISelectOption {
    label: string;
    value: string;
}

interface ISelectProps extends React.HTMLAttributes<HTMLDivElement> {
    options: ISelectOption[];
    values: string[];
    onAddOption: (option: string) => void;
    onRemoveOption: (option: string) => void;
    onRemoveAll: () => void;
}

export const MultiSelect = (props: ISelectProps) => {
    const { options, values, onAddOption, onRemoveOption, onRemoveAll, ...restProps } = props;
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [showOptions, setShowOptions] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const isOptionSelected = (value: string) => {
        return values.includes(value);
    };
    const clearSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onRemoveAll();
    };
    const handleOptionClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: ISelectOption) => {
        event.stopPropagation();
        if (!isOptionSelected(option.value)) onAddOption(option.value);
        setShowOptions(false);
    };
    const handleSelectedOptionClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => {
        event.stopPropagation();
        onRemoveOption(value);
    };
    useEffect(() => {
        if (showOptions) setHighlightedIndex(0);
    }, [showOptions]);
    useEffect(() => {
        const toggleSelection = (value: string) => {
            if (values.includes(value)) {
                onRemoveOption(value);
            } else {
                onAddOption(value);
            }
        };
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.target != containerRef.current) return;
            switch (event.code) {
                case 'Enter':
                case 'Space':
                    setShowOptions((prev) => !prev);
                    if (showOptions) toggleSelection(options[highlightedIndex].value);
                    break;
                case 'ArrowUp':
                case 'ArrowDown': {
                    if (!showOptions) {
                        setShowOptions(true);
                        break;
                    }
                    const newIndex = highlightedIndex + (event.code === 'ArrowDown' ? 1 : -1);
                    if (newIndex >= 0 && newIndex < options.length) {
                        setHighlightedIndex(newIndex);
                    }
                    break;
                }
            }
        };
        const containerElement = containerRef.current;
        containerRef.current?.addEventListener('keydown', handleKeydown);

        return () => {
            containerElement?.removeEventListener('keydown', handleKeydown);
        };
    }, [showOptions, highlightedIndex, options, onAddOption, onRemoveOption, values]);
    return (
        <div tabIndex={0} className={styles['multiselect-container']} {...restProps} onClick={() => setShowOptions((prev) => !prev)} onBlur={() => setShowOptions(false)} ref={containerRef}>
            <span className={styles['multiselect-value']}>
                {values.map((value) => {
                    return (
                        <button key={value} className={styles['selected-value']} onClick={(e) => handleSelectedOptionClick(e, value)}>
                            {value}
                            <span className={styles['remove-option']}>&times;</span>
                        </button>
                    );
                })}
            </span>
            <button className={styles['multiselect-clear']} onClick={clearSelection}>
                &times;
            </button>
            <div className={styles['multiselect-divider']}></div>
            <div className={styles['multiselect-show']}></div>
            <ul className={`${styles['multiselect-options']} ${showOptions ? styles.show : ''}`}>
                {options.map((option, index) => {
                    return (
                        <li
                            key={option.label}
                            value={option.value}
                            className={`${styles['multiselect-option']} ${isOptionSelected(option.value) ? styles.selected : ''} ${index === highlightedIndex ? styles.highlighted : ''}`}
                            onClick={(event) => handleOptionClick(event, option)}
                            onMouseEnter={() => setHighlightedIndex(index)}
                        >
                            {option.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
