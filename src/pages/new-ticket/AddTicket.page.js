import React,{useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.com';
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp';

import {shortText} from '../../utils/validation'

const initialFrmDt = {
  subject: '',
  issueDate: "",
  detail: '',
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export default function AddTicket() {

  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmError, setFrmError] = useState(initialFrmError);
  useEffect(() => {}, [frmData,frmError])

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFrmData({
      ...frmData,
      [name]:value,
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const isSubjectValid = await shortText(frmData.subject)
    setFrmError({
      ...initialFrmError,
      subject: !isSubjectValid,
    })
  }
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            frmData={frmData}
            handleOnSubmit={handleOnSubmit}
            frmError={frmError}
          />
        </Col>
      </Row>
    </Container>
  )
}
