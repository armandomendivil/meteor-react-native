
// Log DDP messages
function logDDP(message) {
  return {
    type: 'LOG_DDP',
    message: message
  };
};

export default logDDP;