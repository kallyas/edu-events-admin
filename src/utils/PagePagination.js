import { useState } from "react";
import { Pagination } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";


const PagePagination = (props) => {
    const [activeItem, setActiveItem] = useState(1);
    const { totalPages = props.itemsPerPage, size = "md", withIcons = false, disablePrev = false } = props;
  
    const onPrevItem = () => {
      const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;
      setActiveItem(prevActiveItem);
      props.paginate(prevActiveItem);
    };
  
    const onNextItem = (totalPages) => {
      const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;
      setActiveItem(nextActiveItem);
        props.paginate(nextActiveItem);
    };
  
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      const isItemActive = activeItem === number;
  
      const handlePaginationChange = () => {
        setActiveItem(number);
      };
  
      items.push(
        <Pagination.Item active={isItemActive} key={number} onClick={handlePaginationChange}>
          {number}
        </Pagination.Item>
      );
    };
  
    return (
      <Pagination size={size} className="mt-3">
        <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>
          {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "Previous"}
        </Pagination.Prev>
        {items}
        <Pagination.Next onClick={() => onNextItem(totalPages)}>
          {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Next"}
        </Pagination.Next>
      </Pagination>
    );
  };

  export default PagePagination;