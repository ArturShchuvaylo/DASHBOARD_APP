import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiablePositions } from '../store/positions/position-selectors';
// import { addFilter } from './store/filters/filter-actions';
import { addFilter } from '../store/filters/filter-actions';
import { selectFilters } from '../store/filters/filter-selectore';


const JobList = () => {
  const currentFilter = useSelector(selectFilters);

  const positions = useSelector((state) => selectVisiablePositions(state, currentFilter))

  const dispatch = useDispatch();


  const hadleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition hadleAddFilter={hadleAddFilter} key={item.id} {...item} />
      ))}
    </div>
  )
}

export default JobList;