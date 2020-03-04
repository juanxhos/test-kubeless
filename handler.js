'use strict';

module.exports.hello = async (event, context) => {
    console.log(event);
    let req = await event["extensions"]["request"];
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                method: req.method,
                path: req.path,
                params: req.params,
                query: req.query,
                baseUrl: req.baseUrl,
                originalUrl: req.originalUrl,
                body: req.body,
                context: context,
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
