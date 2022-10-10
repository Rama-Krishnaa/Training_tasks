import React from 'react'

type IProps = {
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isChecked: boolean
}

function FilterButton(props: IProps) {
  return (
    <div>
      <input type='checkbox' checked={props.isChecked} onChange={(e) =>props.handleFilterChange(e)}></input>
      <span>Show {props.isChecked ? 'Remaining' : 'Completed'} tasks</span>
    </div>
  )
}

export default FilterButton
