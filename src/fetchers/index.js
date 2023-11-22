const informationData = require("../../public/json/information.json")
const jobData = require("../../public/json/jobexperience.json");
const educationData = require("../../public/json/educationbackground.json");
const portfolios = require("../../public/json/portfolios.json");

const getInformation = async () => {
  return informationData;
};

const getPortfolios = async () => {
  return portfolios;
};

const getJobExperience = async () => {
  return jobData;
};

const getEducationBackground = async () => {
  return educationData;
};

export {
  getInformation,
  getPortfolios,
  getJobExperience,
  getEducationBackground,
};
