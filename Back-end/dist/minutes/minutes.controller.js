"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinutesController = void 0;
const common_1 = require("@nestjs/common");
const minute_input_1 = require("./minute.input");
const minute_update_1 = require("./minute.update");
const minutes_service_1 = require("./minutes.service");
const swagger_1 = require("@nestjs/swagger");
let MinutesController = class MinutesController {
    constructor(service) {
        this.service = service;
    }
    async create(input) {
        if (input.content === undefined || input.idVoters === undefined || input.date === undefined || input.idAssociation === undefined) {
            throw new common_1.HttpException('donnée manquante', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.service.create(input.content, input.idVoters.map(Number), input.date, input.idAssociation);
    }
    async get() {
        return await this.service.get();
    }
    async getid(parameter) {
        const minute = await this.service.getid(+parameter.id);
        if (minute === undefined)
            throw new common_1.HttpException('minute introuvable', common_1.HttpStatus.NOT_FOUND);
        return await minute;
    }
    async getVoters(parameter) {
        const UserVoters = this.service.getVoters(+parameter.id);
        if (UserVoters === undefined)
            throw new common_1.HttpException('minute introuvable', common_1.HttpStatus.NOT_FOUND);
        return await UserVoters;
    }
    async getAssoc(parameter) {
        const UserVoters = this.service.getAssoc(+parameter.id);
        if (UserVoters === undefined)
            throw new common_1.HttpException('minute introuvable', common_1.HttpStatus.NOT_FOUND);
        return await UserVoters;
    }
    async put(parameter, input) {
        const minute = this.service.put(+parameter.id, input.content, input.idVoters, input.date, input.idAssociation);
        if (minute === undefined)
            throw new common_1.HttpException('minute introuvable', common_1.HttpStatus.NOT_FOUND);
        return await minute;
    }
    async delete(parameter) {
        const bool = this.service.delete(+parameter.id);
        if (await bool === false)
            throw new common_1.HttpException('minute introuvable', common_1.HttpStatus.NOT_FOUND);
        return true;
    }
};
exports.MinutesController = MinutesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [minute_input_1.MinuteInput]),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "getid", null);
__decorate([
    (0, common_1.Get)(':id/voters'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "getVoters", null);
__decorate([
    (0, common_1.Get)('/association/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "getAssoc", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, minute_update_1.MinuteUpdate]),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MinutesController.prototype, "delete", null);
exports.MinutesController = MinutesController = __decorate([
    (0, swagger_1.ApiTags)('minutes'),
    (0, common_1.Controller)('minutes'),
    __metadata("design:paramtypes", [minutes_service_1.MinutesService])
], MinutesController);
//# sourceMappingURL=minutes.controller.js.map