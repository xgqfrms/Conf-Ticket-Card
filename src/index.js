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

const log = console.log;

class ConfTicketCard extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   username: "",
    //   avatar: "",
    //   account: "",
    //   date: "",
    //   time: "",
    //   uid: "",
    //   icons: [],
    //   link: "",
    //   host: "",
    //   sponsor: "",
    //   slogan: "",
    // };
  }
  // onClick = (e) => {
  //   log(`click event =`, e);
  // }
  render() {
    const {
      options: {
        username,
        avatar,
        account,
        date,
        time,
        uid,
        icons,
        link,
        host,
        sponsor,
        slogan,
      },
      onClick,
    } = this.props;
    return (
      <section className="conf-ticket-card-container" onClick={onClick}>
        <div className="conf-ticket-card-item">
          <img src={avatar} alt="avatar"/>
          <span>{username}</span>
          <span>{account}</span>
        </div>
        <div className="conf-ticket-card-item">
          <span>{date}</span>
          <span>{time}</span>
          <div>
            {icons.map(icon => <span>{icon}</span>)}
          </div>
        </div>
        <div className="conf-ticket-card-item">
          <span>{host}</span>
          <span>{sponsor}</span>
          <span>{slogan}</span>
          <span>{link}</span>
        </div>
        <div className="conf-ticket-card-item">
          <span>{uid}</span>
        </div>
      </section>
    );
  }
}

export default ConfTicketCard;

export {
  ConfTicketCard,
};
