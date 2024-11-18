import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Detail from './Detail';

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(dispatch),
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...ownProps,
	actions: dispatchProps,
}))(Detail);
