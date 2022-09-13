const { log } = require('console');
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(err)=>{
		if(err){
			console.log(err);
		}
		console.log("File Created");
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let mydata = await
	fs.readFile(fileName,'utf-8',(err,data)=>{
		if(err){
			// console.log(err);
			return err;
		}
		else return data;
		// console.log("File Readed");
		
	});
	return mydata;
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		if(err){
			console.log(err);
		}
		console.log("File Appended");
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(err)=>{
		if(err){
			console.log(err);
		}
		console.log("File Deleted");
	});
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }