import { FC } from 'react';

interface IconProps {
    src: string;  
    alt?: string; 
    className?: string;
}

const Icon: FC<IconProps> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} />;
};

export default Icon;