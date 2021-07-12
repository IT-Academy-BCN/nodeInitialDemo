async function getCurrentTime() {
  try {
    const ts = Date.now();
    const date = new Date(ts);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return { hour, minutes, day, month };
  } catch (err) {
    return err.message;
  }
}

module.exports = getCurrentTime;
