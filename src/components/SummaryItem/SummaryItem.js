import React from 'react';
import styled from 'styled-components';

const SummaryItemContainer = styled.div`
  background-color: ${props => props.theme.primary.light};
  border: 1px solid ${props => props.theme.primary.dark};
  border-radius: .5rem;
  padding: 1rem;
  margin: 1rem;
`;

function SummaryItem(props) {
  return (
    <SummaryItemContainer>
      {props.children}
    </SummaryItemContainer>
  )
}

export default SummaryItem;