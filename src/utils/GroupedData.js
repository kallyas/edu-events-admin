import _ from 'lodash';

const GroupedData = (users) => {

    //group users by event id and get the number of users for each event
    const groupedUsers = _.groupBy(users, 'event_id');
    const events = Object.keys(groupedUsers);
    const eventUsers = events.map((event) => {
        return { event, users: groupedUsers[event].length };
    }
    );
    return { eventUsers };
}

export default GroupedData;