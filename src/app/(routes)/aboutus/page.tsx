import React from 'react'


type Props = {}

export default async function Aboutus({ }: Props) {
    await new Promise((resolve)=> setTimeout(resolve, 3000));
    return (
        <div>Aboutus</div>
    )
}