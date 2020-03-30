const genBooks = require('../data/modelParser');

module.exports = {
    async up(db) {
        try {
            const books = await genBooks();
            for (let i = 0; i < books.length; i += 1) {
                await db.collection('booksmodel').insertOne({
                    ...books[i],
                    createdAt: Date(),
                    updatedAt: Date(),
                });
            }
        } catch (error) {
            console.log(error);
        }
    },

    async down(db) {
        try {
            await db.collection('booksmodel').drop();
        } catch (error) {
            console.log(error);
        }
    },
};
