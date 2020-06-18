import React from 'react';
import '../stylesheets/Search.css';

class Search extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <input className="city" type="text" value={this.props.city} onChange={this.props.onCityChange}/>
                <select className="state" value={this.props.state} onChange={this.props.onStateChange}>
                    <option value="ALABAMA">AL</option>
                    <option value="ALASKA">AK</option>
                    <option value="ARKANSAS">AR</option>	
                    <option value="ARIZONA">AZ</option>
                    <option value="CALIFORNIA">CA</option>
                    <option value="COLORADO">CO</option>
                    <option value="CONNECTICUT">CT</option>
                    <option value="D.C.">DC</option>
                    <option value="DELAWARE">DE</option>
                    <option value="FLORIDA">FL</option>
                    <option value="GEORGIA">GA</option>
                    <option value="HAWAII">HI</option>
                    <option value="IOWA">IA</option>	
                    <option value="IDAHO">ID</option>
                    <option value="ILLINOIS">IL</option>
                    <option value="INDIANA">IN</option>
                    <option value="KANSAS">KS</option>
                    <option value="KENTUCKY">KY</option>
                    <option value="LOUISIANA">LA</option>
                    <option value="MASSACHUSETTS">MA</option>
                    <option value="MARYLAND">MD</option>
                    <option value="MAINE">ME</option>
                    <option value="MICHIGAN">MI</option>
                    <option value="MINNESOTA">MN</option>
                    <option value="MISSOURI">MO</option>	
                    <option value="MISSISSPI">MS</option>
                    <option value="MONTANA">MT</option>
                    <option value="NORTH CAROLINA">NC</option>	
                    <option value="NEBRASKA">NE</option>
                    <option value="NEW HAMPSHIRE">NH</option>
                    <option value="NEW JERSEY">NJ</option>
                    <option value="NEW MEXICO">NM</option>			
                    <option value="NEVADA">NV</option>
                    <option value="NEW YORK">NY</option>
                    <option value="NORTH DAKOTA">ND</option>
                    <option value="OHIO">OH</option>
                    <option value="OKLAHOMA">OK</option>
                    <option value="OREGON">OR</option>
                    <option value="PENNSYLVANIA">PA</option>
                    <option value="RHODE ISLAND">RI</option>
                    <option value="SOUTH CAROLINA">SC</option>
                    <option value="SOUTH DAKOTA">SD</option>
                    <option value="TENNESSEE">TN</option>
                    <option value="TEXAS">TX</option>
                    <option value="UTAH">UT</option>
                    <option value="VERMONT">VT</option>
                    <option value="VIRGINIA">VA</option>
                    <option value="WASHINGTON">WA</option>
                    <option value="WISCONSIN">WI</option>	
                    <option value="WEST VIRGINIA">WV</option>
                    <option value="WYOMING">WY</option>
                </select>
                <input className="submit" type="submit"/>
            </form>
        );				
		
    }
}

export default Search;