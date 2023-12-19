import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type Props = {}

export default function MUIDemo({ }: Props) {
    return (
        <div> MUIDemo
            <Stack direction="row" spacing={2}>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
}
