'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('user', [
    {
      first_name: "Adele",
      last_name: "Flores",
      email: "et@hotmail.org",
      password: "PWO81QLE4IJ",
      created_at: new Date(),
    },
    {
      first_name: "Doris",
      last_name: "Sexton",
      email: "ullamcorper.duis@protonmail.ca",
      password: "CIQ77QNI5PD",
      created_at: new Date(),
    },
    {
      first_name: "Courtney",
      last_name: "Hart",
      email: "eget.odio@outlook.edu",
      password: "VMC46OHT3WZ",
      created_at: new Date(),
    },
    {
      first_name: "Melanie",
      last_name: "Richardson",
      email: "ut.nec.urna@yahoo.com",
      password: "IIE88ISO5JM",
      created_at: new Date(),
    },
    {
      first_name: "Halee",
      last_name: "Chapman",
      email: "sem.semper@yahoo.ca",
      password: "WCM64YYT2XR",
      created_at: new Date(),
    },
    {
      first_name: "Asher",
      last_name: "Bauer",
      email: "dictum.mi@hotmail.couk",
      password: "VPJ78EGG0OX",
      created_at: new Date(),
    },
    {
      first_name: "Myra",
      last_name: "Stephenson",
      email: "interdum.libero@outlook.com",
      password: "WRE66IXU7JV",
      created_at: new Date(),
    },
    {
      first_name: "Tate",
      last_name: "Leach",
      email: "quisque.imperdiet@icloud.couk",
      password: "PYC88XUQ4ZJ",
      created_at: new Date(),
    },
    {
      first_name: "Lenore",
      last_name: "Perry",
      email: "euismod.et@google.ca",
      password: "SLP01YCY0FC",
      created_at: new Date(),
    },
    {
      first_name: "Christopher",
      last_name: "Sweeney",
      email: "phasellus.vitae.mauris@protonmail.edu",
      password: "YQQ21CUL5VM",
      created_at: new Date(),
    },
    {
      first_name: "Burke",
      last_name: "Johnson",
      email: "nulla.integer@outlook.couk",
      password: "IPL59QMD3LO",
      created_at: new Date(),
    },
    {
      first_name: "Harding",
      last_name: "Jacobs",
      email: "metus.vivamus@yahoo.edu",
      password: "SNW09EON8OW",
      created_at: new Date(),
    },
    {
      first_name: "Ivy",
      last_name: "Levy",
      email: "vestibulum.ante@icloud.net",
      password: "DBR49KQD3TM",
      created_at: new Date(),
    },
    {
      first_name: "Francis",
      last_name: "Buck",
      email: "libero.nec@icloud.com",
      password: "WTM77YRY2PU",
      created_at: new Date(),
    },
    {
      first_name: "Whoopi",
      last_name: "Holman",
      email: "sit.amet@aol.ca",
      password: "PPI14CNE0JU",
      created_at: new Date(),
    },
    {
      first_name: "Phillip",
      last_name: "Bond",
      email: "et.eros.proin@yahoo.org",
      password: "OTR73UFW5ZS",
      created_at: new Date(),
    },
    {
      first_name: "Kenneth",
      last_name: "Johnston",
      email: "phasellus.dolor@hotmail.com",
      password: "GTG08VEY1PB",
      created_at: new Date(),
    },
    {
      first_name: "Keane",
      last_name: "Chase",
      email: "nam.ligula@protonmail.ca",
      password: "GUX74GDJ4DX",
      created_at: new Date(),
    },
    {
      first_name: "Melodie",
      last_name: "Mason",
      email: "varius.et.euismod@yahoo.edu",
      password: "FMC79KSI9JX",
      created_at: new Date(),
    },
    {
      first_name: "Rhiannon",
      last_name: "Goff",
      email: "cursus@outlook.edu",
      password: "ASX16DLU2GO",
      created_at: new Date(),
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('user', null, {});
  }
};
