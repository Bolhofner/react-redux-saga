import { GET_POSTS } from '../actions/post-actions';


export default function postReducer(state = '', {type, payload}) {
    switch (type) {
        case GET_POSTS:
            return payload.posts;
        default:
            return state;
    }
}