import React from 'react';

function TodoForm() {
    return (
        <form>
            <label>...</label>
            <textarea 
                placeholder='Cortar una cebolla'
            />

            <div>
                <button>
                    Cancelar
                </button>

                <button>
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };