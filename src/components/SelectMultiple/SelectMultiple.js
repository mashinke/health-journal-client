import React from 'react';
import { useSelect, useMultipleSelection } from 'downshift';
import {
  ButtonsContainer,
  DropDownContainer,
  ItemsList,
  ListItem,
  SelectButton,
  SelectButtonLabel,
  SelectMultipleContainer
} from '../SelectMultipleComponents/SelectMultipleComponents';

export default function SelectMultiple(props) {
  const {
    items,
    selectedItems,
    handleSelectedItemsChange

  } = props;

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    reset
  } = useMultipleSelection(
    {
      onSelectedItemsChange: ({ selectedItems }) =>
        handleSelectedItemsChange(selectedItems)
    }
  );

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect(
    {
      selectedItem: null,
      defaultHighlightedIndex: 0,
      items: items,
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges;
        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
            }
          default:
            break;
        }
        return changes;
      },
      onStateChange: ({ type, selectedItem }) => {
        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            if (selectedItem) {
              addSelectedItem(selectedItem)
            }
            break;
          default:
            break;
        }
      }
    }
  );

  return (
    <SelectMultipleContainer>
      <ItemsList>
        {
          selectedItems.map((selectedItem, index) => (
            <ListItem
              key={`selected-item-${index} `}
              {...getSelectedItemProps({ selectedItem, index })}
            >
              {selectedItem.name}
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  removeSelectedItem(selectedItem);
                }}
              >
                &#10005;
            </span>
            </ListItem>
          ))
        }
      </ItemsList>
      {
        props.show
        && <DropDownContainer>
          <ButtonsContainer>
            <SelectButton
              {
              ...getToggleButtonProps(
                getDropdownProps({ preventKeyAction: isOpen }))
              }
            >
              <SelectButtonLabel {...getLabelProps()}>
                {(selectedItem && selectedItem.name) || props.buttonLabel}
              </SelectButtonLabel>
            </SelectButton >
            <SelectButton onClick={() => reset()}>
              Reset
          </SelectButton>
          </ButtonsContainer>
          <ItemsList {...getMenuProps()}>
            {
              items.map((item, index) => (
                <ListItem
                  isHighlighted={highlightedIndex === index}
                  key={`${item.id} ${index} `}
                  {...getItemProps({ item, index })}
                >
                  {item.name}
                </ListItem>
              ))
            }
          </ItemsList>
        </DropDownContainer>
      }
    </SelectMultipleContainer >
  )
}