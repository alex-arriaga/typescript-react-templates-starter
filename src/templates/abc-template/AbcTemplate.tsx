import { ReactElement, MouseEvent } from 'react'

type Props = {
  message: string
}

const AbcTemplate = ({ message }: Props): ReactElement => {
  const handleClick = (e: MouseEvent) => {
    console.log(`Click on ${e.target} in ABC template`)
  }
  return (
    <div className='abc-tpl-c'>
      <div><strong>Abc</strong> template {message}</div>
      <div>
        <button onClick={handleClick}>Click me # 1</button>
          <button onClick={handleClick}>Click me # 2</button>
      </div>
    </div>
  )
}

export default AbcTemplate
