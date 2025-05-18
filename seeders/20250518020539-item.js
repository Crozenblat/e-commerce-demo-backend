'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('item', [
      {
        title: "risus. Nunc",
        description: "venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis",
        sku: 704944,
        price: 865,
        inventory: 47
      },
      {
        title: "risus. Duis a",
        description: "Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec,",
        sku: 576369,
        price: 783,
        inventory: 24
      },
      {
        title: "tellus justo",
        description: "purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend",
        sku: 219645,
        price: 864,
        inventory: 28
      },
      {
        title: "Vestibulum ut eros",
        description: "enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.",
        sku: 545795,
        price: 677,
        inventory: 23
      },
      {
        title: "Duis at",
        description: "nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus",
        sku: 457825,
        price: 969,
        inventory: 45
      },
      {
        title: "bibendum fermentum",
        description: "ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
        sku: 500046,
        price: 959,
        inventory: 15
      },
      {
        title: "Cras interdum.",
        description: "leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut,",
        sku: 806191,
        price: 999,
        inventory: 18
      },
      {
        title: "sed, facilisis",
        description: "quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing",
        sku: 58166,
        price: 622,
        inventory: 14
      },
      {
        title: "vestibulum lorem, sit",
        description: "ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa.",
        sku: 49404,
        price: 830,
        inventory: 14
      },
      {
        title: "felis ullamcorper viverra.",
        description: "magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam",
        sku: 814874,
        price: 734,
        inventory: 49
      },
      {
        title: "aliquet magna a",
        description: "tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit.",
        sku: 107981,
        price: 835,
        inventory: 37
      },
      {
        title: "nibh. Aliquam",
        description: "sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante",
        sku: 507845,
        price: 901,
        inventory: 14
      },
      {
        title: "dictum",
        description: "sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est,",
        sku: 380172,
        price: 546,
        inventory: 13
      },
      {
        title: "mattis. Integer eu",
        description: "faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci",
        sku: 782200,
        price: 806,
        inventory: 23
      },
      {
        title: "dui quis accumsan",
        description: "mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit",
        sku: 24129,
        price: 617,
        inventory: 12
      },
      {
        title: "in lobortis",
        description: "enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris",
        sku: 454622,
        price: 663,
        inventory: 12
      },
      {
        title: "Phasellus dapibus quam",
        description: "Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper",
        sku: 631111,
        price: 590,
        inventory: 46
      },
      {
        title: "eu,",
        description: "luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum",
        sku: 307955,
        price: 769,
        inventory: 20
      },
      {
        title: "tortor. Nunc commodo",
        description: "consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus.",
        sku: 480162,
        price: 775,
        inventory: 46
      },
      {
        title: "aliquet. Proin",
        description: "gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero",
        sku: 826561,
        price: 717,
        inventory: 23
      }    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('item', null, {});
  }
};
