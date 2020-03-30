module.exports = {
    async up(db) {
        try {
            await db
                .collection('booksmodel')
                .find()
                .forEach(book => {
                    let length;
                    if (book.title) length = book.title.length;
                    db.collection('booksmodel').updateOne(
                        { _id: book._id },
                        {
                            $set: {
                                titleLength: `${length}`,
                            },
                        },
                    );
                });
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
