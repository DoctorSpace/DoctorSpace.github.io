import { getDatabase, ref, set, child, get } from "firebase/database";

export const writeCardData = (cardId, title, category, imageUrl, price) => {

    const db = getDatabase();
    set(ref(db, 'cards/' + cardId), {
        id: cardId,
        title: title,
        category: category,
        url_img : imageUrl,
        price: price,
    });
}

// Добавить функцию считывания данных одной карточки

// Добавить функцию считывания данных Всех карточек