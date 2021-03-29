import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.com'
import SearchForm from '../../components/search-form/SearchForm.comp'
import TicketTable from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'

export default function TicketLists() {

  const [str, setStr] = useState('')
  const [displayTickets, setDisplayTickets] = useState(tickets)
  useEffect(() => {
    // searchTicket(str)
  }, [str, displayTickets])

  const handleOnChange = (e) => {
    const {value} = e.target
    setStr(value)
    searchTicket(value)
    // console.log(str, "$$$$$$$$$$$$$$$$$$")
    // console.log(displayTickets, "onChange")
  }

  const searchTicket = strIn => {
    // console.log(str,"*****************")
    const dTickets = tickets.filter(row=>row.subject.toLowerCase().includes(strIn.toLowerCase()))
    // console.log(dTickets,"search")
    setDisplayTickets(dTickets)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="ticket-lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm
            handleOnChange={handleOnChange}
            str = {str}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTickets}/>
        </Col>
      </Row>
    </Container>
  )
}
