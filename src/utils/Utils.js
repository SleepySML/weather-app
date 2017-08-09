import request from 'superagent';

export const sendRequest = (url, options) => {

    let xhr;
    xhr = request.get(url);

    // Send request
    xhr.end(function(err, res){
        if (res.ok) {
            options.success && options.success(res.body);
        } else {
            options.error && options.error(err, res);
        }
    });
};
