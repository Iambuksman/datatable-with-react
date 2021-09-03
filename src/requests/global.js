import {useState} from 'react';
import {useSelector} from 'react-redux';
import store from '../store/index';

const base64 = require('base-64');

export async function defaultHandler(request, body){


  const user = "user@email.com";
  const pass = "pwd";
  const host = "localhost";

  const credentials = user + ":" + pass;
  let response = [], message = "ok";
    const url = host + request;
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-type': 'application/json',
        'Authorization': "Basic " + base64.encode(credentials),
      },
      body: JSON.stringify(body)
    }).then((response) => response.json())
      .then((res) => {
        return res
      })
      .catch((err) => {
        message = err
      })
      return [response, message]
}
