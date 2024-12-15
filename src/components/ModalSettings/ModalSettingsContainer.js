import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nullSafe } from 'Utils/globalMethods';
import ModalSettings from './ModalSettings';

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(dispatch),
});

const mapStateToProps = (state) => ({
	font: nullSafe(() => state.settings.font, null),
	theme: nullSafe(() => state.settings.theme, null),
});

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...ownProps,
	actions: dispatchProps,
}))(ModalSettings);
