export function setUserLocalStorage(user: string) {
  localStorage.setItem('@aco-verde-br:user', user);
}

export function setTokenLocalStorage(token: string) {
  localStorage.setItem('@aco-verde-br:token', token);
}

export function setNivelLocalStorage(nivel: number) {
  localStorage.setItem('@aco-verde-br:nivel', nivel.toString());
}

export function getUserLocalStorage() {
  const user = localStorage.getItem('@aco-verde-br:user');

  return user ?? null;
}

export function getTokenLocalStorage() {
  const token = localStorage.getItem('@aco-verde-br:token');

  return token ?? null;
}

export function getNivelLocalStorage() {
  const nivel = localStorage.getItem('@aco-verde-br:nivel');

  return nivel ? parseInt(nivel, 10) : null;
}

export function clearLocalStorage() {
  localStorage.clear()
}