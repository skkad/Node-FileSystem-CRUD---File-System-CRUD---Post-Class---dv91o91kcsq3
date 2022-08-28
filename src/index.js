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
	fs.readFile(fileName,(err,data)=>{
		if(err){
			console.log(err);
		}
		console.log(data);
	});
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