import $ from 'jquery';

export const GET_POSTS = 'posts:onGetPosts';

export function onGetPosts() {
    return {
        type: GET_POSTS,
        payload: {
            
        },
    }
}

export function apiRequest() {
    return dispatch => {
        dispatch(onGetPosts());
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            success() {
                console.log('Success');
            },
            error() {
                console.log('error');
                // dispatch(showError());
            },
        });
    }
}