import React from 'react';
import { useSelect } from 'downshift';
import {
  DropDownContainer,
  ItemsList,
  DropdownListItem,
  SelectSingleContainer
} from '../SelectComponents/SelectComponents';

function SelectSingle(props) {
  const {
    items,
    handleSelectItem
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
    <SelectSingleContainer>
      <label {...getLabelProps()}>Choose an element:</label>
      <button type="button" {...getToggleButtonProps()}>
        {'Add New Field'}
      </button>
      <DropDownContainer>
        <ItemsList {...getMenuProps()} >
          {
            items.map((item, index) => (
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
      </DropDownContainer>
    </SelectSingleContainer>
  )
}


export default SelectSingle;