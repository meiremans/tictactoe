import History from '../components/History';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HistoryActions from '../actions/history';

function mapStateToProps(state) {
    return {
        history: state.history,
        replayBoard : state.history.replayBoard
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(HistoryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(History);