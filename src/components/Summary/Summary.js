import React from 'react';
import styled from 'styled-components';
import SummaryItem from '../SummaryItem/SummaryItem';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Summary(props) {
  return (
    <section>
      <SummaryContainer>
        <SummaryItem>
          total records
        </SummaryItem>
        <SummaryItem>
          
        </SummaryItem>
      </SummaryContainer>
    </section>
  )
}

export default Summary;