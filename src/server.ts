
import { servertHttp } from "./app";  

const PORT = process.env.PORT || 4000

servertHttp.listen(PORT, () => console.log('server rodando'))