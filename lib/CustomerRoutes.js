'use strict';

const SampleCustomers = require('../samples/customers');

class CustomerRoutes {
    getAll(request, reply) {
        reply(SampleCustomers);
    };
}
module.exports = CustomerRoutes;