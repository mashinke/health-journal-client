import React from 'react';
import { useSelect } from 'downshift';
import {
  ItemsList,
  DropdownListItem,
  SelectSingleContainer,
  SelectSingleButton,
  SelectSingleButtonContainer,
} from '../SelectSingleComponents/SelectSingleComponents';

function SelectSingle(props) {
  const {
    items,
    handleSelectItem,
    label,
    StyledLabel,
    buttonLabel,
  } = props;

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: ({ selectedItem }) => handleSelectItem(selectedItem),
  });

  return (
    <>
      {
        StyledLabel
          ? <StyledLabel {...getLabelProps()}>{label}</StyledLabel>

          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          : <label {...getLabelProps()}>{label}</label>
      }
      <SelectSingleContainer>
        <SelectSingleButtonContainer
          isOpen={isOpen}
        >
          <SelectSingleButton
            type="button"
            {...getToggleButtonProps()}
          >
            {buttonLabel}
          </SelectSingleButton>
        </SelectSingleButtonContainer>
        <div style={{
          position: 'relative',
        }}
        >
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
                  key={`${item}-${item.value}`}
                  {...getItemProps({ item, index })}
                >
                  {item.label}
                </DropdownListItem>
              ))}
          </ItemsList>
        </div>
      </SelectSingleContainer>
    </>
  );
}

export default SelectSingle;
