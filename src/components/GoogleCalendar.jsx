import React, { useEffect, useState } from 'react';

const GoogleCalendarComponent = () => {
  const CLIENT_ID = '263176376959-6sn8v13j8pd4i2kn03j3nq3f7v6dkmvh.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyDUQewDCsgQNhOjLsaJn-NJkFQgdns2E5c'; // Insira sua chave da API do Google aqui
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

  const [tokenClient, setTokenClient] = useState(null);
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [agendaItems, setAgendaItems] = useState([]);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://apis.google.com/js/api.js';
    script1.async = true;
    script1.defer = true;
    script1.onload = gapiLoaded;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://accounts.google.com/gsi/client';
    script2.async = true;
    script2.defer = true;
    script2.onload = gisLoaded;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const gapiLoaded = () => {
    window.gapi.load('client', initializeGapiClient);
  };

  const initializeGapiClient = async () => {
    await window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    setGapiInited(true);
    maybeEnableButtons();
  };

  const gisLoaded = () => {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    setTokenClient(client);
    setGisInited(true);
    maybeEnableButtons();
  };

  const maybeEnableButtons = () => {
    if (gapiInited && gisInited) {
      document.getElementById('authorize_button').style.visibility = 'visible';
    }
  };

  const handleAuthClick = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Atualizar';
      await listUpcomingEvents();
    };

    if (window.gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  const handleSignoutClick = () => {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
      document.getElementById('content').innerText = '';
      document.getElementById('authorize_button').innerText = 'Autorizar';
      document.getElementById('signout_button').style.visibility = 'hidden';
    }
  };

  const listUpcomingEvents = async () => {
    let response;
    try {
      const request = {
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      };
      response = await window.gapi.client.calendar.events.list(request);
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }

    const events = response.result.items;
    console.log(events);
    setAgendaItems(events)
  };

  return (
    <div className='gap-3 w-full flex flex-col h-full justify-between'>
      {agendaItems.map((item) => (
        <div className='p-3 flex flex-col w-75 h-40 shadow-lg'>
          <h3 className='font-bold text-lg'>{item.summary}</h3>
          <span>{item.start.date || item.start.dateTime}</span>
          {item.hangoutLink ? (

            <span>{item.hangoutLink}</span>
          ) : ""}
        </div>
      ))}
      <button id="authorize_button" className='border p-2' onClick={handleAuthClick}>
        Autorizar
      </button>
      <button id="signout_button" className='border p-2' onClick={handleSignoutClick}>
        Sair
      </button>
    </div>
  );
};

export default GoogleCalendarComponent;
