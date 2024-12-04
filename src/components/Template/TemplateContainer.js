import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nullSafe } from 'Utils/globalMethods';
import Template from './Template';

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(dispatch),
});

const mapStateToProps = (state) => ({
	flowModalId: nullSafe(() => state.modals.data, null),
});

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...ownProps,
	actions: dispatchProps,
}))(Template);
