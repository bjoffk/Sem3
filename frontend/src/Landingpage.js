import React from 'react'
import { Nav, Navbar, NavItem, Button} from 'react-bootstrap'
import { View, Image } from 'react-native';
import { Link } from 'react-router';
import facade from './components/Facade'
import {observer} from "mobx-react";




@observer
class Landingpage extends React.Component {

    handleChange(e){
        console.log(e.target.value);
    }

    handleChange2 = (e) => {
        console.log(e.target.value);
        // this.state.selectTravelType = e.target.value;
        this.setState({
            selectTravelType: e.target.value
        });
        // alert("changed");
        // console.log(this.state.selectTravelType);

    }

extractTime = (evt) => {
    // this.setState({
    //     dateFrom: '2017-05-06'
    // });
    // this.state.dateFrom = '2017-05-06'
    // }
    // console.log(evt.ShowLocale);

    this.setState({
        dateFrom: '2017-05-06'
    });
    // alert(evt)
}

    searchButtonAction() {


        // facade.getFlights(this.state.origin, this.destination, this.date, this.passengers);
        facade.getFlights(document.getElementById("from").value, document.getElementById("to").value, document.getElementById("dateOut").value, document.getElementById("passengers").value);

        // this.setState({
        //     origin: 'CPH'
        // });


        //update four variables
        // alert("cfhe");

        //run fetch method
    }


//Multiple of same type of this.state: Only 1 will work correctly! Need some more unique id's?
    constructor() {
        super();
        this.state = {
            valueFrom: 'Los',
            valueTo: 'Was',
            dropPassAmount: 'Passengers',
            dropReturnType: 'Return Type',
            origin: 'CPH',
            abbr: 'alksdka',
            dateFrom: '2017-05-04',
            dateOut: '2017-05-09',
            selectTravelType: 'Return'
        };

    }

    render(){
        let origin = "CPH";
        let destination = "JFK";
        let date = "2017-05-04";
        let passengers = 4;

        return(

            <div>

                {/*Navbar*/}
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {/*NavBar Title*/}
                            <a href="#">Search Flight</a>
                        </Navbar.Brand>

                    </Navbar.Header>


                    {/*NavBar Items*/}
                    <Nav>
                        {/*Input box for 'From Destination'*/}
                        <NavItem eventKey={0} href="#">
                        <View>

                            <Image
                                style={{width: 125, height: 80}}
                                source={require('./pictures/jtlogo.jpg')}
                            />


                        </View>
                        </NavItem>
                        <NavItem eventKey={1} href="#">

                            {/*Autocomplete for 'From Destination'*/}
                            <label htmlFor="airports-autocomplete-from">From </label>
                            <input type="text" id="from" placeholder="From (IATA)" size="10" maxLength="3"></input>

                            {/*<Autocomplete*/}
                                {/*value={this.state.valueFrom}*/}
                                {/*inputProps={{ name: 'US state', id: 'airports-autocomplete' }}*/}
                                {/*items={getAirports()}*/}
                                {/*getItemValue={(item) => {*/}
                                    {/*this.state.item.name = item.name;*/}
                                    {/*this.state.abbr = item.abbr*/}
                                {/*}}*/}
                                {/*shouldItemRender={matchAirportToTerm}*/}
                                {/*sortItems={sortAirports}*/}
                                {/*onChange={(event, valueFrom) => { this.setState({*/}
                                    {/*valueFrom: valueFrom,*/}
                                    {/*abbr: ""*/}

                                {/*}) }}*/}
                                {/*onSelect={valueFrom => this.setState({*/}
                                    {/*valueFrom: valueFrom,*/}
                                    {/*origin: 'CPH'*/}
                                {/*})}*/}
                                {/*renderItem={(item, isHighlighted) => (*/}
                                    {/*<div*/}
                                        {/*style={isHighlighted ? styles.highlightedItem : styles.item}*/}
                                        {/*key={item.abbr}*/}
                                    {/*>{item.name}</div>*/}
                                {/*)}*/}
                            {/*/>*/}

                        </NavItem>
                        {/*Input box for 'To Destination'*/}
                        <NavItem eventKey={2} href="#">
                            {/*Autocomplete for 'To Destination'*/}
                            <label htmlFor="airports-autocomplete-to">To </label>
                            <input type="text" id="to" placeholder="To (IATA)" size="10" maxLength="3"></input>
                            {/*<Autocomplete*/}
                                {/*value={this.state.valueTo}*/}
                                {/*inputProps={{ name: 'US state', id: 'airports-autocomplete-to' }}*/}
                                {/*items={getAirports()}*/}
                                {/*// getItemValue={(item) => item.name}*/}
                                {/*getItemValue={(item) => {*/}
                                        {/*item.name;*/}
                                {/*}}*/}
                                {/*shouldItemRender={matchAirportToTerm}*/}
                                {/*sortItems={sortAirports}*/}
                                {/*onChange={(event, valueTo) => this.setState({valueTo})}*/}
                                {/*onSelect={valueTo => this.setState({ valueTo })}*/}
                                {/*renderItem={(item, isHighlighted) => (*/}
                                    {/*<div*/}
                                        {/*style={isHighlighted ? styles.highlightedItem : styles.item}*/}
                                        {/*key={item.abbr}*/}
                                    {/*>{item.name}</div>*/}
                                {/*)}*/}
                            {/*/>*/}
                        </NavItem>


                    {/*Input box for 'Departure Date'*/}
                    <NavItem eventKey={3} href="#">
                        <label htmlFor="airports-autocomplete-from">Date Out</label>
                        <input type="text" id="dateOut" placeholder="YYYY-MM-DD" size="12" maxLength="10"></input>
                    </NavItem>

                    {/*Input box for 'Arrival Date'*/}
                    <NavItem eventKey={4} href="#">
                        <label htmlFor="airports-autocomplete-from">Date Return</label>
                        <input type="text" id="dateReturn" placeholder="YYYY-MM-DD" size="12" maxLength="10"></input>
                    </NavItem>

                    <NavItem eventKey={5} href="#">
                        <label htmlFor="airports-autocomplete-from">People</label>
                        <select id="passengers"
                            value={this.state.selectValue}
                            onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </NavItem>

                    <NavItem eventKey={6} href="#">
                        <label htmlFor="airports-autocomplete-from">Travel Type</label>
                        <select id="travelType"
                                value={this.state.selectValue}
                                onChange={this.handleChange2}>
                            <option value="Return">Return</option>
                            <option value="One-way">One-way</option>
                        </select>
                    </NavItem>
                        {/*Dropdown element with Calendar for 'Departure Date' */}
                        {/*<NavDropdown eventKey={3} title="From 'Depature Date'" id="basic-nav-dropdown">*/}
                            {/*<index>*/}
                                {/*/!*<Calendar ref="cal" onSelect={function(evt){console.log(evt)}} />*!/*/}
                                {/*<Calendar ref="cal" onSelect={this.extractTime} />*/}
                            {/*</index>*/}
                        {/*</NavDropdown>*/}

                        {/*Dropdown element with Calendar for 'Return Date' */}
                        {/*<NavDropdown eventKey={4} title=" To 'Return Date'" id="basic-nav-dropdown">*/}
                            {/*<index>*/}
                                {/*<Calendar ref="cal" onSelect={function(evt){console.log(evt)}} />*/}
                            {/*</index>*/}
                        {/*</NavDropdown>*/}

                        {/*Dropdown element with number/amount of Passengers */}

                        {/*<NavItem eventKey={5}>*/}
                            {/*<DropdownButton id="dropPass" title={this.state.dropPassAmount} onSelect={function(evt){console.log(evt)}} >*/}
                                {/*<MenuItem eventKey="1">1</MenuItem>*/}
                                {/*<MenuItem eventKey="2">2</MenuItem>*/}
                                {/*<MenuItem eventKey="3">3</MenuItem>*/}
                                {/*<MenuItem eventKey="4">4</MenuItem>*/}
                                {/*<MenuItem eventKey="5">5</MenuItem>*/}
                                {/*<MenuItem eventKey="6">6</MenuItem>*/}
                                {/*<MenuItem eventKey="7">7</MenuItem>*/}
                                {/*<MenuItem eventKey="8">8</MenuItem>*/}
                            {/*</DropdownButton>*/}
                        {/*</NavItem >*/}

                        {/*Dropdown element with selection of ticket type*/}
                        {/*<NavItem eventKey={6}>*/}
                            {/*<DropdownButton id="dropType" title={this.state.dropReturnType} onSelect={this.handleChange}>*/}
                                {/*<MenuItem eventKey="Single">Single</MenuItem>*/}
                                {/*<MenuItem eventKey="Return">Return</MenuItem>*/}
                            {/*</DropdownButton>*/}
                        {/*</NavItem >*/}

                        {/*Search button*/}
                        <NavItem eventKey={7}>
                            <Link to="/searchresults"><Button bsStyle="warning" onClick={this.searchButtonAction}>Search</Button></Link>
                        </NavItem >
                    </Nav>

                </Navbar>


                {/*Test to print to screen the value stored in state:*/}
                {/*<p>{this.state.valueTo}</p>*/}

                {/*Displays/renders Searchresults below the page */}
                {/*{this.props.children}*/}
                {/*{React.cloneElement(this.props.children, this)}*/}

                {React.cloneElement(this.props.children, {flightType: this.state.selectTravelType})}

            </div>
        )
    }
}

export default Landingpage