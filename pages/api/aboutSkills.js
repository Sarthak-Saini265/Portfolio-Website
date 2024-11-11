import *  as fs from "fs"
import path from "path"
export default async function handler(req, res) {
  try{
    const filePath = path.join(process.cwd(),"JSONs","About","skills.json")
    const data = await fs.promises.readFile(filePath,"utf-8")
    res.status(200).json(JSON.parse(data))
  }
  catch (error){
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
}