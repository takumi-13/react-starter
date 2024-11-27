import { Dispatch, SetStateAction } from 'react'

type Test1Props = {
  count: number
  msg: string
  setCount: Dispatch<SetStateAction<number>>
}
const Test1 = (props: Test1Props) => {
  return (
    <div className="m-4">
      <h1>{props.msg}</h1>
      <h1>{props.count}</h1>
      <button
        className="bg-orange-400 rounded-md p-2"
        onClick={() => props.setCount(props.count + 1)}
      >
        add Test1
      </button>
    </div>
  )
}

export default Test1
