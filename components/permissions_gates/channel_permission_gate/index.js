// Copyright (c) 2017 Mattermost Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';

import {haveIChannelPermission} from 'mattermost-redux/selectors/entities/roles';

import ChannelPermissionGate from './channel_permission_gate.jsx';

function mapStateToProps(state, ownProps) {
    if (!ownProps.teamId || !ownProps.channelId) {
        return {hasPermission: false};
    }

    for (const permission of ownProps.permissions) {
        if (haveIChannelPermission(state, {channel: ownProps.channelId, team: ownProps.teamId, permission})) {
            return {hasPermission: true};
        }
    }

    return {hasPermission: false};
}

export default connect(mapStateToProps)(ChannelPermissionGate);
