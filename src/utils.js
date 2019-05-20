import uuid from 'uuid/v1';

export function read(key, defaultValue = null) {
  const localStr = localStorage.getItem(key);
  return JSON.parse(localStr) || defaultValue;
}

export function save(key, value) {
  const localStr = JSON.stringify(value);
  localStorage.setItem(key, localStr);
}

export function create(obj) {
  return Object.assign({}, obj, {
    id: uuid()
  });
}

export function getParams() {
  const URLRegexp = /#\/(.*?)(?=\?)/;

  return window.location.hash.replace(URLRegexp, '');
}