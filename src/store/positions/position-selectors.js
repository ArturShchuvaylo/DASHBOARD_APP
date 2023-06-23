export const selectAllPositions = (state) => state.positions;

export const selectVisiablePositions = (state, filters=[])=>{
    console.log(filters);
    if(filters.length === 0 ){
        return state.positions;
    }
    return state.positions.filter((pos)=>{
     const posFilters = [].concat ( pos.role, pos.level, ...pos.languages, ...pos.tools) 
     console.log(`${posFilters} good`);
     return filters.every(elem=> posFilters.includes(elem));
    })
}  