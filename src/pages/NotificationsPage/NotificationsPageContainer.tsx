import { connect } from "react-redux";

import { IStore } from "../../interfaces";
import { NotificationsPage } from './NotificationsPage';

import { NOTIFICATIONS_ACTIONS } from '../../store/notifications';

const mapStateToProps = (state: IStore) => {
  return {
    notifications: state.notificationReducer.notifications,
    userId: state.userReducer.user ? state.userReducer.user.id : null,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchUserNotifications: (userId: string) => dispatch(NOTIFICATIONS_ACTIONS.fetchUserNotificationsRequest({userId})),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage);