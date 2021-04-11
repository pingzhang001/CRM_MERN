import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.com'
import tickets from '../../assets/data/dummy-tickets.json'
import MessageHistory from "../../components/message-history/MessageHistory.comp";
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp'
import {useParams} from 'react-router-dom'

// const ticket = tickets[0]
export default function Ticket() {
  const { tId } = useParams()
  const history = Boolean(tickets[tId-1].history)? tickets[tId-1].history : []
  const [message, setMessage] = useState('')
  const [ticket, setTicket] = useState(tickets[tId-1])
  useEffect(() => {
    // setTicket(tickets.filter((t) => {
    //   return t.id === tId-1
    // }))
  }, [message, tId])

  const handleOnChange = (e) => {
    setMessage(e.target.value)
    alert(e.target.value)
  }
  
  const handleOnSubmit = () => {
    alert(message)
  }
  // console.log(message)
  // console.log(tId)

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: { ticket.subject}</div>
          <div className="date">Ticket Opened: { ticket.addedAt}</div>
          <div className="status">Status: { ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message} 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  )
}
