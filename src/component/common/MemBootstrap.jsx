npm // src/components/common/MemBootstrap.jsx
import React from 'react';
import { Button } from 'react-bootstrap';

// TypesExample 컴포넌트 정의
export function TypesExample() {
    return (
        <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </>
    );
}


export const LightButton = ({ children, ...props }) => (
    <Button variant="light" {...props}>{children}</Button>
);

export const SecondaryButton = ({ children, ...props }) => (
    <Button variant="secondary" {...props}>{children}</Button>
);
