import { readFileSync } from 'fs';



async function read_file(dir) {
    try {
      const data = await readFileSync(dir, { encoding: 'utf8' });
      console.log(dir+": "+count_words(data)+" words");
  
    } catch (err) {
      console.log(err);
    }
  }
  
  function count_words(str){
      const trim_str = str.trim();
      const words = trim_str.split(/\s+/);//trim at one or more space 
      const nonEmptyWords = words.filter(word => word !== '');   
      return nonEmptyWords.length;
  }



const jsonFilePath = 'config.json';
try {
  const jsonContent = readFileSync(jsonFilePath, 'utf8');
  const files_arr = JSON.parse(jsonContent);

  //console.log( files_arr.files);

  for (let i=0;i<files_arr.files.length;i++){

    //console.log( files_arr.files[i]);//instead we count
    read_file(files_arr.files[i]);
  }
  
} catch (error) {
  console.error(`Error reading or parsing JSON file ${jsonFilePath}: ${error.message}`);
}



  //read_file("files/ttt.txt");
