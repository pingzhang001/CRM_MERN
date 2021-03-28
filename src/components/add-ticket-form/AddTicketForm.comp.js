import React from 'react'
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

import './add-ticket-form.style.css'

export default function AddTicketForm({ handleOnSubmit, handleOnChange, frmData,frmError }) {
  // console.log(frmData)
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Subject</Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Issue Found</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmData.detail}
            rows="5"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>Add</Button>
      </Form>
    </Jumbotron>
  )
}

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  frmError: PropTypes.object.isRequired,
}
