// "use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-01
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

import React, { Component } from "react";

// import styled from "styled-components";

// const Wrapper = styled.div`
//   background-color: #ffffff;
//   max-width: 420px;
//   max-height: 200px;
//   padding: 25px;
//   margin: 20px;
//   border-radius: 8px;
//   display: flex;
//   flex-flow: column;
//   justify-content: space-between;
//   transition: 0.4s;
//   :hover {
//     box-shadow: 0 1px 20px 0 rgba(190, 191, 203, 0.68);
//     cursor: pointer;
//   }
// `;


const log = console.log;

class ConfTicketCard extends Component {
  onClick = e => {
    this.props.onClick ? this.props.onClick(e) : null;
  };
  render() {
    const { data } = this.props;
    let eventName = "Event Name Undefined";
    if (data && data.event_name) {
      eventName = data.event_name;
    }

    let opensAt = new Date(Date.now());
    if (data && data.opens_at) {
      opensAt = data.opens_at;
    }
    const month = opensAt.toLocaleString("es-pe", { month: "long" });
    const parsedDate =
      opensAt.getDate() + " " + month + " " + opensAt.getFullYear();

    let orderCode = "xxxxxxxxxx";
    if (data && data.order_code) {
      orderCode = data.order_code;
    }

    let ticketCode = "yyyyyyyyy";
    if (data && data.ticket_code) {
      ticketCode = data.ticket_code;
    }

    let ticketType = "nothing";
    if (data && data.ticket_type) {
      ticketType = data.ticket_type;
    }

    let status = "status undefined";
    if (data && data.status) {
      status = data.status;
    }
    return (
      <Wrapper onClick={this.onClick}>
        <div></div>
      </Wrapper>
    );
  }
}

export default ConfTicketCard;

export {
  ConfTicketCard,
};
