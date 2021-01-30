import { Injectable } from '@angular/core';

@Injectable()
export class EqualityService {
    areRefreshEqual(value1: string | any[], value2: string | any[]) {
        if (this.isNullorUndefined(value1)) {
            return false;
        }

        if (this.isNullorUndefined(value2)) {
            return false;
        }

        if (this.oneValueIsStringAndTheOtherIsArray(value1, value2)) {
            console.log('oneValueIsStringAndTheOtherIsArray');
            return false;
        }

        if (this.bothValuesAreStrings(value1, value2)) {
            console.log('bothValuesAreStrings');
            return value1 === value2;
        }

        if (this.bothValuesAreArrays(value1, value2)) {
            console.log('bothValuesAreArrays');
            return this.arraysHaveEqualContent(value1 as any[], value2 as any[]);
        }

        return false;
    }

    areEqual(value1: string | any[] | object | null | undefined, value2: string | any[] | object | null | undefined) {
        if (!value1 || !value2) {
            return false;
        }

        if (this.bothValuesAreArrays(value1, value2)) {
            return this.arraysStrictEqual(value1 as any[], value2 as any[]);
        }

        if (this.bothValuesAreStrings(value1, value2)) {
            return value1 === value2;
        }

        if (this.bothValuesAreObjects(value1, value2)) {
            return JSON.stringify(value1).toLowerCase() === JSON.stringify(value2).toLowerCase();
        }

        if (this.oneValueIsStringAndTheOtherIsArray(value1, value2)) {
            if (Array.isArray(value1) && this.valueIsString(value2)) {
                return value1[0] === value2;
            }
            if (Array.isArray(value2) && this.valueIsString(value1)) {
                return value2[0] === value1;
            }
        }
    }

    private oneValueIsStringAndTheOtherIsArray(value1: string | object | any[], value2: string | object | any[]) {
        return (Array.isArray(value1) && this.valueIsString(value2)) || (Array.isArray(value2) && this.valueIsString(value1));
    }

    private bothValuesAreObjects(value1: string | object | any[], value2: string | object | any[]) {
        return this.valueIsObject(value1) && this.valueIsObject(value2);
    }

    private bothValuesAreStrings(value1: string | object | any[], value2: string | object | any[]) {
        return this.valueIsString(value1) && this.valueIsString(value2);
    }

    private bothValuesAreArrays(value1: string | object | any[], value2: string | object | any[]) {
        return Array.isArray(value1) && Array.isArray(value2);
    }

    private valueIsString(value: any) {
        return typeof value === 'string' || value instanceof String;
    }

    private valueIsObject(value: any) {
        return typeof value === 'object';
    }

    private arraysStrictEqual(arr1: Array<string>, arr2: Array<string>) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = arr1.length; i--; ) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }

    private arraysHaveEqualContent(arr1: Array<string>, arr2: Array<string>) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        return arr1.some((v) => arr2.includes(v));
    }

    private isNullorUndefined(val: any) {
        return val === null || val === undefined;
    }
}
