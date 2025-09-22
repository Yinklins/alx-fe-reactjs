import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export const searchUsers = async (username) => {
  const response = await api.get(`/search/users?q=${username}`);
  return response.data;
};

export const getUserDetails = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};


const BASE_URL = "https://api.github.com";

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query.trim()}`);
  return response.data;
};