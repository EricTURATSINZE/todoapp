import axios from "axios";

class HttpRequest {
  static async get(url: string) {
    try {
      const res = await axios({
        method: "GET",
        url,
      });
      return res.data;
    } catch (err: any) {
      return err;
    }
  }

  static async post(url: string, data: any) {
    try {
      const res = await axios({
        method: "POST",
        url,
        data,
      });

      return res.data;
    } catch (err: any) {
      // console.log(err.response?.data?.message);
      return err;
    }
  }

  static async delete(url: string) {
    try {
      const res = await axios({
        method: "DELETE",
        url,
      });

      return res.data;
    } catch (err: any) {
      // console.log(err.response);
      return err;
    }
  }

  static async update(url: string, data: any) {
    try {
      const res = await axios({
        method: "PATCH",
        url,
        data,
      });

      return res.data;
    } catch (err: any) {
      return err;
    }
  }
}

export default HttpRequest;
