/**
 * PeopleController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getPeopleByCountry: function (req, res) {
        People.find({country: req.param("country")}).populate("food")
            .then(function (people) {
                res.send(people);
            })
            .catch(function (err) {
                sails.log.debug(err);
                res.serverError();
            });
    },

    getPeopleByCountryCallback: function (req, res) {
        People.find({country: req.param("country")}).populate("food").exec(function (err, people) {
           if(err) {
               sails.log.debug(err);
               res.serverError();
           }
           res.send(people);
        });
    }

};

