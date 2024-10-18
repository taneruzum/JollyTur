import React from 'react';
import Icon from '.';
import iconsPack from './icon';

const IconComponent: React.FC<{ name: keyof typeof iconsPack; alt?: string; className?: string }> = ({ name, alt, className }) => {
    return <Icon src={iconsPack[name]} alt={alt} className={className} />;
};

export default IconComponent; 