import React, { useState, useEffect } from 'react'; // Importa a biblioteca React e os hooks `useState` e `useEffect`.
import '../styles/main.scss';

const Modal = ({ modal, closeModal }) => { // Define o componente Modal recebendo o estado do modal e a função para fechá-lo como props.
  const [taskName, setTaskName] = useState(modal.taskName); // Hook `useState` para gerenciar o estado do nome da tarefa no modal.

  useEffect(() => { // Hook `useEffect` para atualizar o estado do nome da tarefa quando o modal for aberto.
    setTaskName(modal.taskName);
  }, [modal.taskName]);

  if (!modal.show) return null; // Se o modal não estiver ativo, não renderiza nada.

  const handleClose = (confirm) => { // Função para fechar o modal com confirmação.
    if (modal.mode === 'edit') {
      closeModal(confirm, taskName); // Fecha o modal passando a confirmação e o novo nome da tarefa.
    } else {
      closeModal(confirm); // Fecha o modal passando a confirmação.
    }
  };

  return (
    <div className="modal-overlay"> {/* Define uma sobreposição para o modal com a classe `modal-overlay`. */}
      <div className="modal"> {/* Define o conteúdo do modal com a classe `modal`. */}
        <h2 style={{ color: 'black' }}>{modal.mode === 'edit' ? 'Deseja editar esse item?' : 'Deseja excluir esse item?'}</h2> {/* Título do modal dependendo do modo (editar/excluir) com cor preta. */}
        {modal.mode === 'edit' ? (
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          /> 
        ) : (
          <h3 style={{ color: 'black' }}>{modal.taskName}</h3> 
        )}
        <div className="modal-buttons"> {/* Container para os botões do modal. */}
          <button className='btn1' onClick={() => handleClose(false)}>Não</button> {/* Botão para cancelar a ação. */}
          <button className='btn2' onClick={() => handleClose(true)}>Sim</button> {/* Botão para confirmar a ação. */}
        </div>
      </div>
    </div>
  );
};

export default Modal; // Exporta o componente Modal.
