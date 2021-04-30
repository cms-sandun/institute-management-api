'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('course', [{
            name: 'BIT - UCSC',
            description: 'BIT - university of colombo',
            course_fee: 350000.00,
            status: 'enabled',
            created_at: '2021-04-30',
            updated_at: '2021-04-30'
        },{
            name: 'ICDL',
            description: 'International Computer Driving Licence',
            course_fee: 100000.00,
            status: 'enabled',
            created_at: '2021-04-29',
            updated_at: '2021-04-29'
        }])
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('course', null, {})
    }
};
