import React, { Component } from 'react';

class AddQuoteForm extends Component {
    render() {
        return (
            <div className="Create-Container">
            <form className="Create-Form quoteDisplayCard" onSubmit={this.handleSubmit}>
                 <p>Author Name</p>
                 <input className="Create-Input" type="text" name="" onChange={this.hangleChange}/>
                 <p>Quote</p>
                 <input className="Create-Input" type="text" name="" onChange={this.hangleChange}/>
                 <input className="Create-Submit-Button" type="submit"/>
            </form>
         </div>
        );
    }
}

export default AddQuoteForm;