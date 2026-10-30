// Seleciona todas as tarefas e todas as colunas
const tarefas = document.querySelectorAll('.tarefa');
const colunas = document.querySelectorAll('.coluna');

// Configura o evento de arrastar para cada tarefa
tarefas.forEach(tarefa => {
    tarefa.addEventListener('dragstart', (e) => {
        // Salva o ID da tarefa que está sendo arrastada
        e.dataTransfer.setData('text/plain', e.target.id);
        tarefa.classList.add('dragging'); // Efeito visual de opacidade
    });

    tarefa.addEventListener('dragend', () => {
        tarefa.classList.remove('dragging');
    });
});

// Configura as colunas para receberem as tarefas (Zonas de Soltura)
colunas.forEach(coluna => {
    coluna.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necessário para permitir o drop
    });

    coluna.addEventListener('drop', (e) => {
        e.preventDefault();
        
        // Pega o ID da tarefa salva no dragstart
        const id = e.dataTransfer.getData('text/plain');
        const tarefaMovida = document.getElementById(id);
        
        // Move a tarefa para a coluna onde o mouse soltou
        if (tarefaMovida) {
            coluna.appendChild(tarefaMovida);
        }
    });
});