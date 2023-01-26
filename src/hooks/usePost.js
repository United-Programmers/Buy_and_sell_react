import { useState } from 'react';
import { dangerMessage, successMessage, warningMessage } from "../components/Toast"

const usePost = () => {
    const [postData, updatePostData] = useState({ pending: false, data: undefined, error: undefined, lengths: undefined });

    const execute = async (endPoint, raw, Method, displayMessage, token, isJSON) => {

        updatePostData({
            pending: true,
            data: undefined,
            error: undefined,
            lengths: undefined
        });

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        isJSON ? null : myHeaders.append("Content-Type", "application/json")

        const requestOptions = {
            method: Method,
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // return fetch(`${process.env.REACT_APP_API_V1}/${endPoint}`, requestOptions)
        return fetch(`${process.env.REACT_APP_API_LOCAL}${endPoint}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res?.status === 'success') {
                    updatePostData({
                        pending: false,
                        data: res,
                        error: undefined,
                        lengths: res.result
                    });
                    displayMessage === true ? null : successMessage(`${displayMessage}`);
                }
                if (res?.status === 'fail') {
                    updatePostData({
                        pending: false,
                        data: undefined,
                        error: res?.message,
                        lengths: undefined
                    });
                    warningMessage(`${res?.message}`);
                }
                if (res?.status === 'error') {
                    updatePostData({
                        pending: false,
                        data: undefined,
                        error: res?.message,
                        lengths: undefined
                    });
                    if (res?.message === 'jwt malformed') {
                        warningMessage("You need to login");
                    } else {
                        warningMessage("Something went wrong from the server");
                    }
                }
            })
            .catch(error => {
                updatePostData({
                    pending: false,
                    data: undefined,
                    error: error.message,
                    lengths: undefined
                });
                dangerMessage(`${error.message}`);
            });
    };

    return {
        execute,
        pending: postData.pending,
        data: postData.data,
        error: postData.error,
        lengths: postData.lengths,
    };
};

export default usePost;