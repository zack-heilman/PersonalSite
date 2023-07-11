const informationData = require("../../public/json/information.json")
const jobData = require("../../public/json/jobexperience.json");
const portfolios = require("../../public/json/portfolios.json");

const getInformation = async () => {
  return informationData;
};

const getServices = async () => {
  let res = await http.get(`/services.json`);
  return res.data;
};

const getTechskills = async () => {
  let res = await http.get(`/techskills.json`);
  return res.data;
};

const getLanguageskills = async () => {
  let res = await http.get(`/languageskills.json`);
  return res.data;
};

const getPortfolioFilters = async () => {
  let res = await http.get(`/portfoliofilters.json`);
  return res.data;
};

const getPortfolios = async () => {
  return portfolios;
};

const getJobExperience = async () => {
  return jobData;
};

const getEducationBackground = async () => {
  let res = await http.get(`/educationbackground.json`);
  return res.data;
};

const getClientReviews = async () => {
  let res = await http.get(`/clientsreview.json`);
  return res.data;
};

export {
  getInformation,
  getServices,
  getTechskills,
  getLanguageskills,
  getPortfolioFilters,
  getPortfolios,
  getJobExperience,
  getEducationBackground,
  getClientReviews,
};
