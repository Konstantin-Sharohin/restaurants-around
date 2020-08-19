import axios from "axios";

export default axios.create({
   baseURL: "https://api.yelp.com/v3/businesses",
   headers: {
      Authorization:
         "Bearer JhY6IRPWXn918WmQE1RwVv2Zw9slKG1piWTK_ETfOUnH6_N4EUacXEoVzw4gmI803I29ixxTcVyGFZWcjfF556GbsYbaCDMIqB1ixO5H3h4RPql3VxGfAdDpQgQ9X3Yx",
   },
});
