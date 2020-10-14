# Conf Ticket Card

> react, conf ticket, card component

https://github.com/xgqfrms/Conf-Ticket-Card

https://www.npmjs.com/package/conf-ticket-card


## install

```sh
# conf-ticket-card
$ yarn add conf-ticket-card

# OR
$ npm i conf-ticket-card

```

## usage


```js

import React, { Component } from "react";

import ConfTicketCard from "conf-ticket-card";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      avatar: "",
      account: "",
      date: "",
      time: "",
      uid: "",
      icons: [],
      link: "",
      host: "",
      sponsor: "",
      slogan: "",
    };
  }
  onClick = (e) => {
    log(`click event =`, e);
  }
  render() {
    const {
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
    } = this.state;
    return (
      <ConfTicketCard
        options={
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
        }
        onClick={this.onClick}
      />
    );
  }

```

