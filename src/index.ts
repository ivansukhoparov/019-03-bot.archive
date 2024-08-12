// API STRUCTURE

// COMMON:
// GET api/test - Test the connection between the two apps - RemoteAppAuth
// Also, check the remote app credentials. Returns 200 if everything is OK and 401 if the credentials are wrong.

// SESSIONS:
// GET  api/sessions - Get the list of sessions. - UserAuth
// GET  api/sessions/:id - Get the session by its ID. - UserAuth
// GET  api/sessions/sequences/:id/ - Get the list of sequences for the session with the current ID. - UserAuth
// POST  api/sessions - Create a new session. - RemoteAppAuth
// POST  api/sessions/:id/close - Close the session. - RemoteAppAuth
// POST  api/sessions/:id/sequences - Add a new sequence to the session. - RemoteAppAuth

//SEQUENCES:
// GET api/sequences/:id - Get a specific sequence by its ID. - UserAuth
