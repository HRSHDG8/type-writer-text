import * as React from 'react';
import { Cursor, CursorProps } from './cursor/Cursor';

interface Props {
  text: string,
  animationSpeed: number,
  showCursor: boolean
  cursorProps: CursorProps

}

export const TypeWriterText = ({ text, animationSpeed = 100, cursorProps = { color: 'rgba(0,0,0,0.87)', blinkSpeed: '0.8s' }, showCursor = true }: Props) => {
  const [displayText, setDisplayText] = React.useState('');
  const [index, setIndex] = React.useState(0);

  const upadateText = (splits: string[]) => {
    if (index <= splits.length) {
      setDisplayText(text.substr(0, index));
      console.log(splits, index, splits[index]);
      setIndex(index + 1);
    }
  }

  React.useEffect(() => {
    if (text !== null && text !== undefined) {
      const splits: string[] = text.split("");
      setTimeout(() => { upadateText(splits) }, animationSpeed);
    }
    return clearTimeout();
  }, [index])
  return <span>{displayText} {showCursor ? <Cursor {...cursorProps} /> : null}</span>

}
