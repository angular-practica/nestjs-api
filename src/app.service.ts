import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppDocument, App } from './app.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(App.name) private appModel: Model<AppDocument>
  ) {}

  async getAll() {
    return await this.appModel.find({});
  }

  async get(id: string | number) {
    return await this.appModel.findById(id);
  }

  async create(body: any) {
    return await this.appModel.create(body);
  }

  async update(id: string, body: any) {
    return await this.appModel.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id: string) {
    return await this.appModel.findByIdAndDelete(id);
  }

}
