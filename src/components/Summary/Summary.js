import React from 'react';
import {
  SummaryContainer,
  SummaryItemContainer
} from '../RecordDisplayComponents/RecordDisplayComponents';


function Summary(props) {
  return (
    <SummaryContainer>
      <SummaryItemContainer>Item one</SummaryItemContainer>
      <SummaryItemContainer>Item two</SummaryItemContainer>
      <SummaryItemContainer>Item three</SummaryItemContainer>
    </SummaryContainer>
  )
}

export default Summary;