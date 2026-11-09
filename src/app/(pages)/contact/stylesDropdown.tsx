'use client'
import Select from 'react-select';

interface StylesDropdownProps {
  options: { value: string, label: string }[];
}

const StylesDropdown = ({options}: StylesDropdownProps) => {
  return (
    <Select
            options={options}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                padding: '.5rem',
                border: '2px solid var(--primary)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--terchiary)',
                color: "var(--primary)",
                cornerShape: "squircle",
                borderColor: 'var(--primary)',
                '&:hover': {
                  borderColor: 'var(--primary)', // Hover color
                },
              }),
              dropdownIndicator: (base, state) => ({
                ...base,
                color: 'var(--primary)',
                transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none', // Rotates on open
                transition: 'all .2s ease',
              }),
              indicatorSeparator: (base) => ({
                ...base,
                backgroundColor: 'var(--primary)',
              }),
              placeholder: (base) => ({
                ...base,
                color: 'var(--color-gray-600)',
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? 'var(--primary)' : 'var(--terchiary)',
                color: state.isFocused ? '#fff' : '#000',
                cursor: 'pointer',

                ':not(:last-child)': {
                  borderBottom: '1px solid #777',
                },

                ':active': {
                  ...base[':active'],
                  backgroundColor: 'var(--primary)',
                }
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'var(--terchiary)',
                border: '2px solid #000',
                boxShadow: 'var(--shadow-small)',
                width: '85%'
              })
            }}
           />
  )
}

export default StylesDropdown;