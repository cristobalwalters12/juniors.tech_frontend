import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ReactSelect, { components } from 'react-select'

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <MagnifyingGlassIcon width='1.25em' strokeWidth={1} />
    </components.DropdownIndicator>
  )
}

const ValueContainer = ({ children, ...props }) => {
  const { placeholder, menuIsOpen, isHovered } = props.selectProps
  return (
    <div className='p-3'>
      <Typography
        className={`text-sm font-normal my-0 py-0 ${
          menuIsOpen || isHovered ? 'text-accent-light' : 'text-grey-dark'}`
        }
        >{placeholder}</Typography>
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    </div>
  )
}

const MultiValue = ({ ...props }) => {
  const { menuIsOpen, isHovered } = props.selectProps
  return (
    <components.MultiValue
      {...props}
      className={`${
        menuIsOpen || isHovered
        ? 'bg-accent-dhover text-grey-dark'
        : 'bg-primary-dark text-accent-light'
      }`}
    />
  )
}

const Placeholder = ({ children, ...props }) => {
  return (
    <components.Placeholder {...props}>
      <Typography className='text-sm'>Cualquiera</Typography>
    </components.Placeholder>
  )
}
const SidebarSelect = ({ isMulti = false, options, placeholder, queryParamName }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isHovered, setIsHovered] = useState(false)
  const decodedValue = decodeURIComponent(searchParams.get(queryParamName))
  const value = decodedValue !== 'null'
    ? isMulti
      ? decodedValue.split(',').map(currVal => options.find(option => option.value === currVal))
      : options.find(option => option.value === decodedValue)
    : ''

  const handleFilterChange = (selectedOption, actionMeta) => {
    if (actionMeta === undefined) return
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      if (actionMeta.action === 'clear') {
        newSearchParams.delete(queryParamName)
      } else if (actionMeta.action === 'select-option' || actionMeta.action === 'remove-value') {
        const newValue = isMulti ? selectedOption.map(option => option.value).join(',') : selectedOption.value
        newSearchParams.set(queryParamName, encodeURIComponent(newValue))
      }
      return newSearchParams
    })
  }

  const makeItHovered = () => setIsHovered(true)
  const makeItUnhovered = () => setIsHovered(false)
  return (
          <div
            onMouseEnter={makeItHovered}
            onMouseLeave={makeItUnhovered}
          >
            <ReactSelect
              menuPlacement='top'
              placeholder={placeholder}
              isHovered={isHovered}
              components={{ DropdownIndicator, ValueContainer, Placeholder, MultiValue }}
              isSearchable
              noOptionsMessage={() => 'No hay coincidencias'}
              isMulti={isMulti}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  color: state.isFocused ? '#FFFFFF' : '#0F171E',
                  backgroundColor: state.isFocused || isHovered ? '#1C37A5' : '#0F171E',
                  border: 'none'
                }),
                menu: (provided, state) => ({
                  ...provided,
                  backgroundColor: '#1C37A5'
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: '#FFFFFF',
                  backgroundColor: state.isFocused ? '#152774' : 'transparent'
                }),
                input: (provided, state) => ({
                  ...provided,
                  color: '#FFFFFF',
                  margin: 0,
                  padding: 0
                }),
                singleValue: (provided, state) => ({
                  ...provided,
                  color: isHovered && !state.isFocused ? '#FFFFFF' : '#8291A1',
                  margin: 0,
                  padding: 0
                }),
                multiValue: (styles, state) => ({
                  ...styles,
                  backgroundColor: 'transparent'
                }),
                multiValueLabel: (styles, state) => ({
                  ...styles,
                  color: '#FFFFFF'
                }),
                multiValueRemove: (styles, state) => ({
                  ...styles,
                  color: '#8291A1',
                  ':hover': {
                    backgroundColor: '#2C3847',
                    color: '#FFFFFF'
                  }
                }),
                placeholder: (base, state) => ({
                  ...base,
                  fontSize: '1em',
                  color: isHovered && !state.isFocused ? '#FFFFFF' : '#8291A1',
                  margin: 0,
                  padding: 0
                }),
                indicatorSeparator: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isFocused || isHovered ? '#FFFFFF' : '#1C37A5',
                  '&:hover': {
                    color: '#FFFFFF'
                  }
                }),
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  color: state.isFocused || isHovered ? '#FFFFFF' : '#8291A1',
                  '&:hover': {
                    color: '#FFFFFF'
                  }
                }),
                clearIndicator: (provided, state) => ({
                  ...provided,
                  color: state.isFocused || isHovered ? '#FFFFFF' : '#1C37A5',
                  '&:hover': {
                    color: '#FFFFFF'
                  }
                }),
                valueContainer: (provided, state) => ({
                  ...provided,
                  // backgroundColor: 'red',
                  borderColor: 'yellow',
                  margin: 0,
                  marginTop: '-4px',
                  padding: 0
                })
              }}
              isClearable
              className='w-full'
              value={value}
              options={options}
              onChange={handleFilterChange}
            />
          </div>
  )
}

export default SidebarSelect
