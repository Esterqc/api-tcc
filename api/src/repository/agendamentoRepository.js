import { con} from './connection.js';


export async function InserirAgendamento(agendar) {
    const comando=
    `Insert into TB_Agendamento(NM_paciente   ,  NR_idade ,  DT_nasc  , DS_CPF ,   DS_RG  ,  NM_doutor,   DS_servico,DT_agendamento,  VL_agendamento,  DS_forma_pag, DS_data_pag )
            values (?,?,?,?,?,?,?,?,?,?,?);
    `

    const  [resposta] = await con.query(comando,[agendar.nome,agendar.idade,agendar.nascimento,agendar.cpf,agendar.rg,agendar.doutor,agendar.servico,agendar.datadoagendamento,agendar.valordoagendamento,agendar.formapag,agendar.datapag]);
  agendar.id=  resposta.insertID;

  return agendar;
}