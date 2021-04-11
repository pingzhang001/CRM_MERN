import React from 'react'
import PropTypes from 'prop-types'
import './message-history.style.css'

export default function MessageHistory({ msg }) {
  // console.log(msg)
  const renderedContent = msg.length > 0 ? msg.map((m, i) =>
      <div className="message-history mt-3" key={i}>
        <div className="send font-weight-bold text-secondary">
          <div className="sender">{ m.messageBy}</div>
          <div className="date">{m.date }</div>
        </div>
        <div className="message">{ m.message}</div>
      </div>
    ):<h2>This ticket has no message ...!</h2>

  return (
    <div>{renderedContent}</div>
  )
}

MessageHistory.propTypes = {
  msg:PropTypes.array.isRequired
}
