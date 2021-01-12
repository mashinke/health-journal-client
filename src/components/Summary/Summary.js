import React from 'react';
import styled from 'styled-components';
import SummaryItem from '../SummaryItem/SummaryItem';

const SummaryContainer = styled.div`
  display: flex;
`;

function Summary(props) {
  return (
    <section>
      <h3>Summary</h3>
      <SummaryContainer>
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
      </SummaryContainer>
    </section>
  )
}

export default Summary;