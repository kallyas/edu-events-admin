import React from 'react'
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

function EnrollmentStudent() {
    return (
        <div className="d-flex flex-wrap">
            <div className="">
           <div className="d-flex flex-column  shadow p-3 mb-5 bg-body rounded">
            <span className="h5">hassan bahati</span>
            <span>Male</span>
            <span>FullStack</span>
            {/* <span>Half paid</span> */}
            <span>0784233762</span>
           </div>
           <div className="d-flex flex-column shadow p-3 mb-5 bg-body rounded">
            <span>Ugandan</span>
            <span>mukisabahati@gmail.com</span>
            <span>Primary school Leaving Certificate</span>
            <span>Beginner</span>
            <span>Employed</span>
           </div>
           </div>

           <div className="mx-3 p-2 border border-4">
            <p>More details</p>
            </div>
        </div>
    )
}

export default EnrollmentStudent
