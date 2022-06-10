import {  InserirAgendamento} from '../repository/agendamentoRepository.js';

import {Router} from 'express'
const server =Router();

server.post('/agendar',async (req,resp) =>{
    try{
        const novoAgendarmento = req.body;

        if(!novoAgendarmento.nome)
        throw new Error('Nome Do Paciente é obrigatorio!')

        if(!novoAgendarmento.idade)
        throw new Error('idade Do Paciente é obrigatorio!')

        if(!novoAgendarmento.nasc)
        throw new Error('Data de nasc Do Paciente é obrigatorio!')

        if(!novoAgendarmento.cpf)
        throw new Error('cpf Do Paciente é obrigatorio!')

        if(!novoAgendarmento.rg)
        throw new Error('rg Do Paciente é obrigatorio!')

        if(!novoAgendarmento.doutor)
        throw new Error(' nome do doutor é obrigatorio!')

        if(!novoAgendarmento.servico)
        throw new Error(' servico é obrigatorio!')  

        if(!novoAgendarmento.  agendamento)
        throw new Error('  agendamento é obrigatorio!')




        

        const Agendarconsulta = await InserirAgendamento(novoAgendarmento);

        resp.send(Agendarconsulta);
    } catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})










export default server;