import { FooterSection } from './styles';
import React, { JSX } from 'react';

interface FooterProps {
    showCopyright?: boolean;
}

export default function Footer({ showCopyright }: FooterProps):JSX.Element {
    return (
        <FooterSection>
            {showCopyright && <p>© 2025 Guadalupe Porra</p>}
        </FooterSection>
    );
}
