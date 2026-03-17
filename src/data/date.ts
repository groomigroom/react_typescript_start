import {DateTime} from 'luxon';

export const mkaeRandomPastDate = () => {
    const value = new Date().valueOf();
    const n = 100000;
    return new Date(value - Math.floor(Math.random() * n * n));
}

