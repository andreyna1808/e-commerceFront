import axios from "axios";
import { BASE_URL } from "../constants"
import { FetchAuth } from "../fetchAuth";

export const RegisterAPI = async (formData) => {
  try {
    const url = `${BASE_URL}/api/auth/local/register`
    const body = JSON.stringify(formData)
    const params = {
      headers: {
        "Content-Type": 'application/json'
      },
    };

    const response = await axios.post(url, body, params)
    const result = await response.data
    return result

  } catch (error) {
    return null
  }
}

export const LoginAPI = async (formData) => {
  try {
    const url = `${BASE_URL}/api/auth/local`
    const body = {...formData, identifier: formData.username}
    const params = {
      headers: {
        "Content-Type": 'application/json'
      },
    };

    const response = await axios.post(url, body, params)
    const result = await response.data
    return result

  } catch (error) {
    return null
  }
}

export const ResetPasswordAPI = async (formData) => {
  try {
    const url = `${BASE_URL}/api/auth/forgot-password`
    const body = JSON.stringify(formData)
    const params = {
      headers: {
        "Content-Type": 'application/json'
      },
    };
    const response = await axios.post(url, body, params)
    const result = await response.data
    return result

  } catch (error) {
    return null
  }
}

export const GetMeAPI = async (logout) => {
  try {
    const url = `${BASE_URL}/api/users/me`
    const result = await FetchAuth(url ,logout)
    console.log('Aqqq', result)
    return result

  } catch (error) {
    console.log('error', error)
    return null
  }
}