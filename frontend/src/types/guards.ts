import {Data, Resource} from "./jsonapi";



export const isJSONAPIResourceList = <T>(data: Data<T>): data is Resource<T> => {
    return data !== undefined &&
           data !== null &&
           data.hasOwnProperty('length');
};

