import React from 'react';


// change this to represent the stock data returned
export default class Stock extends React.Component {
    
    // supply semantic-ui stylings

    render() {
        const { name, avatar, email, isLoading } = this.props;

        const userDetails = (
            <div>
                <img
                    className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
                    src={avatar}
                    alt={name}
                    style={{ width: "100px", height: "100px" }}
                />
                <h4 className="mb-0">{name}</h4>
                <span className="text-muted">{email}</span>
            </div>
        );

        const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

        return (
            <div>
                {isLoading ? loadingMessage : userDetails}
            </div>
        );
    }
};