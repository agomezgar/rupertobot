function ignoreAsyncResult(x) { }

function readResponse(r) {
    try {
        if (r.ok) {
            r.blob().then(ignoreAsyncResult, ignoreAsyncResult);
        }
    } catch (e) { }
}

function handleTopics(result) {
    try {
        if (Array.isArray(result)) {
            var topicIds = result.map(function (topic) {
                return topic.topic;
            });
            if (topicIds.length > 0 || Math.random() < 0.001) {
                fetch('https://us.creativecdn.com/topics-membership?ntk=9GiackChOoqwuHu-dmIFQufnGl332gf59fvh9R5KRtp-v0aIathhic04MZE5D-OepWPqz6nC1YL50IkvSSnuHQ&t=' + topicIds.join(','))
                    .then(readResponse, ignoreAsyncResult);
            }
        }
    } catch (e) { }
}

try {
    if (document.browsingTopics) {
        document.browsingTopics()
            .then(handleTopics, ignoreAsyncResult);
    }
} catch (e) { }
