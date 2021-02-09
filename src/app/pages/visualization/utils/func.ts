import { isArray, isFunction } from 'lodash';

export const dealObject = (obj: { [key: string]: any }) => {
  return Object.keys(obj).reduce<{ [key: string]: any }>((prev, curr) => {
    if (isFunction(obj[curr])) {
      prev[curr] = ``;
    } else {
      prev[curr] = obj[curr];
    }
    return prev;
  }, {});
};

export const dealArray = (array: { [key: string]: any }[]) => {
  return array.reduce((prev, curr) => {
    prev.push(dealObject(curr));
    return prev;
  }, []);
};

export const dealData = (
  data: { [key: string]: any } | { [key: string]: any }[]
) => {
  if (isArray(data)) {
    return dealArray(data);
  } else {
    return dealObject(data);
  }
};

export const restoreData = (
  data: { [key: string]: any } | { [key: string]: any }[]
) => {
  if (isArray(data)) {
    return restoreArray(data);
  } else {
    return restoreObject(data);
  }
};

export const restoreObject = (obj: { [key: string]: any }) => {
  return Object.keys(obj).reduce<{ [key: string]: any }>((prev, curr) => {
    // tslint:disable-next-line: no-eval
    // eval('prev[curr] = obj[curr];');
    const x = new Function();
    return prev;
  }, {});
};

export const restoreArray = (array: { [key: string]: any }[]) => {};

// export const ARROW_FUNCTION_EX = /^$/;
