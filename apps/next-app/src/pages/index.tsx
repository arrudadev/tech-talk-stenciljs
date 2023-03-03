import { useState } from 'react'

import { MyTextInputCustomEvent } from '@stencil-ui/core'
import { MyHeading, MyText, MyTextInput } from '@stencil-ui/react'

export default function Home() {
  const [text, setText] = useState('');

  function handleChangeText({ detail: value }: MyTextInputCustomEvent<string>) {
    setText(value)
  }

  return (
    <>
      <MyHeading text="Heading Component" />

      <MyText text="Text Component" />

      <MyTextInput value={text} onChangeInput={handleChangeText} />

      <MyText text={text} />
    </>
  )
}
