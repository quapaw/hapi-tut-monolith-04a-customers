exports.register = function (server, options, next) {
    const Routes = require('./lib/CustomerRoutes');
    const routes = new Routes();

    server.route({method:  'GET',
                  path:    '/customers',
                  handler: routes.getAll
                 });

    next();

};

exports.register.attributes = {
    pkg: require('./package.json')
};