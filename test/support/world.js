
let PageFactory = require('./pages/PageFactory');
let Helper = require('./support/helper');


    function World() {
    this.factory = new PageFactory(this);
    this.helper = new Helper(this);

    }

module.exports = function() {
    this.World = World;
}