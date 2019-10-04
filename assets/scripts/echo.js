window.onload = function() {
    const btnCommentForm = document.getElementById('comment-form');
    const btnCommentMessage = document.getElementById('comment-message');
    const btnCommentSend = document.getElementById('comment-send');
    const btnCommentShow = document.getElementById('comment-show');

    btnCommentShow.onclick = function(event) {
        document.getElementById('comment-form').classList.remove('hide');
        document.getElementById('comment-form').classList.add('show');
        document.getElementById('comment-show').classList.remove('show');
        document.getElementById('comment-show').classList.add('hide');
        document.getElementById('comment-message').classList.remove('show');
        document.getElementById('comment-message').classList.add('hide');
    }

    btnCommentSend.onclick = function(event) {
        document.getElementById('comment-form').classList.remove('show');
        document.getElementById('comment-form').classList.add('hide');
        document.getElementById('comment-show').classList.remove('hide');
        document.getElementById('comment-show').classList.add('show');
        document.getElementById('comment-message').classList.remove('hide');
        document.getElementById('comment-message').classList.add('show');
        document.getElementById('comment-message').innerHTML = 'Terima kasih atas komentar Anda';
    }
}