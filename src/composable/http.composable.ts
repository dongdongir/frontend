import axios, { type AxiosResponse } from 'axios'

interface Config<T> {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'
  url: string
  body?: T
}

export const useHttp = <Req, Res>(config: Config<Req>): Promise<AxiosResponse<Res>> => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const controller = new AbortController()

  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    signal: controller.signal,
  })

  const { method, url, body } = config

  const requestData = {
    method,
    url: url,
    data: body,
  }

  return instance(requestData)
}
