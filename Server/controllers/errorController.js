const errorHandle = (err, res) => {
    console.log(err);
    if (err.code == 23505)  {
        console.log(err);
        // Extract the name of the constraint // Example  'Key (name)=(Ed Sheeran) already exists.' must use Ed Sheeran
        const constraint = err.detail
        return res.status(400).json({
            status: 'error',
            error: `${constraint} already exists`,
        });
    } else {
        return res.status(500).json({
            status: 'error',
            error: 'Internal Server Error',
        });
    }
};

module.exports = errorHandle;