function setCookie(name, value, expiryDays) {
  if (!name || !value) {
    throw new Error("Name and value are required for setting a cookie.");
  }

  const date = new Date();
  date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; SameSite=Strict; path=/`;
}

function getCookie(name) {
  if (!name) {
    throw new Error("Name is required for getting a cookie.");
  }

  const cookies = decodeURIComponent(document.cookie);
  const cookiesArray = cookies.split("; ");
  let result = null;

  cookiesArray.forEach((element) => {
    if (element.indexOf(name) === 0) {
      result = element.substring(name.length + 1);
    }
  });

  return result;
}

function removeCookie(name) {
  if (!name) {
    throw new Error("Name is required for removing a cookie.");
  }

  const expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = `${name}=; ${expires}`;
}

const thejscookie = {
  set: setCookie,
  get: getCookie,
  remove: removeCookie,
};

export default thejscookie;
