import React, { Component } from 'react';



class Quote extends Component {
    render() {
        console.log('Quote: render')
        let allQuotes = this.props.quoteData.map((quote,i) => {
            return <div className="quoteDisplayCard" key={i}>
                        <p>{quote.quoteText}</p>
                        <p>{quote.quoteAuthor}</p>
                    </div>
        })
        return (
            <div className="cardContainer">
                <div>
                    {allQuotes}
                </div>
            </div> 
        );
    }
}

export default Quote;
