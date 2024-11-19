import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nullSafe } from 'Utils/globalMethods';
import Detail from './Detail';

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(dispatch),
});

const mapStateToProps = (state) => ({
	detail: nullSafe(() => state.notes.detail, null),
});

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...ownProps,
	actions: dispatchProps,
}))(Detail);
