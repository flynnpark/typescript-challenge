interface LocalStorageAPI<T> {
  setItem(key: string, value: T): void;
  getItem(key: string): T;
  clearItem(key: string): void;
  clear(): void;
}

abstract class LocalStorage<T> implements LocalStorageAPI<T> {
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class MiniLocalStorage<T> extends LocalStorage<T> {
  private storage: { [key: string]: T } = {};

  setItem(key: string, value: T): void {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string): void {
    delete this.storage[key];
  }
  clear(): void {
    this.storage = {};
  }
}

const miniLocalStorage = new MiniLocalStorage<string>();
miniLocalStorage.setItem('key', 'value');
miniLocalStorage.getItem('key');
miniLocalStorage.clearItem('key');
miniLocalStorage.clear();

interface GeolocationAPI {
  getCurrentPosition(successFn: (coords: GeolocationPosition) => void): void;
  getCurrentPosition(
    successFn: (coords: GeolocationPosition) => void,
    errorFn: (error: GeolocationPositionError) => void
  ): void;
  getCurrentPosition(
    successFn: (coords: GeolocationPosition) => void,
    errorFn: (error: GeolocationPositionError) => void,
    optionObj: object
  ): void;
  watchPosition(successFn: (coords: GeolocationPosition) => void): number;
  watchPosition(
    successFn: (coords: GeolocationPosition) => void,
    errorFn: (error: GeolocationPositionError) => void
  ): number;
  watchPosition(
    successFn: (coords: GeolocationPosition) => void,
    errorFn: (error: GeolocationPositionError) => void,
    optionObj: object
  ): number;
  clearWatch(id: number): void;
}

class MiniGeolocation implements GeolocationAPI {
  geolocation = new Geolocation();

  getCurrentPosition(
    successFn: (coords: GeolocationPosition) => void,
    errorFn?: (error: GeolocationPositionError) => void,
    optionObj?: object
  ): void {
    this.geolocation.getCurrentPosition(successFn, errorFn, optionObj);
  }

  watchPosition(
    successFn: (coords: GeolocationPosition) => void,
    errorFn?: (error: GeolocationPositionError) => void,
    optionObj?: object
  ): number {
    return this.geolocation.watchPosition(successFn, errorFn, optionObj);
  }

  clearWatch(id: number): void {
    this.geolocation.clearWatch(id);
  }
}

function geoLocationSuccess(coords: GeolocationPosition): void {
  console.log(coords);
}

function geoLocationError(error: GeolocationPositionError): void {
  console.log(error);
}

const optionsObj = {};

const miniGeoLocation = new MiniGeolocation();
miniGeoLocation.getCurrentPosition(geoLocationSuccess);
miniGeoLocation.getCurrentPosition(geoLocationSuccess, geoLocationError);
miniGeoLocation.getCurrentPosition(
  geoLocationSuccess,
  geoLocationError,
  optionsObj
);
miniGeoLocation.watchPosition(geoLocationSuccess);
miniGeoLocation.watchPosition(geoLocationSuccess, geoLocationError);
const watchId = miniGeoLocation.watchPosition(
  geoLocationSuccess,
  geoLocationError,
  optionsObj
);
miniGeoLocation.clearWatch(watchId);
