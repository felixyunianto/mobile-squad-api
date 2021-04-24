module.exports = {
    success : (res, message, status, data) => {
        return res.status(status).json({
            message,
            status,
            data
        });
    },

    error : (res, message, status, error) => {
        return res.status(status).json({
            message,
            status,
            error
        });
        
    }
}