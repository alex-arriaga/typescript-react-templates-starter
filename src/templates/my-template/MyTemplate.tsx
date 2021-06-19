import { ReactElement, MouseEvent } from 'react'

type Props = {
  message: string
}

const MyTemplate = ({ message }: Props): ReactElement => {
  const handleClick = (e: MouseEvent) => {
    console.log(`Click on ${e.target}`)
  }
  return (
    <>
      <div>Hello {message}</div>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  )
}

export default MyTemplate
