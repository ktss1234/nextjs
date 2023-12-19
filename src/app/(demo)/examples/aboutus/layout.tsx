import React from 'react'
import Aboutus from './page';

type Props = { children: React.ReactNode }

export default function
    AboutusLayout({ children }: Props) {
    return (
        <div>
            <h4>Section</h4>
            {children}
        </div>
    )
}