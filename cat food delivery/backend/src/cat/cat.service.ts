import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CatService {
  private cats;

  constructor() {
    const dataPath = path.join(__dirname, '../../data.json');
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    this.cats = JSON.parse(fileContent).cats;
  }

  findAll() {
    return this.cats;
  }
}