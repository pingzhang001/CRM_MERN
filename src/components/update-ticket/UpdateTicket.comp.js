import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button} from 'react-bootstrap'

export default function UpdateTicket({msg, handleOnChange, handleOnSubmit}) {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply your message here or update the ticket</Form.Text>
      <Form.Control
        name="detail"
        as="textarea"
        row="5"
        value={msg}
        onChange={handleOnChange}
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="info" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
}
