import { ReactNode } from 'react';
import styles from './styles.module.css';

interface IFloatingButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    buttonColor: string;
    buttonContent: ReactNode;
    buttonPressEffect?: boolean;
}

export const FloatingButton = (props: IFloatingButtonProps) => {
    const { buttonColor, buttonContent, buttonPressEffect = false, className, style, ...restProps } = props;
    return (
        <div className={`${className} ${styles.floatingButton} ${buttonPressEffect ? styles.floatingButtonPressEffect : ''}`} style={{ ...style, backgroundColor: buttonColor }} {...restProps}>
            {buttonContent}
        </div>
    );
};
