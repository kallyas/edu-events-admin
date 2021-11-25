import React, { useEffect, useState } from 'react'
// import {
//     Col,
//     Row,
//     Form,
//     Button,
//     ButtonGroup,
//     Breadcrumb,
//     InputGroup,
//     Dropdown,
//   } from "@themesberg/react-bootstrap";
import MoonLoader from 'react-spinners/MoonLoader';
import { MiniProfileCardWidget,DescriptionWidget,AcquisitionWidget } from '../components/Widgets';

import {useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { enrollmentSelector } from "../features/enrollment/enrollmentSlice";
// import { set } from 'immer/dist/internal';

function EnrollmentStudent() {
    let { id } = useParams();
const { loading,  data } = useSelector(enrollmentSelector);
const [filteredData, setFilteredData] = useState()
console.log(filteredData);


useEffect(() => {
const dataPull = data.filter((info)=>info.id === id)
setFilteredData(dataPull);
}, [data, id])

    return (
        <div className="d-flex flex-wrap">
           {
           !filteredData ? (
                <div className="events-loader">
                  <MoonLoader loading={loading} size={50} />
                </div>
              ) : (
            <>
            <div className="d-flex flex-column">
             <MiniProfileCardWidget
            firstName= {filteredData[0].firstName}
            lastName= {filteredData[0].lastName}
            phoneNumber= {filteredData[0].phoneNumber}
            country=  {filteredData[0].country}
            email=  {filteredData[0].email}
            experience= {filteredData[0].experience}
             />
           <DescriptionWidget
           title="Details"
           track= {filteredData[0].track}
           education= {filteredData[0].education}
           employment=  {filteredData[0].employment}
           referredFrom=  {filteredData[0].referredFrom}
           />
          </div>
          <div className="d-flex flex-column">
           <AcquisitionWidget/>
           <AcquisitionWidget/>
           </div>
            </>
            )}
           
        </div>
    )
}

export default EnrollmentStudent
