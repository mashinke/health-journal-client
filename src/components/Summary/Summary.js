import React from 'react';
import {
  SummaryListHeading,
  SummaryContainer,
  SummaryListContainer,
  SummaryItemContainer,
  SummaryItemHeading,
  SummaryItemBody
} from '../RecordDisplayComponents/RecordDisplayComponents';


function Summary(props) {
  const recordDays = props.records.reduce((hash, record) => {
    const recordDate = new Date(record.created).toLocaleDateString();
    if (hash[recordDate])
      hash[recordDate]++;
    else
      hash[recordDate] = 1;

    return hash;
  }, {})

  return (
    <SummaryContainer>
      <SummaryListHeading>
        Selection Summary:
      </SummaryListHeading>
      <SummaryListContainer>
        <SummaryItemContainer>
          <SummaryItemHeading>
            Total Records Selected:
        </SummaryItemHeading>
          <SummaryItemBody>
            {props.records.length}
          </SummaryItemBody>
        </SummaryItemContainer>
        <SummaryItemContainer>
          <SummaryItemHeading>
            Selected days with at least one entry:
        </SummaryItemHeading>
          <SummaryItemBody>
            {Object.keys(recordDays).length}
          </SummaryItemBody>
        </SummaryItemContainer>
        <SummaryItemContainer>Item three</SummaryItemContainer>
      </SummaryListContainer>
    </SummaryContainer>
  )
}

export default Summary;