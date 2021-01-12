import React from 'react';
import { useSelect, useMultipleSelection } from 'downshift';
import {
  DropDownList,
  DropDownListItem
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
    <>
      {
        selectedItems.map((selectedItem, index) => (
          <span
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
          </span>
        ))
      }
      < button
        hidden={true}
        {
        ...getToggleButtonProps(
          getDropdownProps({ preventKeyAction: isOpen }))
        }
      ></button >

      {
        (items.length !== 0)
        && <>
          <label
            hidden={items.length === 0}
            {...getLabelProps()}
          >{(selectedItem && selectedItem.name) || props.buttonLabel}</label>
          <DropDownList {...getMenuProps()}>
            {
              items.map((item, index) => (
                <DropDownListItem
                  isHighlighted={highlightedIndex === index}
                  key={`${item.id} ${index} `}
                  {...getItemProps({ item, index })}
                >
                  {item.name}
                </DropDownListItem>
              ))
            }
          </DropDownList>
        </>
      }
    </>
  )
}