import React, { Component } from "react";

import Deals from "../../Components/Deals/Deals";
import axios from "axios";
import Background from "../../UI/Background/Background";
import Searchbar from "../../Components/Searchbar/Searchbar";
import classes from "./DealsPage.module.css";

class DealsPage extends Component {
  state = {
    deals: [],
    search: ""
  };

  componentDidMount() {
    axios.get("/api/bapcsales").then(resp => {
      let newDeals = [...resp.data.deals, ...this.state.deals];
      this.setState({ deals: newDeals });
    });
    axios.get("/api/gamedeals").then(resp => {
      let newDeals = [...resp.data.deals, ...this.state.deals];
      this.setState({ deals: newDeals });
    });
    axios.get("/api/redflagdeals").then(resp => {
      let newDeals = [...resp.data.deals, ...this.state.deals];
      this.setState({ deals: newDeals });
    });
  }

  openExternalUrl = (url) => {
    window.open(url);
  }

  handleChange = (ev) => {
    this.setState({search:ev.target.value});
  }

  render() {
    return (
      <div className={classes.Dealspage}>
        <Background/>
        <p className={classes.Title}><strong>Current Deals</strong></p>
        <Searchbar changed={this.handleChange}/>
        <Deals items={this.state.deals} search={this.state.search} clicked={this.openExternalUrl}/>
        <div>Navigation controls</div>
      </div>
    );
  }
}

export default DealsPage;
