import { promises as fsPromises } from 'fs';
import { join } from 'path';

async function asyncReadFile(filename: string) {
    try {
      const result = await fsPromises.readFile(
        join(__dirname, filename),
        'utf-8',
      );
  
      console.log(result); 
  
      return result;
    } catch (err) {
      console.log(err);
      return 'Something went wrong'
    }
  }
  
  asyncReadFile('./data.csv');
