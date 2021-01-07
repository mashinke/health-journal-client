import React from 'react';
import styled from 'styled-components';
import { useSelect, useMultipleSelection } from 'downshift';

const DropDownListItem = styled.li`
  font-weight: ${props => props.isHighlighted ? 'bold' : ''}
`;

export default function SelectMultiple(props) {
  const {
    items,
    handleSelectedItemsChange
  } = props;
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems } = useMultipleSelection({
      onSelectedItemsChange: ({ selectedItems }) =>
        handleSelectedItemsChange(selectedItems)

    })
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem
  } = useSelect(
    {
      items,
      onStateChange: ({ type, selectedItem }) => {
        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
          case useSelect.stateChangeTypes.MenuBlur:
            if (selectedItem) {
              addSelectedItem(selectedItem)
              selectItem(null)
            }
            break;
          default:
            break;
        }
      }
    }
  );

  return (
    <div>
      <h4>
        <label {...getLabelProps()}>{props.label}</label>
      </h4>
      {
        selectedItems.map((selectedItem, index) => (
          <span
            key={`selected-item-${index}`}
            {...getSelectedItemProps({ selectedItem, index })}
          >
            {selectedItem.name}
            <span
              onClick={() => removeSelectedItem(selectedItem)}
            >
              &#10005;
            </span>
          </span>
        ))
      }
      <button
        {...getToggleButtonProps(getDropdownProps({ preventKeyAction: isOpen }))}
      >
        {(selectedItem && selectedItem.name) || props.buttonLabel}
      </button>
      <ul {...getMenuProps()}>
        {
          isOpen &&
          items.map((item, index) => (
            <DropDownListItem
              isHighlighted={highlightedIndex === index}
              key={`${item.id}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.name}
            </DropDownListItem>
          ))
        }
      </ul>
    </div>
  )
}