import React, { Component } from 'react';
import { connect } from 'react-redux';

class Doer extends Component {

    render () {
        console.log(this.props);

        const items = this.props;

        const itemsList = items.length ? (
            items.map( item => {
                return (
                    <div className="flex-wrapper">
                        <div className="item-id">itmes.id</div>
                        <div className="item-value">item.value</div>
                        <div className="item-text">item.text</div>
                    </div>
                )
            })
        ) : (
                <div className="else">No items</div>
        );

        return (
            <div>{itemsList}</div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        itmes: state.itmes
    }
}
export default connect(mapStateToProps)(Doer);