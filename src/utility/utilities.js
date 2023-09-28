export const SetToStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const GetToStorage = (name) => {
  return localStorage[name] && JSON.parse(localStorage[name] || "")
}
