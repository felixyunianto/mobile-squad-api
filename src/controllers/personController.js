const { person, Sequelize } = require("../models");
const responseForm = require("../helpers/response");
const response = require("../helpers/response");

module.exports = {
  getAllPeople: (req, res) => {
    person
      .findAll()
      .then((data) => {
        responseForm.success(res, "Success get all people", 200, data);
      })
      .catch((error) => {
        responseForm.error(res, "Something went wrong", 500, error);
      });
  },

  getPersonDetail: (req, res) => {
    const { id } = req.params;
    person
      .findOne({
        where: {
          id,
        },
      })
      .then((data) => {
        responseForm.success(res, "Success get detail person", 200, data);
      })
      .catch((error) => {
        responseForm.error(res, "Something went wrong", 500, error);
      });
  },

  storePerson: (req, res) => {
    const { body } = req;

    person
      .create(body)
      .then((data) => {
        responseForm.success(res, "Create person is successful", 200, data);
      })
      .catch((error) => {
        responseForm.error(res, "Something went wrong", 500, error);
      });
  },

  updatePerson: async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const findPerson = await person.findOne({
      where: {
        id,
      },
    });

    if (!findPerson) {
      responseForm.error(res, "Something went wrong", 404, "Person not found");
    }

    person
      .update(body, {
        where: {
          id,
        },
      })
      .then((data) => {
        const newObject = { ...findPerson.dataValues, ...body };
        responseForm.success(
          res,
          "Update person is successful",
          200,
          newObject
        );
      })
      .catch((error) => {
        responseForm.error(res, "Something went wrong", 500, error);
      });
  },

  deletePerson: async (req, res) => {
    const { id } = req.params;

    const findPerson = await person.findOne({
      where: {
        id,
      },
    });

    if (!findPerson) {
      responseForm.error(res, "Something went wrong", 404, "Person not found");
    }

    person
      .destroy({
        where: {
          id,
        },
      })
      .then((data) => {
        responseForm.success(
          res,
          "Delete person is successful",
          200,
          findPerson
        );
      })
      .catch((error) => {
        responseForm.error(res, "Something went wrong", 500, error);
      });
  },
};
