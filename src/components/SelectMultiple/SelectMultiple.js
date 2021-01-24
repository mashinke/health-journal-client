import React from 'react';
import { useSelect, useMultipleSelection } from 'downshift';
import {
  ButtonsContainer,
  DropDownContainer,
  ItemsList,
  DropDownItemsList,
  DropdownListItem,
  SelectedListItem,
  SelectButton,
  SelectButtonLabel,
  SelectMultipleContainer,
} from '../SelectMultipleComponents/SelectMultipleComponents';
import { DeleteButton } from '../Button/Button';

export default function SelectMultiple(props) {
  const {
    items,
    selectedItems: selectedItemsProp,
    handleSelectedItemsChange,
    show,
    buttonLabel,
  } = props;

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    // reset,
  } = useMultipleSelection(
    {
      onSelectedItemsChange: ({ selectedItems }) => handleSelectedItemsChange(selectedItems),
    },
  );

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect(
    {
      selectedItem: null,
      defaultHighlightedIndex: 0,
      items,
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges;
        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
            };
          default:
            break;
        }
        return changes;
      },
      // eslint-disable-next-line no-shadow
      onStateChange: ({ type, selectedItem }) => {
        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            if (selectedItem) {
              addSelectedItem(selectedItem);
            }
            break;
          default:
            break;
        }
      },
    },
  );

  return (
    <SelectMultipleContainer>
      <ItemsList>
        {
          selectedItemsProp.map((item, index) => (
            <SelectedListItem
              key={`selected-item-${item.id} `}
              {...getSelectedItemProps({ item, index })}
            >
              {item.name}
              <DeleteButton
                onClick={(event) => {
                  event.stopPropagation();
                  removeSelectedItem(item);
                }}
              >
                &#10005;
              </DeleteButton>
            </SelectedListItem>
          ))
        }
      </ItemsList>
      {
        show
        && (
        <DropDownContainer>
          <ButtonsContainer>
            <SelectButton
              {
              ...getToggleButtonProps(
                getDropdownProps({ preventKeyAction: isOpen }),
              )
              }
            >
              <SelectButtonLabel {...getLabelProps()}>
                {(selectedItem && selectedItem.name) || buttonLabel}
              </SelectButtonLabel>
            </SelectButton>
            {/* <SelectButton onClick={() => reset()}>
              Reset
          </SelectButton> <- this needs to be fixed */}
          </ButtonsContainer>
          <DropDownItemsList {...getMenuProps()}>
            {
              items.map((item, index) => (
                <DropdownListItem
                  isHighlighted={highlightedIndex === index}
                  key={item.id}
                  {...getItemProps({ item, index })}
                >
                  {item.name}
                </DropdownListItem>
              ))
            }
          </DropDownItemsList>
        </DropDownContainer>
        )
      }
    </SelectMultipleContainer>
  );
}
