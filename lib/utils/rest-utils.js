export function $result(callback) {
    return (req, res, next) => {
      res.header("Access-Control-Allow-Headers", "Authorization, Origin, Content-Type, Accept");
      callback(req, res, next).then(result => result).catch(e => !console.log('err', e) && res.status(e.status || 400).send({ error: e }));
    }
  }