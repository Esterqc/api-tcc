import {  InserirAgendamento} from '../repository/agendamentoRepository.js';

import {Router} from 'express'
const server =Router();

server.post('/agendar',async (req,resp) =>{
    try{
        const novoAgendarmento = req.body;

        if(!novoAgendarmento.nome)
        throw new Error('Nome Do Paciente é obrigatorio!')

        const Agendarconsulta = await InserirAgendamento(novoAgendarmento);

        resp.send(Agendarconsulta);
    } catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})










export default server;