const cacheControl = ((req, res, next) => {
    //const cacheTime = 60*60*24;
    res.set({
        //'Cache-Control': `max-age=${cacheTime}`
        'Cache-Control': 'no-cahce'
    });
    next();
  });

  module.exports = cacheControl