import React, {Component} from 'react';

class History extends Component {

    componentDidMount() {
        this.props.getHistory();
    }

    render() {
        const {history} = this.props;
        console.log(this.props);
        return (
            <div className="History">
                <ul>
                    <li className='history-list' id='history-list'>
                        <div>
                            <HistoryList history={history}/>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


function HistoryList(props) {
    if(Array.isArray(props.history)) {
        const listItems = props.history.map((history) =>
            (<div>
                <li>ID: {history._id}</li>
                <li>start Date : {history.startDate}</li>
                <li>end Date:{history.endDate}</li>
            </div>)
        );
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
    else{
        return(
            <div>
                No items here
            </div>
        )

    }

}


export default History;
