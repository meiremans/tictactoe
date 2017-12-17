import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BoardActions from '../actions/board';
import * as UserActions from '../actions/user';

function mapStateToProps(state) {
    return {
        board: state.board,
        user : state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, UserActions,BoardActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
