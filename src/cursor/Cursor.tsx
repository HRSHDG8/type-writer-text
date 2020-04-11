import * as React from 'react';
import classNames from '../styles.module.css';
export type CursorProps = {
    color?: string
    blinkSpeed?: any
}

export const Cursor: React.FC<CursorProps> = ({ color = 'rgba(0,0,0,0.87)', blinkSpeed = '0.8s' }) => {
    const style = { '--color': color, '--blinkSpeed': blinkSpeed } as React.CSSProperties;
    return <span className={classNames.blinkingCursor} style={style}>|</span>
}