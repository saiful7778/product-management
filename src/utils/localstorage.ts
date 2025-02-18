"use client";

export function setItem(key: string, value: unknown) {
  try {
    if (!!window) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (err) {
    console.error(err);
  }
}

export function getItem<T>(key: string): T | undefined {
  try {
    if (!!window) {
      const data = window.localStorage.getItem(key);
      return data ? (JSON.parse(data) as T) : undefined;
    }
  } catch (err) {
    console.error(err);
  }
}

export function removeItem(key: string) {
  try {
    if (!!window) {
      window.localStorage.removeItem(key);
    }
  } catch (err) {
    console.error(err);
  }
}
