// @flow
import React, { Component } from 'react';
import GameBoard from '../components/GameBoard';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BoardActions from '../actions/board';

function mapStateToProps(state) {
    return {
        board: state.board
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BoardActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
