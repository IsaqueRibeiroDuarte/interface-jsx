import React, { useState } from "react"; // Importa a biblioteca React e o hook `useState`.

// Importa os Ícones do React Icons
import { FaPenClip, FaTrash } from "react-icons/fa6"; // Importa ícones da biblioteca `react-icons`. Lápis e Lixeira
import { CgMathPlus } from "react-icons/cg"; // // Importa ícone da biblioteca `react-icons`. Sinal de Mais +

const TaskTable = ({ tasks, setTasks, openModal }) => {
  // Define o componente TaskTable recebendo funções e estado do modal como props.
  const [newTask, setNewTask] = useState(""); // Hook `useState` para gerenciar o estado da nova tarefa.

  const handleAddTask = () => {
    // Função para adicionar uma nova tarefa.
    if (newTask.trim()) {
      // Verifica se a nova tarefa não está vazia.
      setTasks([...tasks, { name: newTask, completed: false }]); // Adiciona a nova tarefa à lista de tarefas.
      setNewTask(""); // Reseta o estado da nova tarefa.
    }
  };

  const handleKeyPress = (event) => {
    // Função para adicionar uma nova tarefa ao pressionar a tecla Enter.
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleToggleCompleted = (index) => {
    // Função para marcar/desmarcar uma tarefa como completa.
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Atualiza o estado das tarefas com a tarefa marcada/desmarcada.
  };

  return (
    <div className="task-table">
      {" "}
      {/* Define um container para a tabela de tarefas com a classe `task-table`. */}
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <table>
        {" "}
        {/* Define uma tabela. */}
        <thead>
          {" "}
          {/* Define o cabeçalho da tabela. */}
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
          <tr>
            <th colSpan="3">
              <div className="separator"></div>
            </th>
          </tr>
          {/* <hr></hr> */}
        </thead>
        <tbody>
          {" "}
          {/* Define o corpo da tabela. */}
          <tr>
            <td>
              <input
                className="task-input"
                type="text"
                value={newTask}
                placeholder={tasks.length === 0 ? "Adicionar tarefa..." : "Adicionar nova tarefa..."}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
              />{" "}
              {/* Input para adicionar uma nova tarefa. */}
            </td>
            <td></td>
            <td>
              <CgMathPlus
                className="add"
                onClick={handleAddTask}
                style={{ cursor: "pointer" }}
              />{" "}
              {/* Ícone para adicionar tarefa. */}
            </td>
          </tr>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="task-name">{task.name}</td> {/* Exibe o nome da tarefa. */}
              <td>
                <input
                  type="checkbox"
                  className="check"
                  checked={task.completed}
                  onChange={() => handleToggleCompleted(index)}
                />{" "}
                {/* Checkbox para marcar/desmarcar tarefa como completa. */}
              </td>
              <td>
                <FaPenClip
                  className="icon1"
                  onClick={() => openModal(index, "edit", task.name)}
                  style={{ cursor: "pointer", marginRight: "15px" }}
                />{" "}
                {/* Ícone para editar tarefa. */}
                <FaTrash
                  className="icon2"
                  onClick={() => openModal(index, "delete", task.name)}
                  style={{ cursor: "pointer" }}
                />{" "}
                {/* Ícone para excluir tarefa. */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable; // Exporta o componente TaskTable.
