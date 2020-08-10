import React, { useState } from 'react'
import ArrowIcon from './svgComponents'
import './dropdownInput.style.scss'

interface ListItem {
  name: string
}

interface Props {
  listItems: ListItem[]
  label?: string
  value?: string
  styles?: {
    wrapper?: {} // wrapper div styles
    label?: {} // label styles
    input?: {} // input styles
    button?: {} // button styles
    list?: {} // ul style
    listITem?: {} // li style
    listItemButton?: {} // list Item Button style
  }
  onChangeInputValue?: (value: string) => void
}

function DropdownInput(props: Props) {
  const { listItems, label, value, onChangeInputValue } = props

  const [inputValue, setInputValue] = useState(value || '')
  const [menuList, setMenuList] = useState<any[]>([])

  const changeInputValue = (value: string) => {
    const hesListItem = listItems.find((item) => item.name === value)
    if (onChangeInputValue && hesListItem) {
      onChangeInputValue(value)
    }
    setInputValue(value)
  }

  const handelChangeInput = (e: any) => {
    e.preventDefault()
    const value = e.target.value
    changeInputValue(value)
    let newArray: ListItem[] = []
    if (value.trim() !== '') {
      newArray = listItems.filter(function (el) {
        return el.name.includes(value)
      })
    }
    setMenuList(newArray)
  }

  const handelClickButton = () => {
    const newMenuArray: ListItem[] = menuList.length > 0 ? [] : [...listItems]
    setMenuList(newMenuArray)
  }

  const handelSelectItem = (e: React.MouseEvent) => {
    const { name } = e.currentTarget as HTMLButtonElement
    if (name) {
      setMenuList([])
      changeInputValue(name)
    }
  }

  const buttonClasses =
    menuList.length > 0
      ? 'tr-dropdown-input__body_button tr-dropdown-input__body_button_active'
      : 'tr-dropdown-input__body_button '

  const labelValue = label ? label + ' :' : ''
  return (
    <div className='tr-dropdown-input' style={props.styles?.wrapper}>
      <div className='tr-dropdown-input__body'>
        <label
          className='tr-dropdown-input__body_label'
          htmlFor='dropdown-input'
          style={props.styles?.label}
        >
          {labelValue}
        </label>
        <input
          type='text'
          autoComplete='off'
          value={inputValue}
          id='dropdown-input'
          onChange={handelChangeInput}
          style={props.styles?.input}
          className='tr-dropdown-input__body_input'
          spellCheck={false}
        />
        <button
          onClick={handelClickButton}
          style={props.styles?.button}
          className={buttonClasses}
        >
          {/* <IconArrowDown /> */}
          <ArrowIcon />
        </button>
      </div>

      <ul className='tr-dropdown-input__list'>
        {menuList.map((item) => {
          return (
            <li key={item.name}>
              <button
                onClick={handelSelectItem}
                name={item.name}
                style={props.styles?.listItemButton}
              >
                {item.name}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DropdownInput
