import { ReactElement } from 'react'

type Props = {
  message: string
}

const MyTemplate = ({ message }: Props): ReactElement => {
  return <div>Hello {message}</div>
}

export default MyTemplate
