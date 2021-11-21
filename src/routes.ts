import { Router } from "express"; 
import { CreateMessageController } from "./controllers/messages/CreateMessageController";
import { GetMessagesController } from "./controllers/messages/GetMessageController";
import { CadastroUserController } from "./controllers/Users/CadastraUser";


const router = Router();

router.get("/getMessages", new GetMessagesController().handle)

router.post("/sendMessages", new CreateMessageController().handle)

router.post('/cadastrar', new CadastroUserController().handle)

router.post('/logar')//sera criada mais futuramente


export { router }
