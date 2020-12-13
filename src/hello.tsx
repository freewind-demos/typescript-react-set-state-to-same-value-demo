import React, { FC, useState } from 'react';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  console.log('### render Hello')

  const [name, setName] = useState('')
  return <div>
    <h1>Hello {name}</h1>
    <button onClick={() => setName('react')}>set state to same value</button>
  </div>;
}
