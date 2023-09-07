import { getDatabase, ref, set} from "firebase/database";

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