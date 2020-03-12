import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DataDropdown = ({data, onSelectedItemChange}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [selectedItem, setSelectedItem] = useState()

  const handleClick = (item) => {
    setSelectedItem(item.name)
    onSelectedItemChange(item.id)
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            { selectedItem ?? 'Select' }
        </DropdownToggle>
        <DropdownMenu>
            { data.map(v => <DropdownItem key={v.id} onClick={ () => handleClick(v) }>{v.name}</DropdownItem>) }
        </DropdownMenu>
    </Dropdown>
  );
}

export default DataDropdown