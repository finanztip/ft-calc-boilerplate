import  { useState } from 'react';
import {TextButton, Paragraph} from '@finanztip/app-components'

export default function TestCalculator() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Paragraph content={`You clicked ${count} times.`} />
      <TextButton title="Click me to count!" onPress={() => setCount(count + 1)}/>
    </div>
  );
}
