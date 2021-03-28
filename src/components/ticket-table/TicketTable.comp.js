import React from 'react'
import { Table } from "react-bootstrap";

export default function TicketTable({tickets}) {

  const renderedContent = tickets.length ? tickets.map((row) => (
        <tr key={ row.id}>
          <td>{row.id}</td>
          <td>ssl issue</td>
          <td>{ row.status}</td>
          <td>{ row.addedAt}</td>
        </tr>
      )): <tr><td colSpan="4" className="text-center">No ticket to show</td></tr>
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>#</td>
          <td>Subjects</td>
          <td>Status</td>
          <td>Opened Date</td>
        </tr>
      </thead>
      <tbody>
        {/* {tickets.length && tickets.map(row => (
          <tr key={ row.id}>
            <td>{row.id}</td>
            <td>ssl issue</td>
            <td>{ row.status}</td>
            <td>{ row.addedAt}</td>
          </tr>
        ))} */}
        {renderedContent}
      </tbody>
    </Table>
  )
}
