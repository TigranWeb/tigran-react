import React from 'react'
import TR from 'tigran-react'
import 'tigran-react/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        margin: '40px'
      }}
    >
      <TR.DropdownInput
        listItems={[{ name: 'list item 1' }, { name: 'list item 2' }]}
        label={'blend'}
        onChangeInputValue={(value: string) => {
          console.log(value)
        }}
      />
    </div>
  )
}

export default App
