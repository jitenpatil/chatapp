function formatMessage(username, text) {
    let currentDate = new Date();
    
    return {
        username,
        text,
        time: currentDate.toLocaleTimeString()
    }
}

module.exports = formatMessage;