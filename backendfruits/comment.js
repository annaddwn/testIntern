const IComment = [
    {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
    {
    commentId: 11,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 111,
    commentContent: 'Haai juga hai jugaa'
    },
    {
    commentId: 112,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    },
    {
    commentId: 12,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 121,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    }
    ]
    },
    {
    commentId: 2,
    commentContent: 'Halooo'
    }
    ]

// Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
// balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

function countTotalComments (comments) {
    return comments.reduce((total, comment) => {
        total++;

        if(comment.replies){
            total += countTotalComments (comment.replies);
        }

        return total;

    }, 0); 
}

const totalComments = countTotalComments(IComment);
console.log("Total Comments: ", totalComments);
