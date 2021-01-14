import React from 'react';
import { useSelect } from 'downshift';
import {
  ItemsList,
  DropdownListItem,
  SelectSingleContainer,
  SelectSingleButton,
  SelectSingleButtonContainer
} from '../SelectSingleComponents/SelectSingleComponents';

function SelectSingle(props) {
  const {
    items,
    handleSelectItem,
    label,
    StyledLabel,
    buttonLabel
  } = props;

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: ({ selectedItem }) =>
      handleSelectItem(selectedItem)
  })

  return (
    <>
      {
        StyledLabel
          ? <StyledLabel {...getLabelProps()}>{label}</StyledLabel>

          : <label {...getLabelProps()} >{label}</label>
      }
      <SelectSingleContainer>
        <SelectSingleButtonContainer
          isOpen={isOpen}
        >
          <SelectSingleButton
            type="button"
            {...getToggleButtonProps()}>
            {buttonLabel}
          </SelectSingleButton>
        </SelectSingleButtonContainer>
        <ItemsList
          {...getMenuProps()}
          isOpen={isOpen}
        >
          {isOpen
            && items.map((item, index) => (
              <DropdownListItem
                style={
                  highlightedIndex === index
                    ? { backgroundColor: '#bde4ff' }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item.label}
              </DropdownListItem>
            ))}
        </ItemsList>

      </SelectSingleContainer>
    </>
  )
}


export default SelectSingle;