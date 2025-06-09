import axios from "axios";

const packFlowApi = axios.create({
  baseURL: 'https://74034132-3000.brs.devtunnels.ms/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default packFlowApi;