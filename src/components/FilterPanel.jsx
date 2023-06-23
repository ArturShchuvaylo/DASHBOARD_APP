import { useSelector, useDispatch } from 'react-redux';
import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';
import { selectFilters } from '../store/filters/filter-selectore';
import { clearFilter, removeFilter } from '../store/filters/filter-actions';





const FilterPanel = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearFilter)
  }

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter))
  }

  return (
    <>
      {
        (filters.length > 0) ? <Card className="filter-panel">
          <div className="filter-panel-wrapper">

            <Stack>
              {
                filters.map(elem => <Badge key={elem} handleRemoveFilter={() => handleRemoveFilter(elem)} variant="clearable">{elem}</Badge>)
              }
            </Stack>

            <button onClick={handleClear} className='link'>Clear</button>
          </div>
        </Card>
          : null
      }
    </>
  )
}

export { FilterPanel };
