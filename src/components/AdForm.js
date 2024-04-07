import React, { useState } from 'react';
import { useBoard } from '../context/BoardContext';

const AdForm = () => {
    const [title, setTitle] = useState('');
    const { addAd } = useBoard();

    const handleSubmit = e => {
        e.preventDefault();
        addAd({ title });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Добавить объявление"
                required
                rows={2} // Вы можете установить количество строк в textarea по вашему выбору
                cols={100} // И количество столбцов
            /> &nbsp; &nbsp;
            <button type="submit" class="btn btn-success">Добавить</button>
        </form>
    );
};

export default AdForm;
