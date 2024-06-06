export function setUserLocalStorage(user: string) {
  localStorage.setItem('@aco-verde-br:user', user);
}

export function setTokenLocalStorage(token: string) {
  localStorage.setItem('@aco-verde-br:token', token);
}

export function getUserLocalStorage() {
  const user = localStorage.getItem('@aco-verde-br:user');

  return user ?? null;
}

export function getTokenLocalStorage() {
  const token = localStorage.getItem('@aco-verde-br:token');

  return token ?? null;
}

export function clearLocalStorage() {
  localStorage.clear()
}