export const es5CreateCatDtoText = `
import { IsInt, IsString } from 'class-validator';
import { Status } from './status';
import { CONSTANT_STRING, CONSTANT_OBJECT, MIN_VAL } from './constants';

export class CreateCatDtoEs5 {
  name: string = CONSTANT_STRING;
  status: Status = Status.ENABLED;
  obj = CONSTANT_OBJECT;

  @Min(MIN_VAL)
  @Max(10)
  age: number = 3;
}
`;

export const es5CreateCatDtoTextTranspiled = `\"use strict\";
Object.defineProperty(exports, \"__esModule\", { value: true });
var openapi = require(\"@nestjs/swagger\");
var status_1 = require(\"./status\");
var constants_1 = require(\"./constants\");
var CreateCatDtoEs5 = /** @class */ (function () {
    function CreateCatDtoEs5() {
        this.name = constants_1.CONSTANT_STRING;
        this.status = status_1.Status.ENABLED;
        this.obj = constants_1.CONSTANT_OBJECT;
        this.age = 3;
    }
    CreateCatDtoEs5._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: true, type: function () { return String; }, default: constants_1.CONSTANT_STRING }, status: { required: true, type: function () { return Object; }, default: status_1.Status.ENABLED }, obj: { required: true, type: function () { return Object; }, default: constants_1.CONSTANT_OBJECT }, age: { required: true, type: function () { return Number; }, default: 3, minimum: constants_1.MIN_VAL, maximum: 10 } };
    };
    __decorate([
        Min(constants_1.MIN_VAL),
        Max(10)
    ], CreateCatDtoEs5.prototype, \"age\", void 0);
    return CreateCatDtoEs5;
}());
exports.CreateCatDtoEs5 = CreateCatDtoEs5;
`;
