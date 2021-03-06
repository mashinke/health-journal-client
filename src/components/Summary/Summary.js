import React from 'react';
import {
  SummaryListHeading,
  SummaryContainer,
  SummaryListContainer,
  SummaryItemContainer,
  SummaryItemHeading,
  SummaryItemBody,
  SummaryItemBodyContainer,
} from '../RecordDisplayComponents/RecordDisplayComponents';

function Summary(props) {
  const { records } = props;
  const recordDays = records.reduce((hash, record) => {
    const recordDate = new Date(record.created).toLocaleDateString();
    if (hash[recordDate]) return { ...hash, recordDate: hash[recordDate] + 1 };
    return { ...hash, recordDate: 1 };
  }, {});

  let mostConsecutiveDays = 0;

  if (records.length > 0) {
    const lastDate = new Date(props.records[0].created)
      .toLocaleDateString();
    const firstDate = new Date(props.records[props.records.length - 1].created)
      .toLocaleDateString();

    let currentDate = firstDate;
    let mostSoFar = 0;
    let currentCount = 1;

    while (currentDate !== lastDate) {
      currentDate = new Date(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
      currentDate = currentDate.toLocaleDateString();
      if (recordDays[currentDate]) currentCount += 1;
      if (currentCount > mostSoFar) mostSoFar = currentCount;
    }
    if (currentCount > mostSoFar) mostSoFar = currentCount;
    mostConsecutiveDays = mostSoFar;
  }

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
          <SummaryItemBodyContainer>
            <SummaryItemBody>
              {records.length}
            </SummaryItemBody>
          </SummaryItemBodyContainer>
        </SummaryItemContainer>
        <SummaryItemContainer>
          <SummaryItemHeading>
            Days with at least one entry:
          </SummaryItemHeading>
          <SummaryItemBodyContainer>
            <SummaryItemBody>
              {Object.keys(recordDays).length}
            </SummaryItemBody>
          </SummaryItemBodyContainer>
        </SummaryItemContainer>
        <SummaryItemContainer>
          <SummaryItemHeading>
            Most consecutive days with at least one entry:
          </SummaryItemHeading>
          <SummaryItemBodyContainer>
            <SummaryItemBody>
              {mostConsecutiveDays}
            </SummaryItemBody>
          </SummaryItemBodyContainer>
        </SummaryItemContainer>
      </SummaryListContainer>
    </SummaryContainer>
  );
}

Summary.defaultProps = {
  records: [],
};

export default Summary;
