import * as React from 'react'
// import styles from './styles.module.css'

interface Props {}

const blandMods = [
  { name: 'bland 1' },
  { name: 'bland 2' },
  { name: 'bland 3' },
  { name: 'bland 4' },
  { name: 'bland 5' },
  { name: 'bland 6' }
]

function DropDownInput(props: Props) {
  console.log(props)
  const [bland, setBland] = React.useState('')
  const [blandList, setBlandList] = React.useState<any[]>([])

  const handelChangeInput = (e: any) => {
    const value = e.target.value
    setBland(value)
    if (value.trim() !== '') {
      const newArray = blandMods.filter(function (el) {
        return el.name.includes(value)
      })
      setBlandList(newArray)
    } else {
      setBlandList([])
    }
  }
  const handelClickButton = () => {
    setBlandList(blandMods)
  }

  return (
    <div>
      <div className='App'>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div>
        <label>
          Blend:
          <div>
            <input type='text' value={bland} onChange={handelChangeInput} />
            <button onClick={handelClickButton}> A </button>
          </div>
        </label>
        <ul>
          {blandList.map((item) => {
            return <li key={item.name}>{item.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export const ExampleComponent = () => {
  return <DropDownInput />
  // return <div className={styles.test}>Example Component: {text}</div>
}
