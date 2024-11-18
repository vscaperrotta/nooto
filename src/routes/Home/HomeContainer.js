import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nullSafe } from 'Utils/globalMethods';
import Home from './Home';

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(dispatch),
});

const mapStateToProps = (state) => ({
	notes: nullSafe(() => state.notes.data, []),
});

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...ownProps,
	actions: dispatchProps,
}))(Home);
