'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('batch', [{
            name: 'BIT-UCSC-2021-SUN',
            course_id: 2,
            year: 2021,
            status: 'enabled',
            created_at: '2021-04-30',
            updated_at: '2021-04-30'
        }, {
            name: 'BIT-UCSC-2021-SAT',
            course_id: 2,
            year: 2021,
            status: 'enabled',
            created_at: '2021-04-30',
            updated_at: '2021-04-30'
        }, {
            name: 'ICDL-2021-SUN',
            course_id: 3,
            year: 2021,
            status: 'enabled',
            created_at: '2021-04-30',
            updated_at: '2021-04-30'
        }])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
