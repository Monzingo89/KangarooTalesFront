import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../../redux/rootReducer';
import {
  CardNameSearch,
  CardStatSearch,
  ColorSelector,
  OracleTextSearch,
  PriceTypeSelector,
  RaritySelector,
  SortSelector,
  TypeSelector,
  ViewModeSelector,
} from '../../../search/forms/connected-form-components';
import {
  addCardStatSearch,
  removeCardStatSearch,
  reset,
  searchAttributeOptions,
  setCardColors,
  setCardRarities,
  setCardSort,
  setCardSortDirection,
  setCardStatSearches,
  setCardTypes,
  setColorType,
  setComparator,
  setOracleTextQuery,
  setPriceType,
  setSearchAttribute,
  setSearchQuery,
  setViewMode,
  setViewSubject,
  sortByOptions,
} from '../setCollectionSlice';

// TODO: Add headers to this thing
const SetCollectionSearchForm: React.FC = () => {
  const { isFormVisible, viewSubject } = useSelector((state: RootState) => state.setCollection);
  const reduxSlice = 'setCollection';
  const dispatch = useDispatch();

  return (
    <>
      {isFormVisible && viewSubject === 'cards' && (
        <>
          <ViewModeSelector
            showSubjectChangeSection={false}
            reduxSlice={reduxSlice}
            setViewMode={setViewMode}
            setViewSubject={setViewSubject}
          />
          <PriceTypeSelector reduxSlice={reduxSlice} setPriceType={setPriceType} />
          <CardNameSearch reduxSlice={reduxSlice} setSearchQuery={setSearchQuery} />
          <OracleTextSearch reduxSlice={reduxSlice} setOracleTextQuery={setOracleTextQuery} />
          <TypeSelector reduxSlice={reduxSlice} setCardTypes={setCardTypes} />
          <ColorSelector reduxSlice={reduxSlice} setColorType={setColorType} setCardColors={setCardColors} />
          <RaritySelector reduxSlice={reduxSlice} setCardRarities={setCardRarities} />
          <CardStatSearch
            reduxSlice={reduxSlice}
            addCardStatSearch={addCardStatSearch}
            removeCardStatSearch={removeCardStatSearch}
            setCardStatSearches={setCardStatSearches}
            setComparator={setComparator}
            setSearchAttribute={setSearchAttribute}
            searchAttributeOptionsOverride={searchAttributeOptions}
          />
          <SortSelector
            sortByOptions={sortByOptions}
            reduxSlice={reduxSlice}
            setCardSort={setCardSort}
            setCardSortDirection={setCardSortDirection}
          />
          <ButtonWrapper>
            <Button size="small" fullWidth variant="contained" color="secondary" onClick={() => dispatch(reset())}>
              Reset Search
            </Button>
          </ButtonWrapper>
        </>
      )}
    </>
  );
};

const ButtonWrapper = styled.div({
  paddingLeft: '8px',
  paddingRight: '8px',
});

export default SetCollectionSearchForm;
