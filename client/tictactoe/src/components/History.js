import React, {Component} from 'react';
import BoardLayout from "./BoardLayout";

class History extends Component {
    componentDidMount() {
        this.props.getHistory();
    }

    render() {
        const {history, replayMove,resetReplayBoard} = this.props;
        return (
            <div className="History">
                <div>
                    <HistoryList history={history}
                                 action={(turns) => playHistory(turns, (turn) => (replayMove(turn)),() => resetReplayBoard())}/>
                    <div>
                        <BoardLayout field={history.replayBoard} action ={() => {}}/>
                    </div>
                </div>
            </div>
        );
    }
}

function playHistory(turns, moveAction,resetAction) {
    resetAction();
    if(turns !== undefined) {
        for (let i = 0; i < turns.length; i++) {
            setTimeout(function () {
                moveAction(turns[i]);
            }, 1000 * i)
        }
    }
}

function HistoryList(props) {
    if (Array.isArray(props.history.historyList)) {
        const listItems = props.history.historyList.map((history, index) =>
            (<div key={history._id}>
                    <li onClick={() => props.action(history.turns)}>
                        ID: {history._id}<br/>
                        start Date : {history.startDate}<br/>
                        end Date:{history.endDate}<br/>
                        ------------------------------------
                    </li>
                </div>
            )
        );
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
    else {
        return (
            <div>
                No items here
            </div>
        )

    }

}


export default History;
